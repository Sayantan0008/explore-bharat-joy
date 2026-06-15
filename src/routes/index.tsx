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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background">
        <Container className="py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-medium text-accent-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> A travel atlas of India
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              One country. <span className="text-accent-foreground">A thousand</span> ways to travel it.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Explore every Indian state and Union Territory — Mughal cities and Himalayan deserts, Konkan coastlines and Tamil temple towns — with editor-curated destinations, regional cuisine and the festivals that shape the calendar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/states"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse states
              </Link>
              <Link
                to="/destinations"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent/20"
              >
                Featured destinations
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-12 md:py-16">
        <Container>
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
