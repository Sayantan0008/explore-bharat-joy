import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, ExternalLink, Navigation, ChevronDown, X, Plane, Train, Bus, Car } from "lucide-react";
import { SmartImage } from "@/components/media/SmartImage";
import { DestinationCard } from "@/components/cards/Cards";
import type { Destination } from "@/content/types";
import type { CityInfo, SeasonInfo, TravelInfo, FaqItem } from "@/data/stateExtras";
import { getStateBySlug } from "@/content/states";

function mapsSearchHref(q: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
function mapsCoordsHref(lat: number, lng: number) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
function directionsHref(q: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
}

/* -------------------- Cities -------------------- */
export function CitiesSection({ cities }: { cities: CityInfo[] }) {
  if (!cities.length) return null;
  return (
    <section className="mt-14">
      <header className="mb-5 flex items-baseline justify-between">
        <h2 className="font-display text-2xl font-semibold">Explore cities</h2>
        <span className="text-xs text-muted-foreground">{cities.length} cities</span>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((c) => (
          <Link
            key={c.slug}
            to="/cities/$slug"
            params={{ slug: c.slug }}
            className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
          >
            <SmartImage alt={c.name} kind="destination" seed={c.slug} aspect="aspect-[5/3]" rounded="rounded-none" />
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent-foreground">
                {c.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.shortDescription}</p>
              <dl className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                <Stat label="Attractions" value={String(c.attractionsCount)} />
                <Stat label="Foods" value={String(c.famousFoods.length)} />
                <Stat label="Festivals" value={String(c.majorFestivals.length)} />
              </dl>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-secondary/50 px-2 py-1.5 text-center">
      <div className="font-display text-sm font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* -------------------- Must-Visit Places -------------------- */
export function MustVisitSection({ destinations }: { destinations: Destination[] }) {
  if (!destinations.length) return null;
  return (
    <section className="mt-14">
      <header className="mb-5">
        <h2 className="font-display text-2xl font-semibold">Must-visit places</h2>
        <p className="mt-1 text-sm text-muted-foreground">The iconic destinations to anchor your trip around.</p>
      </header>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {destinations.map((d) => {
          const coordQ = `${d.coords.lat},${d.coords.lng}`;
          const nameQ = `${d.name}`;
          return (
            <article key={d.id} className="overflow-hidden rounded-2xl border border-border bg-card">
              <Link to="/destinations/$slug" params={{ slug: d.slug }} className="block">
                <SmartImage alt={d.name} kind="destination" seed={d.slug} aspect="aspect-[16/9]" rounded="rounded-none" />
              </Link>
              <div className="p-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <Link to="/destinations/$slug" params={{ slug: d.slug }} className="font-display text-xl font-semibold hover:text-accent-foreground">
                    {d.name}
                  </Link>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
                    {d.category}
                  </span>
                </div>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{d.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to="/destinations/$slug"
                    params={{ slug: d.slug }}
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    View Details
                  </Link>
                  <a
                    href={mapsCoordsHref(d.coords.lat, d.coords.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:border-accent"
                  >
                    <MapPin className="h-3.5 w-3.5" /> View on Google Maps
                  </a>
                  <a
                    href={directionsHref(nameQ + " " + coordQ)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:border-accent"
                  >
                    <Navigation className="h-3.5 w-3.5" /> Get Directions
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------- Things to Do -------------------- */
export function ThingsToDoSection({ items }: { items: { label: string; icon: string; blurb: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-14">
      <header className="mb-5">
        <h2 className="font-display text-2xl font-semibold">Things to do</h2>
        <p className="mt-1 text-sm text-muted-foreground">Experiences and activities to weave through your itinerary.</p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((x) => (
          <div key={x.label} className="rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent">
            <div className="text-2xl" aria-hidden>{x.icon}</div>
            <div className="mt-2 font-display text-base font-semibold">{x.label}</div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{x.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Best Time to Visit -------------------- */
export function SeasonsSection({ seasons }: { seasons: SeasonInfo[] }) {
  if (!seasons.length) return null;
  return (
    <section className="mt-14">
      <header className="mb-5">
        <h2 className="font-display text-2xl font-semibold">Best time to visit</h2>
        <p className="mt-1 text-sm text-muted-foreground">Plan around the seasons that suit your itinerary.</p>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {seasons.map((s) => (
          <div
            key={s.name}
            className={`relative rounded-2xl border bg-card p-5 ${s.recommended ? "border-accent shadow-sm" : "border-border"}`}
          >
            {s.recommended && (
              <span className="absolute right-3 top-3 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                Recommended
              </span>
            )}
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.months}</div>
            <div className="mt-1 font-display text-xl font-semibold">{s.name}</div>
            <p className="mt-2 text-sm text-foreground/80">{s.weather}</p>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              {s.activities.map((a) => <li key={a}>· {a}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Travel Information -------------------- */
export function TravelInfoSection({ travel }: { travel: TravelInfo }) {
  return (
    <section className="mt-14">
      <header className="mb-5">
        <h2 className="font-display text-2xl font-semibold">Travel information</h2>
        <p className="mt-1 text-sm text-muted-foreground">How to get in and get around.</p>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Panel icon={<Plane className="h-4 w-4" />} title="Nearest airports">
          <ul className="space-y-2">
            {travel.airports.map((a) => (
              <li key={a.name} className="flex items-center justify-between gap-3 text-sm">
                <span>{a.name}{a.code ? <span className="ml-1 text-xs text-muted-foreground">({a.code})</span> : null}</span>
                <a href={mapsSearchHref(a.mapsQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs text-accent-foreground hover:underline">
                  Map <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel icon={<Train className="h-4 w-4" />} title="Major railway stations">
          <ul className="space-y-2">
            {travel.railwayStations.map((r) => (
              <li key={r.name} className="flex items-center justify-between gap-3 text-sm">
                <span>{r.name}</span>
                <a href={mapsSearchHref(r.mapsQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs text-accent-foreground hover:underline">
                  Map <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel icon={<Car className="h-4 w-4" />} title="Road connectivity">
          <p className="text-sm text-foreground/85">{travel.roads}</p>
        </Panel>
        <Panel icon={<Bus className="h-4 w-4" />} title="Local transport">
          <ul className="grid grid-cols-2 gap-1.5 text-sm text-foreground/85">
            {travel.localTransport.map((t) => <li key={t}>· {t}</li>)}
          </ul>
        </Panel>
      </div>
    </section>
  );
}
function Panel({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {icon} {title}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/* -------------------- Nearby States -------------------- */
export function NearbyStatesSection({ slugs }: { slugs: string[] }) {
  const states = slugs.map((s) => getStateBySlug(s)).filter(Boolean) as NonNullable<ReturnType<typeof getStateBySlug>>[];
  if (!states.length) return null;
  return (
    <section className="mt-14">
      <h2 className="mb-5 font-display text-2xl font-semibold">Nearby states</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {states.map((s) => (
          <Link
            key={s.slug}
            to="/states/$slug"
            params={{ slug: s.slug }}
            className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
          >
            <SmartImage alt={s.name} kind="state" seed={s.slug} aspect="aspect-[4/3]" rounded="rounded-none" />
            <div className="p-3">
              <div className="font-display text-sm font-semibold transition-colors group-hover:text-accent-foreground">{s.name}</div>
              <div className="text-[11px] text-muted-foreground">Capital · {s.capital}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Photo Gallery + Lightbox -------------------- */
export function GallerySection({ seeds, stateName }: { seeds: string[]; stateName: string }) {
  const [open, setOpen] = useState<number | null>(null);
  if (!seeds.length) return null;
  return (
    <section className="mt-14">
      <h2 className="mb-5 font-display text-2xl font-semibold">Photo gallery</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        {seeds.map((seed, i) => (
          <button
            key={seed}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-xl"
            aria-label={`Open photo ${i + 1} of ${stateName}`}
          >
            <SmartImage alt={`${stateName} photo ${i + 1}`} kind="state" seed={seed} aspect={i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} rounded="rounded-none" />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <SmartImage alt={`${stateName} photo ${open + 1}`} kind="state" seed={seeds[open]} aspect="aspect-[16/10]" rounded="rounded-xl" />
            <div className="mt-3 flex items-center justify-between text-xs text-white/80">
              <button
                onClick={() => setOpen((open + seeds.length - 1) % seeds.length)}
                className="rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/20"
              >← Prev</button>
              <span>{open + 1} / {seeds.length}</span>
              <button
                onClick={() => setOpen((open + 1) % seeds.length)}
                className="rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/20"
              >Next →</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------- FAQ -------------------- */
export function FaqSection({ items, stateName }: { items: FaqItem[]; stateName: string }) {
  if (!items.length) return null;
  return (
    <section className="mt-14">
      <h2 className="mb-5 font-display text-2xl font-semibold">Frequently asked questions</h2>
      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        {items.map((f, i) => (
          <details key={i} className="group p-5 open:bg-secondary/30">
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-medium">
              {f.q}
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{f.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            about: stateName,
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
