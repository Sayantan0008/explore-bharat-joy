import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { FoodCard } from "@/components/cards/Cards";
import { getAllFoods } from "@/content/foods";
import { getShowcaseStates } from "@/content/states";

export const Route = createFileRoute("/foods")({
  head: () => ({
    meta: [
      { title: "Regional Food — India Atlas" },
      { name: "description", content: "Discover regional Indian dishes by state and category." },
      { property: "og:title", content: "Regional Food across India" },
      { property: "og:url", content: "/foods" },
    ],
    links: [{ rel: "canonical", href: "/foods" }],
  }),
  component: FoodsPage,
});

function FoodsPage() {
  const all = getAllFoods();
  const states = getShowcaseStates();
  const [stateSlug, setStateSlug] = useState<string>("all");
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = useMemo(() => all.filter((f) =>
    (stateSlug === "all" || f.stateSlug === stateSlug) &&
    (!vegOnly || f.vegetarian),
  ), [all, stateSlug, vegOnly]);

  return (
    <Container className="py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Regional food</h1>
        <p className="mt-3 text-muted-foreground">{all.length} dishes from across our showcase states.</p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2">
        <select
          value={stateSlug}
          onChange={(e) => setStateSlug(e.target.value)}
          className="rounded-md border border-border bg-card px-3 py-1.5 text-sm"
        >
          <option value="all">All states</option>
          {states.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm">
          <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
          Vegetarian only
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {filtered.map((f) => <FoodCard key={f.id} food={f} />)}
      </div>
    </Container>
  );
}
