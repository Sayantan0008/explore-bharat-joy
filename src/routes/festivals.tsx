import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { FestivalCard } from "@/components/cards/Cards";
import { getAllFestivals } from "@/content/festivals";
import { MONTHS } from "@/lib/constants";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "Festivals — India Atlas" },
      { name: "description", content: "India's major festivals organised by month and region." },
      { property: "og:title", content: "Festivals across India" },
      { property: "og:url", content: "/festivals" },
    ],
    links: [{ rel: "canonical", href: "/festivals" }],
  }),
  component: FestivalsPage,
});

function FestivalsPage() {
  const all = getAllFestivals();
  const [month, setMonth] = useState<string>("all");

  const filtered = useMemo(() =>
    month === "all" ? all : all.filter((f) => f.month === month),
  [all, month]);

  return (
    <Container className="py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Festivals</h1>
        <p className="mt-3 text-muted-foreground">{all.length} festivals you can plan a trip around.</p>
      </header>

      <div className="mb-8 flex flex-wrap gap-1.5">
        <Chip active={month === "all"} onClick={() => setMonth("all")}>All months</Chip>
        {MONTHS.map((m) => (
          <Chip key={m} active={month === m} onClick={() => setMonth(m)}>{m}</Chip>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((f) => <FestivalCard key={f.id} festival={f} />)}
      </div>
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
