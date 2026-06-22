import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { DestinationCard, FoodCard, FestivalCard, StatPill, StateCard } from "@/components/cards/Cards";
import { getStateBySlug, getAllStates } from "@/content/states";
import { getDestinationsByState, getFeaturedDestinations } from "@/content/destinations";
import { getFoodsByState } from "@/content/foods";
import { getFestivalsByState } from "@/content/festivals";
import { getStateExtras } from "@/data/stateExtras";
import {
  CitiesSection,
  MustVisitSection,
  ThingsToDoSection,
  SeasonsSection,
  TravelInfoSection,
  NearbyStatesSection,
  GallerySection,
  FaqSection,
} from "@/components/state/StateSections";

export const Route = createFileRoute("/states/$slug")({
  loader: ({ params }) => {
    const state = getStateBySlug(params.slug);
    if (!state) throw notFound();
    return { state };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.state;
    const title = s ? `${s.name} — Travel Guide` : "State";
    const desc = s
      ? `${s.name} travel guide: ${s.capital} · ${s.bestTimeToVisit} · destinations, food and festivals.`
      : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/states/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/states/${params.slug}` }],
      scripts: s ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: s.name,
          description: s.overview.slice(0, 200),
        }),
      }] : [],
    };
  },
  component: StateDetail,
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">State not found</h1>
      <Link to="/states" className="mt-4 inline-block text-accent-foreground hover:underline">Browse all states →</Link>
    </Container>
  ),
});

function StateDetail() {
  const { state } = Route.useLoaderData();
  const dests = getDestinationsByState(state.slug);
  const foods = getFoodsByState(state.slug);
  const fests = getFestivalsByState(state.slug);
  const isStub = state.status === "stub";
  const extras = getStateExtras(state.slug, state.capital);
  const allStates = getAllStates();
  const popularStates = allStates.filter((s) => s.status === "showcase" && s.slug !== state.slug).slice(0, 4);
  const popularDests = getFeaturedDestinations().filter((d) => d.stateSlug !== state.slug).slice(0, 4);
  const mustVisit = dests.slice(0, 4);

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background">
        <Container className="grid gap-8 py-12 md:grid-cols-[1fr_1.2fr] md:py-16">
          <div>
            <Link to="/states" className="text-xs text-muted-foreground hover:text-foreground">
              ← All states
            </Link>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{state.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {state.isUT ? "Union Territory" : "State"} · Capital {state.capital}
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">{state.overview}</p>
            {!isStub && (
              <div className="mt-6 flex flex-wrap gap-2">
                <StatPill label="Attractions" value={dests.length} />
                <StatPill label="Foods" value={foods.length} />
                <StatPill label="Festivals" value={fests.length} />
              </div>
            )}
          </div>
          <SmartImage alt={state.name} kind="state" seed={state.slug} src={state.heroImage} aspect="aspect-[5/4]" />
        </Container>
      </section>

      {!isStub && (
        <Container className="py-12 md:py-16">
          {/* Quick facts */}
          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold">Quick facts</h2>
            <dl className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-3 md:grid-cols-5">
              <Fact k="Capital" v={state.capital} />
              <Fact k="Language" v={state.language} />
              <Fact k="Population" v={state.population} />
              <Fact k="Area" v={state.area} />
              <Fact k="Best time" v={state.bestTimeToVisit} />
            </dl>
          </section>

          {dests.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-5 font-display text-2xl font-semibold">Top attractions</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dests.map((d) => <DestinationCard key={d.id} dest={d} />)}
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

          {state.culture && (
            <section className="mt-14 max-w-3xl">
              <h2 className="mb-3 font-display text-2xl font-semibold">Culture & traditions</h2>
              <p className="text-base leading-relaxed text-foreground/85">{state.culture}</p>
            </section>
          )}

          <CitiesSection cities={extras.cities} />
          <MustVisitSection destinations={mustVisit} />
          <ThingsToDoSection items={extras.experiences} />
          <SeasonsSection seasons={extras.seasons} />
          <TravelInfoSection travel={extras.travel} />
          <NearbyStatesSection slugs={extras.neighbors} />
          <GallerySection seeds={extras.gallerySeeds} stateName={state.name} />
          <FaqSection items={extras.faqs} stateName={state.name} />

          {/* Continue exploring */}
          <section className="mt-16 border-t border-border pt-12">
            <h2 className="mb-6 font-display text-2xl font-semibold">Continue exploring</h2>
            {popularStates.length > 0 && (
              <div className="mb-10">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Related states</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {popularStates.map((s) => <StateCard key={s.id} state={s} />)}
                </div>
              </div>
            )}
            {popularDests.length > 0 && (
              <div className="mb-10">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Popular destinations</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {popularDests.map((d) => <DestinationCard key={d.id} dest={d} />)}
                </div>
              </div>
            )}
            {foods.length > 0 && (
              <div className="mb-10">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Famous foods</h3>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
                  {foods.slice(0, 5).map((f) => <FoodCard key={f.id} food={f} />)}
                </div>
              </div>
            )}
            {fests.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Major festivals</h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {fests.slice(0, 4).map((f) => <FestivalCard key={f.id} festival={f} />)}
                </div>
              </div>
            )}
          </section>
        </Container>
      )}

      {isStub && (
        <Container className="py-12 md:py-16">
          <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-10 text-center">
            <h2 className="font-display text-2xl font-semibold">Full guide coming soon</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              We're writing in-depth coverage of {state.name} — destinations, foods and festivals. In the meantime, explore one of our featured guides.
            </p>
            <Link
              to="/states"
              className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Browse featured states
            </Link>
          </div>

          <ThingsToDoSection items={extras.experiences} />
          <SeasonsSection seasons={extras.seasons} />
          <TravelInfoSection travel={extras.travel} />
          <NearbyStatesSection slugs={extras.neighbors} />
          <GallerySection seeds={extras.gallerySeeds} stateName={state.name} />
          <FaqSection items={extras.faqs} stateName={state.name} />

          <section className="mt-16 border-t border-border pt-12">
            <h2 className="mb-6 font-display text-2xl font-semibold">Continue exploring</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {popularStates.map((s) => <StateCard key={s.id} state={s} />)}
            </div>
          </section>
        </Container>
      )}
    </>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
      <dd className="mt-1 text-sm font-medium">{v}</dd>
    </div>
  );
}
