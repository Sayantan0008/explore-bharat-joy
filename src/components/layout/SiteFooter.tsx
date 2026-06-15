import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { SITE_NAME, SITE_TAGLINE, INTERESTS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl font-semibold">{SITE_NAME}</div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{SITE_TAGLINE}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Explore
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><Link to="/states" className="hover:text-accent-foreground">States & UTs</Link></li>
            <li><Link to="/destinations" className="hover:text-accent-foreground">Destinations</Link></li>
            <li><Link to="/foods" className="hover:text-accent-foreground">Regional Food</Link></li>
            <li><Link to="/festivals" className="hover:text-accent-foreground">Festivals</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Interests
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-1.5 text-sm">
            {INTERESTS.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/interests/$slug"
                  params={{ slug: i.slug }}
                  className="hover:text-accent-foreground"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col items-start justify-between gap-2 border-t border-border/60 py-6 text-xs text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} {SITE_NAME}. A travel discovery project.</div>
        <div className="flex gap-4">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </Container>
    </footer>
  );
}
