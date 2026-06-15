import { Link } from "@tanstack/react-router";
import { SmartImage } from "@/components/media/SmartImage";
import type { State, Destination, Food, Festival } from "@/content/types";
import { INTERESTS, type InterestSlug } from "@/lib/constants";

export function StateCard({ state }: { state: State }) {
  return (
    <Link
      to="/states/$slug"
      params={{ slug: state.slug }}
      className="group block"
    >
      <SmartImage alt={state.name} kind="state" seed={state.slug} src={state.heroImage} />
      <div className="mt-3 flex items-baseline justify-between">
        <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent-foreground">
          {state.name}
        </h3>
        <span className="text-xs text-muted-foreground">
          {state.isUT ? "UT" : "State"}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Capital · {state.capital}
        {state.status === "stub" && " · Guide coming soon"}
      </p>
    </Link>
  );
}

export function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: dest.slug }}
      className="group block"
    >
      <SmartImage alt={dest.name} kind="destination" seed={dest.slug} src={dest.image} />
      <div className="mt-3">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent-foreground">
            {dest.name}
          </h3>
          <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-secondary-foreground">
            {dest.category}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{dest.description}</p>
      </div>
    </Link>
  );
}

export function FoodCard({ food }: { food: Food }) {
  return (
    <Link
      to="/foods/$slug"
      params={{ slug: food.slug }}
      className="group block"
    >
      <SmartImage alt={food.name} kind="food" seed={food.slug} src={food.image} aspect="aspect-square" />
      <div className="mt-3">
        <h3 className="font-display text-base font-semibold transition-colors group-hover:text-accent-foreground">
          {food.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {food.category}{food.vegetarian ? " · Vegetarian" : ""}
        </p>
      </div>
    </Link>
  );
}

export function FestivalCard({ festival }: { festival: Festival }) {
  return (
    <Link
      to="/festivals/$slug"
      params={{ slug: festival.slug }}
      className="group block"
    >
      <SmartImage alt={festival.name} kind="festival" seed={festival.slug} src={festival.image} aspect="aspect-[5/3]" />
      <div className="mt-3">
        <h3 className="font-display text-base font-semibold transition-colors group-hover:text-accent-foreground">
          {festival.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {festival.month} · {festival.type}
        </p>
      </div>
    </Link>
  );
}

export function InterestCard({ slug }: { slug: InterestSlug }) {
  const meta = INTERESTS.find((i) => i.slug === slug)!;
  return (
    <Link
      to="/interests/$slug"
      params={{ slug }}
      className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
    >
      <span className="text-2xl" aria-hidden>{meta.icon}</span>
      <h3 className="font-display text-base font-semibold">{meta.label}</h3>
      <p className="text-xs text-muted-foreground">{meta.blurb}</p>
    </Link>
  );
}

export function StatPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-baseline gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
      <span className="font-display font-semibold">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
