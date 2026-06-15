import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { searchAll, type SearchItem } from "@/content/search";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — India Atlas" },
      { name: "description", content: "Search states, destinations, foods and festivals." },
      { property: "og:url", content: "/search" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: SearchPage,
});

const LABEL: Record<SearchItem["entity"], string> = {
  state: "States", destination: "Destinations", food: "Foods", festival: "Festivals",
};

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchAll(q, 60), [q]);
  const grouped = useMemo(() => {
    const m: Record<string, SearchItem[]> = {};
    for (const r of results) (m[r.entity] ||= []).push(r);
    return m;
  }, [results]);

  return (
    <Container className="py-12 md:py-16">
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Search</h1>
      <input
        autoFocus
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search states, destinations, foods, festivals…"
        className="mt-6 w-full rounded-md border border-border bg-card px-4 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
      {q.trim() === "" ? (
        <p className="mt-6 text-sm text-muted-foreground">Tip: hit ⌘K or / anywhere on the site to open the command palette.</p>
      ) : results.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">No results for "{q}".</p>
      ) : (
        <div className="mt-10 space-y-10">
          {(["destination", "state", "food", "festival"] as const).map((entity) => {
            const items = grouped[entity];
            if (!items?.length) return null;
            return (
              <section key={entity}>
                <h2 className="mb-3 font-display text-xl font-semibold">{LABEL[entity]}</h2>
                <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
                  {items.map((it) => (
                    <li key={`${it.entity}-${it.slug}`}>
                      <Link to={it.url} className="block px-4 py-3 transition-colors hover:bg-secondary/50">
                        <div className="font-medium">{it.name}</div>
                        {it.subtitle && <div className="text-xs text-muted-foreground">{it.subtitle}</div>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </Container>
  );
}
