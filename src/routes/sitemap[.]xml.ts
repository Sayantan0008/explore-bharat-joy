import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllStates } from "@/content/states";
import { getAllDestinations } from "@/content/destinations";
import { getAllFoods } from "@/content/foods";
import { getAllFestivals } from "@/content/festivals";
import { INTERESTS } from "@/lib/constants";

// TODO: replace with your project URL once a custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; changefreq?: string; priority?: string }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/states", changefreq: "weekly", priority: "0.9" },
          { path: "/destinations", changefreq: "weekly", priority: "0.9" },
          { path: "/foods", changefreq: "weekly", priority: "0.7" },
          { path: "/festivals", changefreq: "weekly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.3" },
          { path: "/contact", changefreq: "monthly", priority: "0.3" },
        ];
        for (const s of getAllStates()) entries.push({ path: `/states/${s.slug}`, changefreq: "monthly", priority: "0.8" });
        for (const d of getAllDestinations()) entries.push({ path: `/destinations/${d.slug}`, changefreq: "monthly", priority: "0.7" });
        for (const f of getAllFoods()) entries.push({ path: `/foods/${f.slug}`, changefreq: "monthly", priority: "0.5" });
        for (const f of getAllFestivals()) entries.push({ path: `/festivals/${f.slug}`, changefreq: "monthly", priority: "0.5" });
        for (const i of INTERESTS) entries.push({ path: `/interests/${i.slug}`, changefreq: "weekly", priority: "0.6" });

        const urls = entries.map((e) =>
          [
            "  <url>",
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            "  </url>",
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
