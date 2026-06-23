import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { DestinationCard, FoodCard, FestivalCard } from "@/components/cards/Cards";
import { getCityBySlug } from "@/data/stateExtras";
import { getStateBySlug } from "@/content/states";
import { getDestinationsByState, getDestinationBySlug } from "@/content/destinations";
import { getFoodsByState } from "@/content/foods";
import { getFestivalsByState } from "@/content/festivals";
import type { Destination } from "@/content/types";

export const Route = createFileRoute("/cities/$slug")({
  loader: ({ params }) => {
    const city = getCityBySlug(params.slug);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.city;
    const title = c ? `${c.name} — India Atlas` : "City";
    const desc = c ? c.shortDescription : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/cities/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/cities/${params.slug}` }],
    };
  },
  component: CityDetail,
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">City not found</h1>
      <Link to="/states" className="mt-4 inline-block text-accent-foreground hover:underline">Browse states →</Link>
    </Container>
  ),
});

function mapsCoords(lat: number, lng: number) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
function mapsQuery(q: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
function directionsQuery(q: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
}

function CityDetail() {
  const { city } = Route.useLoaderData();
  const state = getStateBySlug(city.stateSlug);
  const stateDests = getDestinationsByState(city.stateSlug);
  const foods = getFoodsByState(city.stateSlug).slice(0, 6);
  const fests = getFestivalsByState(city.stateSlug).slice(0, 6);

  // Nearby attractions: prefer curated slugs, else fall back to distance-ranked state destinations.
  const nearby: Destination[] = (() => {
    if (city.nearbyAttractionSlugs?.length) {
      const seen = new Set<string>();
      const out: Destination[] = [];
      for (const slug of city.nearbyAttractionSlugs) {
        if (seen.has(slug)) continue;
        const d = getDestinationBySlug(slug);
        if (d) { out.push(d); seen.add(slug); }
      }
      return out.slice(0, 6);
    }
    if (city.coords) {
      const { lat, lng } = city.coords;
      return [...stateDests]
        .sort((a, b) => {
          const da = (a.coords.lat - lat) ** 2 + (a.coords.lng - lng) ** 2;
          const db = (b.coords.lat - lat) ** 2 + (b.coords.lng - lng) ** 2;
          return da - db;
        })
        .slice(0, 6);
    }
    return stateDests.slice(0, 6);
  })();

  const heroMapsHref = city.coords
    ? mapsCoords(city.coords.lat, city.coords.lng)
    : mapsQuery(`${city.name}, India`);
  const heroDirHref = directionsQuery(`${city.name}, India`);

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/30 to-background">
        <Container className="py-10 md:py-14">
          {state && (
            <Link to="/states/$slug" params={{ slug: state.slug }} className="text-xs text-muted-foreground hover:text-foreground">
              ← {state.name}
            </Link>
          )}
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{city.name}</h1>
          <p className="mt-2 max-w-2xl text-base text-foreground/85">{city.shortDescription}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={heroMapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
              <MapPin className="h-3.5 w-3.5" /> View on Google Maps <ExternalLink className="h-3 w-3" />
            </a>
            <a href={heroDirHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium hover:border-accent">
              <Navigation className="h-3.5 w-3.5" /> Get directions
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-12">
        <SmartImage alt={city.name} kind="destination" seed={city.slug} aspect="aspect-[16/9]" />

        {city.overview && (
          <section className="mt-8 max-w-3xl">
            <h2 className="mb-3 font-display text-2xl font-semibold">Overview</h2>
            <p className="text-base leading-relaxed text-foreground/85">{city.overview}</p>
          </section>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoCard title="Famous foods" items={city.famousFoods} />
          <InfoCard title="Major festivals" items={city.majorFestivals} />
          <InfoCard title="Attractions" items={[`${city.attractionsCount} top sights in & around the city`]} />
        </div>

        {city.thingsToDo?.length ? (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Things to do in {city.name}</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {city.thingsToDo.map((t) => (
                <li key={t} className="rounded-2xl border border-border bg-card p-4 text-sm text-foreground/85">
                  · {t}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {nearby.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-2 font-display text-2xl font-semibold">Must-visit places & nearby attractions</h2>
            <p className="mb-5 text-sm text-muted-foreground">Top destinations in and around {city.name}.</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((d) => (
                <article key={d.id} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <Link to="/destinations/$slug" params={{ slug: d.slug }} className="block">
                    <SmartImage alt={d.name} kind="destination" seed={d.slug} aspect="aspect-[16/9]" rounded="rounded-none" />
                  </Link>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <Link to="/destinations/$slug" params={{ slug: d.slug }} className="font-display text-lg font-semibold hover:text-accent-foreground">
                        {d.name}
                      </Link>
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">{d.category}</span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link to="/destinations/$slug" params={{ slug: d.slug }} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-[11px] font-medium text-primary-foreground hover:bg-primary/90">
                        View Details
                      </Link>
                      <a href={mapsCoords(d.coords.lat, d.coords.lng)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-[11px] font-medium hover:border-accent">
                        <MapPin className="h-3 w-3" /> Maps
                      </a>
                      <a href={directionsQuery(`${d.name} ${d.coords.lat},${d.coords.lng}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-[11px] font-medium hover:border-accent">
                        <Navigation className="h-3 w-3" /> Directions
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {foods.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Local foods</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
              {foods.map((f) => <FoodCard key={f.id} food={f} />)}
            </div>
          </section>
        )}

        {fests.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Festivals</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {fests.map((f) => <FestivalCard key={f.id} festival={f} />)}
            </div>
          </section>
        )}

        {stateDests.length > 0 && state && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">More to explore in {state.name}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stateDests
                .filter((d) => !nearby.some((n) => n.id === d.id))
                .slice(0, 6)
                .map((d) => <DestinationCard key={d.id} dest={d} />)}
            </div>
            <div className="mt-6">
              <Link to="/states/$slug" params={{ slug: state.slug }} className="text-sm text-accent-foreground hover:underline">
                ← Back to {state.name} guide
              </Link>
            </div>
          </section>
        )}
      </Container>
    </>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
      <ul className="mt-2 space-y-1 text-sm text-foreground/85">
        {items.map((i) => <li key={i}>· {i}</li>)}
      </ul>
    </div>
  );
}
