import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { getAllCities } from "@/content/cities";
import { getShowcaseStates } from "@/content/states";

export const Route = createFileRoute("/cities")({
  head: () => ({
    meta: [
      { title: "Cities — India Atlas" },
      { name: "description", content: "Explore Indian cities with attractions, foods, and festivals." },
      { property: "og:title", content: "Cities across India" },
      { property: "og:description", content: "Explore Indian cities with attractions, foods, and festivals." },
      { property: "og:url", content: "/cities" },
    ],
    links: [{ rel: "canonical", href: "/cities" }],
  }),
  component: CitiesPage,
});

function CitiesPage() {
  const all = getAllCities();
  const states = getShowcaseStates();
  const [stateSlug, setStateSlug] = useState<string>("all");

  const filtered = useMemo(
    () => all.filter((c) => stateSlug === "all" || c.stateSlug === stateSlug),
    [all, stateSlug],
  );

  return (
    <Container className="py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Cities</h1>
        <p className="mt-3 text-muted-foreground">{all.length} cities across our showcase states.</p>
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
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <article key={c.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
            <Link to="/cities/$slug" params={{ slug: c.slug }} className="block">
              <SmartImage alt={c.name} kind="destination" seed={c.slug} aspect="aspect-[16/9]" rounded="rounded-none" />
            </Link>
            <div className="p-4">
              <Link
                to="/cities/$slug"
                params={{ slug: c.slug }}
                className="font-display text-lg font-semibold hover:text-accent-foreground"
              >
                {c.name}
              </Link>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.shortDescription}</p>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
                  {c.attractionsCount} attractions
                </span>
                <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
                  {c.famousFoods.length} foods
                </span>
                <span className="rounded-full bg-secondary px-2 py-0.5 font-medium">
                  {c.majorFestivals.length} festivals
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
