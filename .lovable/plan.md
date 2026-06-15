# India Atlas — Build Plan

A travel discovery platform for India with mock slug-based content, an interactive India map, and global fuzzy search. No backend, no auth, no booking. The content layer is structured so it can later swap to Supabase without touching UI.

## Scope

In: Home, India map, states directory + detail, destinations index + detail, foods/festivals explorers + minimal detail, interests dynamic route, global search, about/contact, sitemap, robots, SEO.

Out (architecture-ready, not built): per-state mini-maps, hotels, homestays, AI itineraries, accounts, reviews, ratings, payments, real analytics.

## Tech & Conventions

- TanStack Start + TypeScript + Tailwind v4 + shadcn/ui
- Framer Motion for subtle motion, Fuse.js for fuzzy search
- Custom inline SVG India map (28 states + 8 UTs), clickable / hoverable / keyboard accessible
- Design tokens in `src/styles.css`: deep blue primary, warm saffron accent, ivory bg, soft gray sections
- Fonts: Fraunces (display) + Inter (body) via `<link>` in `__root.tsx`
- Images: AI-generated heroes for landing + 8 showcase states + key items; Unsplash hotlinks elsewhere. All rendered via `SmartImage` with `/public/images/placeholders/{kind}.jpg` fallback.

## Content Layer

```
src/
├─ data/
│  ├─ states/{slug}.ts + _stubs.ts + index.ts
│  ├─ destinations/{slug}.ts + index.ts
│  ├─ foods/{slug}.ts + index.ts
│  ├─ festivals/{slug}.ts + index.ts
│  └─ categories.ts
└─ content/
   ├─ types.ts
   ├─ source.ts        // SOURCE = "local"; future Supabase toggle
   ├─ states.ts        // getAllStates, getStateBySlug, getShowcaseStates
   ├─ destinations.ts  // getAll, getBySlug, byState, byCategory, getFeatured
   ├─ foods.ts
   ├─ festivals.ts
   └─ search.ts        // builds Fuse index across all entities
```

UI only imports from `src/content/*`. Loaders take an internal `source?: "local" | "supabase"` (defaults to local).

Showcase states (full content — 8–12 destinations, 6–10 foods, 4–8 festivals, 500–1000 words overview + culture): Rajasthan, Kerala, Goa, West Bengal, Himachal Pradesh, Tamil Nadu, Maharashtra, Uttar Pradesh. Remaining 20 states + 8 UTs are stubs with `status: "stub"`.

Featured strips on the home page read from `getFeatured*()` — no hand-curated lists.

## URL Structure

```
/                       Home
/states                 Directory
/states/$slug           State detail (StubNotice for stubs)
/destinations           Index with category + interest filters
/destinations/$slug     Destination detail
/foods                  Explorer
/foods/$slug            Minimal detail
/festivals              Explorer
/festivals/$slug        Minimal detail
/interests/$slug        Single dynamic route, maps over INTERESTS
/search                 Global Fuse results
/about, /contact
/sitemap.xml            Dynamic server route
/robots.txt             Static
```

## Components

- `layout/` — SiteHeader (search trigger + Cmd/Ctrl+K hint), SiteFooter, Container
- `map/IndiaMap.tsx` — inline SVG, hover tooltip, focus ring, aria-labels
- `home/` — Hero, SearchBar, InterestGrid, FeaturedDestinations, FeaturedFestivals, FeaturedFoods
- `cards/` — StateCard, DestinationCard, FoodCard, FestivalCard, InterestCard, StatPill
- `detail/` — QuickFacts, ContentStats, Gallery, MapsButton, NearbyAttractions, TravelTips, StubNotice
- `media/SmartImage.tsx` — lazy/async `<img>` with `onError` swap to placeholder by kind
- `search/CommandPalette.tsx` — shadcn Command in Dialog, Fuse-powered, opened by header button or Cmd/Ctrl+K (global keydown listener in `__root.tsx`, ignored in inputs)

## Page Composition

- **Home**: Hero → India Map → Interest grid → Featured Destinations → Festivals → Foods
- **State**: Hero → QuickFacts → ContentStats → Top Attractions → Food → Festivals → Culture. Stubs render `StubNotice`.
- **Destination**: Hero → Overview → Highlights → Best Time → Things to Do → Gallery → Google Maps button → Nearby → Travel Tips
- **Interest**: Hero strip + filtered destination grid with state chips
- **Foods/Festivals explorers**: filter sidebar + searchable card grid
- **Search**: full-page Fuse results grouped by entity

## Cross-Cutting

- `src/lib/constants.ts` — `INTERESTS` array drives interest grid, dynamic route, sitemap
- `src/lib/analytics.ts` — `track`/`pageview` no-op stubs; route hook in `__root.tsx` calls `pageview`
- Keyboard: Cmd/Ctrl+K opens palette; `/` focuses inline search
- A11y: semantic HTML, one H1 per page, alt text, focus rings, keyboard-navigable map and palette

## SEO

- Per-route `head()` with unique title/description/OG; leaf-only `og:image`
- JSON-LD: `TouristAttraction` on destinations, `Place` on states
- `src/routes/sitemap[.]xml.ts` enumerates states, destinations, foods, festivals, interests from `src/content/*`; `BASE_URL = ""` placeholder
- `public/robots.txt` — `User-agent: *` / `Allow: /`

## Build Order

1. Tokens, fonts, layout shell, SmartImage, analytics stub
2. Types + `src/content/*` loaders + `INTERESTS` constant
3. Slug-per-file data: 8 showcase states deep + stubs for the rest
4. IndiaMap SVG
5. Home (hero, map, interest grid, featured strips via `getFeatured*`)
6. States directory + state detail (ContentStats, StubNotice)
7. Destinations index + destination detail
8. `/interests/$slug` dynamic route
9. Foods + Festivals explorers and minimal detail pages
10. Global search: Fuse index + Cmd/Ctrl+K palette + `/search`
11. About, Contact, sitemap.xml, robots.txt, SEO polish
12. AI hero image generation pass for landing + 8 showcase states + key items

## Notes

- The India SVG (all 36 regions with correct paths + ids) is the highest-risk asset; will source a permissively-licensed topo and inline it during step 4.
- Showcase state copy is substantial (~6k+ words total) — written during step 3 in batched parallel file writes.
- Image generation (step 12) is deferred to the end so the structure is verified first; placeholders ship in earlier steps via SmartImage.
