import { Link } from "@tanstack/react-router";
import { useMemo, useRef, useState, useEffect } from "react";
import {
  INDIA_STATE_GEOS,
  INDIA_VIEW_W,
  INDIA_VIEW_H,
  projectLngLat,
  type StateGeo,
} from "@/data/indiaMapPaths";
import { getAllStates } from "@/content/states";
import { getDestinationsByState, getAllDestinations } from "@/content/destinations";
import { getFoodsByState } from "@/content/foods";
import { getFestivalsByState } from "@/content/festivals";
import {
  DESTINATION_COORDS,
  STATE_CAPITAL_COORDS,
} from "@/data/destinationCoords";
import type { State, Destination } from "@/content/types";
import { INTERESTS } from "@/lib/constants";

type Mode = "states" | "destinations";

type ViewBox = { x: number; y: number; w: number; h: number };
const FULL_VIEW: ViewBox = { x: 0, y: 0, w: INDIA_VIEW_W, h: INDIA_VIEW_H };

function bboxFromPath(d: string): ViewBox {
  // Parse only M / L coords (uppercase, absolute — which is what we emit).
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const re = /([ML])\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(d))) {
    const x = parseFloat(m[2]);
    const y = parseFloat(m[3]);
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  if (!isFinite(minX)) return FULL_VIEW;
  const pad = Math.max((maxX - minX), (maxY - minY)) * 0.18;
  return { x: minX - pad, y: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 };
}

function getStateCoord(slug: string): { lng: number; lat: number } | null {
  // Prefer the state's first destination with coords; else capital.
  const dests = getDestinationsByState(slug);
  for (const d of dests) {
    const c = DESTINATION_COORDS[d.slug];
    if (c) return c;
  }
  return STATE_CAPITAL_COORDS[slug] ?? null;
}

