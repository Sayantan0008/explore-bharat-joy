import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { DestinationCard, FoodCard, FestivalCard } from "@/components/cards/Cards";
import { getCityBySlug } from "@/data/stateExtras";
import { getStateBySlug } from "@/content/states";
import { getDestinationsByState } from "@/content/destinations";
import { getFoodsByState } from "@/content/foods";
import { getFestivalsByState } from "@/content/festivals";

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

function CityDetail() {
  const { city } = Route.useLoaderData();
  const state = getStateBySlug(city.stateSlug);
  const stateDests = getDestinationsByState(city.stateSlug);
  const foods = getFoodsByState(city.stateSlug).slice(0, 5);
  const fests = getFestivalsByState(city.stateSlug).slice(0, 4);
  const mapsHref = city.coords
    ? `https://www.google.com/maps/search/?api=1&query=${city.coords.lat},${city.coords.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city.name + ", India")}`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(city.name + ", India")}`;

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
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">
              <MapPin className="h-3.5 w-3.5" /> View on Google Maps <ExternalLink className="h-3 w-3" />
            </a>
            <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium hover:border-accent">
              <Navigation className="h-3.5 w-3.5" /> Get directions
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-10 md:py-12">
        <SmartImage alt={city.name} kind="destination" seed={city.slug} aspect="aspect-[16/9]" />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoCard title="Famous foods" items={city.famousFoods} />
          <InfoCard title="Major festivals" items={city.majorFestivals} />
          <InfoCard title="Attractions" items={[`${city.attractionsCount} top attractions in & around the city`]} />
        </div>

        {stateDests.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Attractions in {state?.name ?? "the state"}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stateDests.slice(0, 6).map((d) => <DestinationCard key={d.id} dest={d} />)}
            </div>
          </section>
        )}

        {foods.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Famous food</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
              {foods.map((f) => <FoodCard key={f.id} food={f} />)}
            </div>
          </section>
        )}

        {fests.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-5 font-display text-2xl font-semibold">Major festivals</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {fests.map((f) => <FestivalCard key={f.id} festival={f} />)}
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
