import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { DestinationCard } from "@/components/cards/Cards";
import { INTERESTS, type InterestSlug } from "@/lib/constants";
import { getDestinationsByInterest } from "@/content/destinations";
import { getStateBySlug } from "@/content/states";

export const Route = createFileRoute("/interests/$slug")({
  loader: ({ params }) => {
    const meta = INTERESTS.find((i) => i.slug === params.slug);
    if (!meta) throw notFound();
    return { meta };
  },
  head: ({ loaderData, params }) => {
    const m = loaderData?.meta;
    return {
      meta: [
        { title: m ? `${m.label} in India — India Atlas` : "Interest" },
        { name: "description", content: m?.blurb ?? "" },
        { property: "og:title", content: m ? `${m.label} in India` : "" },
        { property: "og:description", content: m?.blurb ?? "" },
        { property: "og:url", content: `/interests/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/interests/${params.slug}` }],
    };
  },
  component: InterestPage,
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Unknown interest</h1>
      <Link to="/" className="mt-4 inline-block text-accent-foreground hover:underline">Go home →</Link>
    </Container>
  ),
});

function InterestPage() {
  const { meta } = Route.useLoaderData();
  const dests = getDestinationsByInterest(meta.slug as InterestSlug);

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background">
        <Container className="py-12 md:py-16">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link> /
            <span>Interests</span>
          </div>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-4xl" aria-hidden>{meta.icon}</span>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">{meta.label} in India</h1>
          </div>
          <p className="mt-3 max-w-2xl text-muted-foreground">{meta.blurb}</p>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="mb-6 flex flex-wrap gap-1.5">
          {INTERESTS.map((i) => (
            <Link
              key={i.slug}
              to="/interests/$slug"
              params={{ slug: i.slug }}
              className={[
                "rounded-full border px-3 py-1 text-xs transition-colors",
                i.slug === meta.slug
                  ? "border-accent bg-accent/20 text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {i.icon} {i.label}
            </Link>
          ))}
        </div>
        {dests.length === 0 ? (
          <p className="text-sm text-muted-foreground">More coverage coming soon for this interest.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dests.map((d) => {
              const state = getStateBySlug(d.stateSlug);
              return (
                <div key={d.id}>
                  <DestinationCard dest={d} />
                  {state && (
                    <Link
                      to="/states/$slug"
                      params={{ slug: state.slug }}
                      className="mt-1 inline-block text-xs text-muted-foreground hover:text-foreground"
                    >
                      in {state.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </>
  );
}
