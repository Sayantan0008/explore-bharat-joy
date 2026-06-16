import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { IndiaMap } from "@/components/map/IndiaMap";
import { InterestCard, DestinationCard, FestivalCard, FoodCard } from "@/components/cards/Cards";
import { INTERESTS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { getFeaturedDestinations } from "@/content/destinations";
import { getFeaturedFestivals } from "@/content/festivals";
import { getFeaturedFoods } from "@/content/foods";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "description", content: "Discover India state by state — destinations, regional food, festivals and trip ideas across all 28 states and 8 Union Territories." },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_TAGLINE },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featuredDest = getFeaturedDestinations();
  const featuredFest = getFeaturedFestivals();
  const featuredFood = getFeaturedFoods();

  return (
    <>
      {/* Map-first hero — the interactive India map IS the homepage */}
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background">
        <Container className="pt-6 pb-10 md:pt-8 md:pb-12">
          <div className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-medium text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Explore India through the map
              </span>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                One country. <span className="text-accent-foreground">A thousand</span> ways to travel it.
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                Click any state for destinations, regional food and festivals — or switch to destinations mode to scan every featured place across India.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/states"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent/20"
              >
                Browse states
              </Link>
              <Link
                to="/destinations"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent/20"
              >
                Featured destinations
              </Link>
            </div>
          </div>
          <IndiaMap />
        </Container>
      </section>


      {/* Interests */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold">Discover by interest</h2>
              <p className="mt-2 text-sm text-muted-foreground">Pick a thread and pull on it.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {INTERESTS.map((i) => <InterestCard key={i.slug} slug={i.slug} />)}
          </div>
        </Container>
      </section>

      {/* Featured destinations */}
      <FeaturedSection title="Featured destinations" link="/destinations">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDest.map((d) => <DestinationCard key={d.id} dest={d} />)}
        </div>
      </FeaturedSection>

      {/* Featured festivals */}
      <FeaturedSection title="Festivals to plan around" link="/festivals">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredFest.map((f) => <FestivalCard key={f.id} festival={f} />)}
        </div>
      </FeaturedSection>

      {/* Featured foods */}
      <FeaturedSection title="Regional dishes worth a detour" link="/foods">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
          {featuredFood.map((f) => <FoodCard key={f.id} food={f} />)}
        </div>
      </FeaturedSection>
    </>
  );
}

function FeaturedSection({
  title, link, children,
}: { title: string; link: "/destinations" | "/festivals" | "/foods"; children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold">{title}</h2>
          <Link to={link} className="text-sm text-accent-foreground hover:underline">
            See all →
          </Link>
        </div>
        {children}
      </Container>
    </section>
  );
}
