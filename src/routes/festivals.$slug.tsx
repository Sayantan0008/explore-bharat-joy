import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SmartImage } from "@/components/media/SmartImage";
import { getFestivalBySlug } from "@/content/festivals";
import { getStateBySlug } from "@/content/states";

export const Route = createFileRoute("/festivals/$slug")({
  loader: ({ params }) => {
    const festival = getFestivalBySlug(params.slug);
    if (!festival) throw notFound();
    return { festival };
  },
  head: ({ loaderData, params }) => {
    const f = loaderData?.festival;
    return {
      meta: [
        { title: f ? `${f.name} — India Atlas` : "Festival" },
        { name: "description", content: f?.description ?? "" },
        { property: "og:title", content: f?.name ?? "" },
        { property: "og:description", content: f?.description ?? "" },
        { property: "og:url", content: `/festivals/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/festivals/${params.slug}` }],
    };
  },
  component: FestivalDetail,
  notFoundComponent: () => (
    <Container className="py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Festival not found</h1>
      <Link to="/festivals" className="mt-4 inline-block text-accent-foreground hover:underline">Browse all festivals →</Link>
    </Container>
  ),
});

function FestivalDetail() {
  const { festival } = Route.useLoaderData();
  const state = getStateBySlug(festival.stateSlug);
  return (
    <Container className="py-12 md:py-16">
      <Link to="/festivals" className="text-xs text-muted-foreground hover:text-foreground">← All festivals</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="font-display text-4xl font-semibold">{festival.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {festival.month} · {festival.type}
            {state && <> · <Link to="/states/$slug" params={{ slug: state.slug }} className="hover:text-foreground">{state.name}</Link></>}
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">{festival.description}</p>
          <h2 className="mt-8 font-display text-xl font-semibold">Significance</h2>
          <p className="mt-2 text-base leading-relaxed text-foreground/85">{festival.significance}</p>
        </div>
        <SmartImage alt={festival.name} kind="festival" seed={festival.slug} src={festival.image} aspect="aspect-[4/5]" />
      </div>
    </Container>
  );
}
