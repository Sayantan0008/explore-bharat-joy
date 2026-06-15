import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — India Atlas" },
      { name: "description", content: "Get in touch with the India Atlas team." },
      { property: "og:title", content: "Contact — India Atlas" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Contact</h1>
        <p className="mt-5 text-muted-foreground">
          Have a correction, a tip, or a state guide you'd like to see prioritised? We'd love to hear from you.
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
          <a href="mailto:hello@indiaatlas.example" className="mt-1 block text-lg font-medium hover:text-accent-foreground">
            hello@indiaatlas.example
          </a>
        </div>
      </div>
    </Container>
  );
}
