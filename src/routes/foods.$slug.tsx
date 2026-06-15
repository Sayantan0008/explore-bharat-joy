import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { getFoodBySlug } from "@/content/foods";
import { getStateBySlug } from "@/content/states";

export const Route = createFileRoute("/foods/$slug")({
  loader: ({ params }) => {
    const food = getFoodBySlug(params.slug);
    if (!food) throw notFound();
    return { food };
  },
  head: ({ loaderData, params }) => {
    const f = loaderData?.food;
    return {
      meta: [
        { title: f ? `${f.name} — India Atlas` : "Food" },
        { name: "description", content: f?.description ?? "" },
        { property: "og:title", content: f?.name ?? "" },
        { property: "og:description", content: f?.description ?? "" },
        { property: "og:url", content: `/foods/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/foods/${params.slug}` }],
    };
  },
  component: FoodDetail,
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Dish not found</h1>
      <Link to="/foods" className="mt-4 inline-block text-accent-foreground hover:underline">Browse all dishes →</Link>
    </Container>
  ),
});

function FoodDetail() {
  const { food } = Route.useLoaderData();
  const state = getStateBySlug(food.stateSlug);
  return (
    <Container className="py-12 md:py-16">
      <Link to="/foods" className="text-xs text-muted-foreground hover:text-foreground">← All foods</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <SmartImage alt={food.name} kind="food" seed={food.slug} src={food.image} aspect="aspect-square" />
        <div>
          <h1 className="font-display text-4xl font-semibold">{food.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {food.category} · {food.vegetarian ? "Vegetarian" : "Non-vegetarian"}
            {state && <> · <Link to="/states/$slug" params={{ slug: state.slug }} className="hover:text-foreground">{state.name}</Link></>}
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">{food.description}</p>
        </div>
      </div>
    </Container>
  );
}
