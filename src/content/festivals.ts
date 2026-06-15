import type { Festival } from "./types";
import { FESTIVALS } from "@/data/festivals";
import type { Source } from "./source";

export function getAllFestivals(_source?: Source): Festival[] { return FESTIVALS; }
export function getFestivalBySlug(slug: string, _source?: Source): Festival | undefined {
  return FESTIVALS.find((f) => f.slug === slug);
}
export function getFestivalsByState(stateSlug: string, _source?: Source): Festival[] {
  return FESTIVALS.filter((f) => f.stateSlug === stateSlug);
}
export function getFestivalsByMonth(month: string, _source?: Source): Festival[] {
  return FESTIVALS.filter((f) => f.month === month);
}
export function getFeaturedFestivals(_source?: Source): Festival[] {
  return FESTIVALS.filter((f) => f.featured);
}
