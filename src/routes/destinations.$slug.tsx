import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { DestinationCard } from "@/components/cards/Cards";
import { getDestinationBySlug, getAllDestinations } from "@/content/destinations";
import { getStateBySlug } from "@/content/states";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = getDestinationBySlug(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData, params }) => {
    const d = loaderData?.dest;
    const title = d ? `${d.name} — India Atlas` : "Destination";
    const desc = d ? d.description.slice(0, 160) : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/destinations/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
      scripts: d ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: d.name,
          description: d.description,
          geo: { "@type": "GeoCoordinates", latitude: d.coords.lat, longitude: d.coords.lng },
        }),
      }] : [],
    };
  },
  component: DestinationDetail,
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Destination not found</h1>
      <Link to="/destinations" className="mt-4 inline-block text-accent-foreground hover:underline">Browse all destinations →</Link>
    </Container>
  ),
});

function DestinationDetail() {
  const { dest } = Route.useLoaderData();
  const state = getStateBySlug(dest.stateSlug);
  const all = getAllDestinations();
  const nearby = all.filter((d) => dest.nearbySlugs.includes(d.slug));
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${dest.coords.lat},${dest.coords.lng}`;

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/30 to-background">
        <Container className="py-10 md:py-14">
          <Link to="/destinations" className="text-xs text-muted-foreground hover:text-foreground">
            ← All destinations
          </Link>
          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <h1 className="font-display text-4xl font-semibold md:text-5xl">{dest.name}</h1>
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium uppercase tracking-wider">
              {dest.category}
            </span>
          </div>
          {state && (
            <p className="mt-2 text-sm text-muted-foreground">
              <Link to="/states/$slug" params={{ slug: state.slug }} className="hover:text-foreground">
                {state.name}
              </Link>
            </p>
          )}
        </Container>
      </section>

      <Container className="py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SmartImage alt={dest.name} kind="destination" seed={dest.slug} src={dest.image} aspect="aspect-[16/10]" />
            <p className="mt-6 text-base leading-relaxed text-foreground/85">{dest.description}</p>

            {dest.highlights.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-semibold">Highlights</h2>
                <ul className="mt-3 grid grid-cols-1 gap-1.5 text-sm text-foreground/85 sm:grid-cols-2">
                  {dest.highlights.map((h: string) => <li key={h}>· {h}</li>)}
                </ul>
              </section>
            )}

            {dest.thingsToDo.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-semibold">Things to do</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {dest.thingsToDo.map((t: string) => <li key={t}>· {t}</li>)}
                </ul>
              </section>
            )}

            {dest.travelTips.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-semibold">Travel tips</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {dest.travelTips.map((t: string) => <li key={t}>· {t}</li>)}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Best time</div>
              <div className="mt-1 font-medium">{dest.bestTime}</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Location
              </div>
              <div className="mt-1 font-medium">
                {dest.coords.lat.toFixed(3)}, {dest.coords.lng.toFixed(3)}
              </div>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90"
              >
                Open in Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Interests</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {dest.interests.map((i: string) => (
                  <Link
                    key={i}
                    to="/interests/$slug"
                    params={{ slug: i }}
                    className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs hover:border-accent"
                  >
                    {i}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {nearby.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Nearby attractions</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((d) => <DestinationCard key={d.id} dest={d} />)}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