export function IndiaMap() {
  const allStates = useMemo(() => getAllStates(), []);
  const stateBySlug = useMemo(
    () => new Map(allStates.map((s) => [s.slug, s])),
    [allStates],
  );

  const [mode, setMode] = useState<Mode>("states");
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<ViewBox>(FULL_VIEW);
  const [hoveredDest, setHoveredDest] = useState<string | null>(null);
  const [modalDest, setModalDest] = useState<Destination | null>(null);

  // Tooltip position (svg user coords)
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const selectedGeo = selected
    ? INDIA_STATE_GEOS.find((g) => g.slug === selected) ?? null
    : null;
  const selectedState = selected ? stateBySlug.get(selected) ?? null : null;

  // Smoothly animate the viewBox to a new target whenever selection changes.
  const rafRef = useRef<number | null>(null);
  const animateTo = (target: ViewBox, duration = 650) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const from = view;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const k = ease(t);
      setView({
        x: from.x + (target.x - from.x) * k,
        y: from.y + (target.y - from.y) * k,
        w: from.w + (target.w - from.w) * k,
        h: from.h + (target.h - from.h) * k,
      });
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    animateTo(selectedGeo ? bboxFromPath(selectedGeo.d) : FULL_VIEW);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGeo]);

  function handleStateClick(slug: string) {
    setSelected((prev) => (prev === slug ? null : slug));
  }

  function zoom(factor: number) {
    const cx = view.x + view.w / 2;
    const cy = view.y + view.h / 2;
    const w = Math.max(80, Math.min(INDIA_VIEW_W * 1.2, view.w * factor));
    const h = Math.max(80, Math.min(INDIA_VIEW_H * 1.2, view.h * factor));
    animateTo({ x: cx - w / 2, y: cy - h / 2, w, h }, 350);
  }

  function reset() {
    setSelected(null);
    animateTo(FULL_VIEW, 600);
  }

  // Pan via drag
  const dragRef = useRef<{ x: number; y: number; view: ViewBox } | null>(null);
  function onMouseDown(e: React.MouseEvent) {
    if ((e.target as SVGElement).tagName === "path") return; // let path clicks through
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    dragRef.current = { x: e.clientX, y: e.clientY, view };
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragRef.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const sx = view.w / rect.width;
    const sy = view.h / rect.height;
    const dx = (e.clientX - dragRef.current.x) * sx;
    const dy = (e.clientY - dragRef.current.y) * sy;
    setView({
      x: dragRef.current.view.x - dx,
      y: dragRef.current.view.y - dy,
      w: dragRef.current.view.w,
      h: dragRef.current.view.h,
    });
  }
  function onMouseUp() { dragRef.current = null; }

  // Destination markers (mode === "destinations" or selected state in state mode)
  const destinations = useMemo(() => getAllDestinations(), []);
  const allDestMarkers = useMemo(() => {
    return destinations
      .map((d) => {
        const c = DESTINATION_COORDS[d.slug];
        if (!c) return null;
        const p = projectLngLat(c.lng, c.lat);
        return { dest: d, x: p.x, y: p.y };
      })
      .filter(Boolean) as { dest: Destination; x: number; y: number }[];
  }, [destinations]);

  const stateDestMarkers = useMemo(() => {
    if (!selected) return [];
    return getDestinationsByState(selected)
      .map((d) => {
        const c = DESTINATION_COORDS[d.slug] ?? STATE_CAPITAL_COORDS[selected];
        if (!c) return null;
        const p = projectLngLat(c.lng, c.lat);
        return { dest: d, x: p.x, y: p.y, name: d.name };
      })
      .filter(Boolean) as { dest: Destination; x: number; y: number; name: string }[];
  }, [selected]);

  const hoveredState = hovered ? stateBySlug.get(hovered) ?? null : null;

  function handlePathMove(e: React.MouseEvent, slug: string) {
    setHovered(slug);
    if (!svgRef.current) return;
    const pt = svgRef.current.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const ctm = svgRef.current.getScreenCTM();
    if (!ctm) return;
    const local = pt.matrixTransform(ctm.inverse());
    setTip({ x: local.x, y: local.y });
  }

  const hoveredDestObj = hoveredDest
    ? (mode === "destinations" ? allDestMarkers : stateDestMarkers).find(
        (m) => m.dest.slug === hoveredDest,
      ) ?? null
    : null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]">
      {/* Map */}
      <div
        className="relative overflow-hidden rounded-2xl border border-border shadow-sm"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.95), rgba(245,241,232,0.95))",
        }}
      >
        {/* Top bar */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full border border-border bg-card/90 p-1 text-xs shadow-sm backdrop-blur">
          <button
            type="button"
            onClick={() => setMode("states")}
            className={`rounded-full px-3 py-1 transition-colors ${mode === "states" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            aria-pressed={mode === "states"}
          >
            States
          </button>
          <button
            type="button"
            onClick={() => setMode("destinations")}
            className={`rounded-full px-3 py-1 transition-colors ${mode === "destinations" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            aria-pressed={mode === "destinations"}
          >
            Destinations
          </button>
        </div>

        {/* Zoom controls */}
        <div className="absolute right-3 top-3 z-10 flex flex-col items-stretch gap-1 rounded-xl border border-border bg-card/90 p-1 text-xs shadow-sm backdrop-blur">
          <button type="button" onClick={() => zoom(0.75)} aria-label="Zoom in" className="h-7 w-7 rounded-md hover:bg-accent/30">+</button>
          <button type="button" onClick={() => zoom(1.3333)} aria-label="Zoom out" className="h-7 w-7 rounded-md hover:bg-accent/30">−</button>
          <button type="button" onClick={reset} aria-label="Reset view" className="h-7 w-7 rounded-md hover:bg-accent/30" title="Fit to India">⤾</button>
        </div>

        <svg
          ref={svgRef}
          viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
          preserveAspectRatio="xMidYMid meet"
          className="block h-[520px] w-full cursor-grab touch-none select-none active:cursor-grabbing sm:h-[640px] md:h-[760px] lg:h-[860px]"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => { onMouseUp(); setHovered(null); setTip(null); }}
          style={{ transition: "none" }}
          role="img"
          aria-label="Interactive map of India — click a state to explore"
        >
        {/* Subtle drop shadow for ocean */}
          <defs>
            <filter id="india-shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.18" />
            </filter>
            <filter id="state-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff9933" floodOpacity="0.55" />
            </filter>
          </defs>

          <g filter="url(#india-shadow)">
            {INDIA_STATE_GEOS.map((g: StateGeo) => {
              const isSel = selected === g.slug;
              const isHov = hovered === g.slug;
              const dim = (selected && !isSel) || (mode === "destinations" && !isSel && !isHov);
              const meta = stateBySlug.get(g.slug);
              const baseFill = regionFill(meta?.region, meta?.isUT, g.slug);
              return (
                <path
                  key={g.slug}
                  d={g.d}
                  fill={isSel ? "#ff9933" : baseFill}
                  stroke="rgba(255,255,255,0.92)"
                  strokeWidth={isSel ? 1.8 : isHov ? 1.6 : 1.4}
                  strokeLinejoin="round"
                  className="cursor-pointer transition-[fill,stroke,opacity,filter,transform] duration-200"
                  style={{
                    opacity: dim ? 0.55 : 1,
                    filter: isSel
                      ? "url(#state-glow) brightness(1.05)"
                      : isHov
                        ? "brightness(1.08) drop-shadow(0 2px 4px rgba(0,0,0,0.12))"
                        : "drop-shadow(0 1px 2px rgba(0,0,0,0.08))",
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    transform: isHov && !isSel ? "scale(1.015)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => handlePathMove(e, g.slug)}
                  onMouseMove={(e) => handlePathMove(e, g.slug)}
                  onClick={(e) => { e.stopPropagation(); handleStateClick(g.slug); }}
                >
                  <title>{g.name}</title>
                </path>
              );
            })}
          </g>


          {/* Destination markers */}
          {mode === "destinations" &&
            allDestMarkers.map(({ dest, x, y }) => (
              <g
                key={dest.id}
                transform={`translate(${x} ${y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredDest(dest.slug)}
                onMouseLeave={() => setHoveredDest(null)}
                onClick={(e) => { e.stopPropagation(); setModalDest(dest); }}
              >
                <circle r={5} fill="var(--primary)" stroke="var(--background)" strokeWidth={1.5} />
                <circle r={9} fill="color-mix(in oklab, var(--primary) calc(0.25 * 100%), transparent)" />
              </g>
            ))}

          {mode === "states" &&
            selected &&
            stateDestMarkers.map(({ dest, x, y, name }) => (
              <g
                key={dest.id}
                transform={`translate(${x} ${y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredDest(dest.slug)}
                onMouseLeave={() => setHoveredDest(null)}
                onClick={(e) => { e.stopPropagation(); setModalDest(dest); }}
              >
                <circle r={4} fill="var(--primary)" stroke="var(--background)" strokeWidth={1.2} />
                <text
                  x={6}
                  y={3}
                  fontSize={9}
                  className="pointer-events-none fill-foreground"
                  style={{ paintOrder: "stroke", stroke: "var(--background)", strokeWidth: 2.5 }}
                >
                  {name}
                </text>
              </g>
            ))}

          {/* Hover tooltip */}
          {hoveredState && tip && !selected && (
            <g transform={`translate(${tip.x + 10} ${tip.y + 10})`} className="pointer-events-none">
              <rect width={170} height={90} rx={6} fill="var(--popover)" stroke="var(--border)" />
              <text x={10} y={20} fontSize={11} fontWeight={600} className="fill-foreground">
                {hoveredState.name}
              </text>
              <text x={10} y={36} fontSize={9} className="fill-muted-foreground">
                Capital · {hoveredState.capital}
              </text>
              <text x={10} y={52} fontSize={9} className="fill-muted-foreground">
                {hoveredState.stats.attractions} attractions · {hoveredState.stats.foods} foods
              </text>
              <text x={10} y={66} fontSize={9} className="fill-muted-foreground">
                {hoveredState.stats.festivals} festivals
              </text>
              <text x={10} y={80} fontSize={9} className="fill-muted-foreground">
                Best · {hoveredState.bestTimeToVisit}
              </text>
            </g>
          )}

          {hoveredDestObj && (
            <g transform={`translate(${hoveredDestObj.x + 8} ${hoveredDestObj.y + 8})`} className="pointer-events-none">
              <rect width={150} height={28} rx={5} fill="var(--popover)" stroke="var(--border)" />
              <text x={8} y={18} fontSize={11} className="fill-foreground">
                {hoveredDestObj.dest.name}
              </text>
            </g>
          )}
        </svg>

        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between text-[11px] text-muted-foreground">
          <span>
            {mode === "states"
              ? selected
                ? `Selected · ${selectedState?.name}`
                : "Hover a state · click to explore"
              : "All featured destinations across India"}
          </span>
          <span className="hidden sm:inline">28 states · 8 Union Territories</span>
        </div>
      </div>

      {/* Side panel */}
      <SidePanel
        state={selectedState}
        onClear={() => setSelected(null)}
        fallback={
          mode === "destinations" ? (
            <DestinationsHint />
          ) : (
            <DefaultHint allStates={allStates} />
          )
        }
      />

      {modalDest && (
        <CityModal
          dest={modalDest}
          state={stateBySlug.get(modalDest.stateSlug) ?? null}
          onClose={() => setModalDest(null)}
        />
      )}
    </div>
  );
}

function CityModal({
  dest,
  state,
  onClose,
}: {
  dest: Destination;
  state: State | null;
  onClose: () => void;
}) {
  const foods = getFoodsByState(dest.stateSlug).slice(0, 6);
  const fests = getFestivalsByState(dest.stateSlug).slice(0, 6);
  const coord =
    DESTINATION_COORDS[dest.slug] ??
    STATE_CAPITAL_COORDS[dest.stateSlug] ??
    null;
  const mapsHref = coord
    ? `https://www.google.com/maps/search/?api=1&query=${coord.lat},${coord.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.name + ", India")}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${dest.name} details`}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-44 w-full overflow-hidden bg-secondary sm:h-56">
          {dest.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={dest.image}
              alt={dest.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-card/90 text-foreground shadow hover:bg-card"
          >
            ×
          </button>
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="text-[11px] uppercase tracking-wide opacity-80">
              {state?.name ?? dest.stateSlug} · {dest.category}
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight">{dest.name}</h3>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{dest.description}</p>

          {dest.interests.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {dest.interests.map((slug) => {
                const meta = INTERESTS.find((i) => i.slug === slug);
                return (
                  <span
                    key={slug}
                    className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {meta?.label ?? slug}
                  </span>
                );
              })}
            </div>
          )}

          <ModalSection title="Top attractions">
            {dest.highlights.length > 0 ? (
              <ul className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
                {dest.highlights.slice(0, 8).map((h) => (
                  <li key={h} className="flex gap-2 text-foreground">
                    <span className="text-accent-foreground">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyHint text="Attractions guide coming soon." />
            )}
          </ModalSection>

          <ModalSection title="Regional foods">
            {foods.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {foods.map((f) => (
                  <ModalChip key={f.id} label={f.name} />
                ))}
              </ul>
            ) : (
              <EmptyHint text="No food guides yet for this state." />
            )}
          </ModalSection>

          <ModalSection title="Festivals nearby">
            {fests.length > 0 ? (
              <ul className="flex flex-wrap gap-1.5">
                {fests.map((f) => (
                  <ModalChip key={f.id} label={`${f.name} · ${f.month}`} />
                ))}
              </ul>
            ) : (
              <EmptyHint text="No festival guides yet for this state." />
            )}
          </ModalSection>
        </div>

        <div className="flex flex-col gap-2 border-t border-border bg-background/60 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-accent/30"
          >
            <span aria-hidden>📍</span> Open in Google Maps
          </a>
          <Link
            to="/destinations/$slug"
            params={{ slug: dest.slug }}
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Open full guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ModalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}

function ModalChip({ label }: { label: string }) {
  return (
    <li className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px]">
      {label}
    </li>
  );
}

function EmptyHint({ text }: { text: string }) {
  return <p className="text-xs text-muted-foreground">{text}</p>;
}


function SidePanel({
  state,
  onClear,
  fallback,
}: {
  state: State | null;
  onClear: () => void;
  fallback: React.ReactNode;
}) {
  if (!state) {
    return (
      <aside className="rounded-2xl border border-border bg-card p-5">
        {fallback}
      </aside>
    );
  }
  const dests = getDestinationsByState(state.slug);
  const foods = getFoodsByState(state.slug);
  const fests = getFestivalsByState(state.slug);
  return (
    <aside className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
            {state.isUT ? "Union Territory" : "State"}
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight">{state.name}</h3>
          <div className="mt-1 text-xs text-muted-foreground">Capital · {state.capital}</div>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground hover:text-foreground"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <Stat label="Attractions" value={state.stats.attractions} />
        <Stat label="Foods" value={state.stats.foods} />
        <Stat label="Festivals" value={state.stats.festivals} />
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-5">
        {state.overview}
      </p>

      {dests.length > 0 && (
        <Section title="Top destinations">
          <ul className="flex flex-wrap gap-1.5">
            {dests.slice(0, 6).map((d) => (
              <li key={d.id}>
                <Link
                  to="/destinations/$slug"
                  params={{ slug: d.slug }}
                  className="inline-block rounded-full border border-border bg-background px-2.5 py-1 text-[11px] hover:bg-accent/30"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {foods.length > 0 && (
        <Section title="Try the food">
          <p className="text-[11px] text-muted-foreground">
            {foods.slice(0, 4).map((f) => f.name).join(" · ")}
          </p>
        </Section>
      )}

      {fests.length > 0 && (
        <Section title="Festivals">
          <p className="text-[11px] text-muted-foreground">
            {fests.slice(0, 4).map((f) => f.name).join(" · ")}
          </p>
        </Section>
      )}

      <Link
        to="/states/$slug"
        params={{ slug: state.slug }}
        className="mt-auto inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Open {state.name} guide →
      </Link>
    </aside>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-border bg-background py-2">
      <div className="font-display text-lg font-semibold leading-none">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}

function DefaultHint({ allStates }: { allStates: State[] }) {
  const showcase = allStates.filter((s) => s.status === "showcase").slice(0, 8);
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Start here</div>
      <h3 className="font-display text-xl font-semibold leading-tight">Explore India through the map</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Hover any state for a quick read on what it's known for. Click to zoom in,
        see featured cities and open the full guide. Switch to <strong>Destinations</strong>{" "}
        to scan every featured place across India.
      </p>
      <div className="mt-4">
        <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Editor's picks
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {showcase.map((s) => (
            <li key={s.slug}>
              <Link
                to="/states/$slug"
                params={{ slug: s.slug }}
                className="inline-block rounded-full border border-border bg-background px-2.5 py-1 text-[11px] hover:bg-accent/30"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DestinationsHint() {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Destinations mode</div>
      <h3 className="font-display text-xl font-semibold leading-tight">Every featured place, at a glance</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Each pin is a destination guide. Hover for the name, click a state outline
        to zoom in and read more. Switch back to <strong>States</strong> mode for the
        state-by-state view.
      </p>
    </div>
  );
}
