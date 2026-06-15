import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { StateCard } from "@/components/cards/Cards";
import { getAllStates } from "@/content/states";

export const Route = createFileRoute("/states")({
  head: () => ({
    meta: [
      { title: "All States & Union Territories — India Atlas" },
      { name: "description", content: "Browse every Indian state and Union Territory — 36 destinations to start planning from." },
      { property: "og:title", content: "All States & Union Territories" },
      { property: "og:url", content: "/states" },
    ],
    links: [{ rel: "canonical", href: "/states" }],
  }),
  component: StatesPage,
});

function StatesPage() {
  const states = getAllStates();
  const showcase = states.filter((s) => s.status === "showcase");
  const others = states.filter((s) => s.status === "stub");

  return (
    <Container className="py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">States & UTs</h1>
        <p className="mt-3 text-muted-foreground">
          Eight in-depth guides up first; the remaining states and Union Territories are stubs with full guides on the way.
        </p>
      </header>

      <section>
        <h2 className="mb-5 font-display text-xl font-semibold">Featured guides</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcase.map((s) => <StateCard key={s.id} state={s} />)}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-5 font-display text-xl font-semibold">All states & UTs</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {others.map((s) => <StateCard key={s.id} state={s} />)}
        </div>
      </section>
    </Container>
  );
}
