import type { Food } from "./types";
import { FOODS } from "@/data/foods";
import type { Source } from "./source";

export function getAllFoods(_source?: Source): Food[] { return FOODS; }
export function getFoodBySlug(slug: string, _source?: Source): Food | undefined {
  return FOODS.find((f) => f.slug === slug);
}
export function getFoodsByState(stateSlug: string, _source?: Source): Food[] {
  return FOODS.filter((f) => f.stateSlug === stateSlug);
}
export function getFeaturedFoods(_source?: Source): Food[] {
  return FOODS.filter((f) => f.featured);
}
