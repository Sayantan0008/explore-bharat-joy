import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { getAllStates } from "@/content/states";

// Stylised tile-style map of India: each state/UT is a positioned button
// laid out roughly by region. Not cartographically accurate — intentionally
// abstract so it works on every screen and is keyboard accessible.

type Pos = { col: number; row: number; span?: number };

// Hand-tuned grid placement (12 columns × 11 rows).
const POSITIONS: Record<string, Pos> = {
  "jammu-and-kashmir": { col: 4, row: 1, span: 2 },
  "ladakh": { col: 6, row: 1, span: 2 },
  "himachal-pradesh": { col: 5, row: 2, span: 2 },
  "punjab": { col: 4, row: 2 },
  "chandigarh": { col: 4, row: 3 },
  "uttarakhand": { col: 7, row: 2, span: 2 },
  "haryana": { col: 5, row: 3 },
  "delhi": { col: 6, row: 3 },
  "rajasthan": { col: 2, row: 4, span: 3 },
  "uttar-pradesh": { col: 6, row: 4, span: 3 },
  "sikkim": { col: 9, row: 3 },
  "arunachal-pradesh": { col: 10, row: 3, span: 2 },
  "bihar": { col: 8, row: 4 },
  "assam": { col: 10, row: 4, span: 2 },
  "meghalaya": { col: 10, row: 5 },
  "nagaland": { col: 11, row: 5 },
  "manipur": { col: 11, row: 6 },
  "mizoram": { col: 11, row: 7 },
  "tripura": { col: 10, row: 6 },
  "west-bengal": { col: 9, row: 5 },
  "jharkhand": { col: 8, row: 5 },
  "chhattisgarh": { col: 6, row: 5 },
  "madhya-pradesh": { col: 4, row: 5, span: 2 },
  "gujarat": { col: 1, row: 5, span: 2 },
  "dadra-and-nagar-haveli-and-daman-and-diu": { col: 2, row: 6 },
  "maharashtra": { col: 3, row: 6, span: 3 },
  "odisha": { col: 7, row: 6, span: 2 },
  "telangana": { col: 5, row: 7, span: 2 },
  "andhra-pradesh": { col: 6, row: 8, span: 2 },
  "goa": { col: 3, row: 7 },
  "karnataka": { col: 4, row: 8, span: 2 },
  "kerala": { col: 4, row: 9 },
  "tamil-nadu": { col: 5, row: 9, span: 2 },
  "puducherry": { col: 6, row: 10 },
  "lakshadweep": { col: 2, row: 9 },
  "andaman-and-nicobar-islands": { col: 11, row: 9, span: 2 },
};

export function IndiaMap() {
  const states = getAllStates();
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredState = states.find((s) => s.slug === hovered);

  return (
    <div className="relative rounded-2xl border border-border bg-gradient-to-br from-secondary/60 to-card p-4 sm:p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-2xl font-semibold">Explore by region</h2>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          {hoveredState ? `${hoveredState.name} · ${hoveredState.capital}` : "Hover or tap a state"}
        </span>
      </div>
      <div
        className="grid gap-1.5"
        style={{
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gridAutoRows: "minmax(2.25rem, auto)",
        }}
      >
        {states.map((s) => {
          const pos = POSITIONS[s.slug];
          if (!pos) return null;
          const isShowcase = s.status === "showcase";
          return (
            <Link
              key={s.slug}
              to="/states/$slug"
              params={{ slug: s.slug }}
              onMouseEnter={() => setHovered(s.slug)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(s.slug)}
              onBlur={() => setHovered(null)}
              aria-label={`${s.name}${s.isUT ? " (Union Territory)" : ""}`}
              className={[
                "flex items-center justify-center rounded-md border px-1.5 py-1 text-[10px] sm:text-xs font-medium text-center leading-tight transition-all focus:outline-none focus:ring-2 focus:ring-ring",
                isShowcase
                  ? "border-accent/40 bg-accent/15 text-accent-foreground hover:bg-accent/35 hover:border-accent"
                  : "border-border bg-card/60 text-muted-foreground hover:bg-card hover:text-foreground",
                hovered === s.slug ? "scale-[1.04] shadow-sm" : "",
              ].join(" ")}
              style={{
                gridColumn: `${pos.col} / span ${pos.span ?? 1}`,
                gridRow: `${pos.row}`,
              }}
            >
              <span className="line-clamp-2">{s.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent/60 border border-accent" />
          Full guide
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-card border border-border" />
          Coming soon
        </span>
      </div>
    </div>
  );
}
