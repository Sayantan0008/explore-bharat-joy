import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — India Atlas" },
      { name: "description", content: "About India Atlas, a discovery-first travel guide to India." },
      { property: "og:title", content: "About — India Atlas" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">About India Atlas</h1>
        <p className="mt-5 text-base leading-relaxed text-foreground/85">
          India Atlas is a discovery-first travel guide to every Indian state and Union Territory. We're starting with eight fully written guides — Rajasthan, Kerala, Goa, West Bengal, Himachal Pradesh, Tamil Nadu, Maharashtra and Uttar Pradesh — and expanding from there.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/85">
          Each guide is editor-curated and quality-led: destinations worth a detour, regional dishes worth a meal, and festivals worth planning around. No bookings, no affiliate links — just answers to "where in India should I go next?"
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/states" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Browse states</Link>
          <Link to="/contact" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent/20">Get in touch</Link>
        </div>
      </div>
    </Container>
  );
}
