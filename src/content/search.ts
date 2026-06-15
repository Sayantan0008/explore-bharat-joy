import Fuse from "fuse.js";
import { getAllStates } from "./states";
import { getAllDestinations } from "./destinations";
import { getAllFoods } from "./foods";
import { getAllFestivals } from "./festivals";

export type SearchEntity = "state" | "destination" | "food" | "festival";

export interface SearchItem {
  entity: SearchEntity;
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  url: string;
  stateSlug?: string;
}

let _fuse: Fuse<SearchItem> | null = null;
let _items: SearchItem[] | null = null;

function buildItems(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const s of getAllStates()) {
    items.push({
      entity: "state",
      slug: s.slug,
      name: s.name,
      subtitle: s.isUT ? "Union Territory" : "State",
      description: s.capital,
      url: `/states/${s.slug}`,
    });
  }
  for (const d of getAllDestinations()) {
    items.push({
      entity: "destination",
      slug: d.slug,
      name: d.name,
      subtitle: d.category,
      description: d.description,
      url: `/destinations/${d.slug}`,
      stateSlug: d.stateSlug,
    });
  }
  for (const f of getAllFoods()) {
    items.push({
      entity: "food",
      slug: f.slug,
      name: f.name,
      subtitle: f.category,
      description: f.description,
      url: `/foods/${f.slug}`,
      stateSlug: f.stateSlug,
    });
  }
  for (const f of getAllFestivals()) {
    items.push({
      entity: "festival",
      slug: f.slug,
      name: f.name,
      subtitle: `${f.month} · ${f.type}`,
      description: f.description,
      url: `/festivals/${f.slug}`,
      stateSlug: f.stateSlug,
    });
  }
  return items;
}

function getFuse(): Fuse<SearchItem> {
  if (_fuse) return _fuse;
  _items = buildItems();
  _fuse = new Fuse(_items, {
    keys: [
      { name: "name", weight: 0.55 },
      { name: "subtitle", weight: 0.15 },
      { name: "description", weight: 0.3 },
    ],
    threshold: 0.35,
    ignoreLocation: true,
    minMatchCharLength: 2,
  });
  return _fuse;
}

export function getAllSearchItems(): SearchItem[] {
  if (!_items) _items = buildItems();
  return _items;
}

export function searchAll(query: string, limit = 30): SearchItem[] {
  const q = query.trim();
  if (!q) return [];
  return getFuse().search(q, { limit }).map((r) => r.item);
}
