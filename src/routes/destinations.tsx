import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { DestinationCard } from "@/components/cards/Cards";
import { getAllDestinations } from "@/content/destinations";
import { DESTINATION_CATEGORIES, INTERESTS, type InterestSlug, type DestinationCategory } from "@/lib/constants";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — India Atlas" },
      { name: "description", content: "Editor-picked destinations across India, filterable by category and interest." },
      { property: "og:title", content: "Destinations across India" },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const all = getAllDestinations();
  const [cat, setCat] = useState<DestinationCategory | "all">("all");
  const [interest, setInterest] = useState<InterestSlug | "all">("all");

  const filtered = useMemo(() => all.filter((d) =>
    (cat === "all" || d.category === cat) &&
    (interest === "all" || d.interests.includes(interest)),
  ), [all, cat, interest]);

  return (
    <Container className="py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Destinations</h1>
        <p className="mt-3 text-muted-foreground">{all.length} places across our showcase states.</p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</div>
          <div className="flex flex-wrap gap-1.5">
            <Chip active={cat === "all"} onClick={() => setCat("all")}>All</Chip>
            {DESTINATION_CATEGORIES.map((c) => (
              <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interest</div>
          <div className="flex flex-wrap gap-1.5">
            <Chip active={interest === "all"} onClick={() => setInterest("all")}>All</Chip>
            {INTERESTS.map((i) => (
              <Chip key={i.slug} active={interest === i.slug} onClick={() => setInterest(i.slug)}>
                {i.icon} {i.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No destinations match — try clearing a filter.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => <DestinationCard key={d.id} dest={d} />)}
        </div>
      )}
    </Container>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-3 py-1 text-xs transition-colors",
        active
          ? "border-accent bg-accent/20 text-accent-foreground"
          : "border-border bg-card text-muted-foreground hover:text-foreground",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
