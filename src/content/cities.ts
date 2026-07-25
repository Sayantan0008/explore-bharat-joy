import type { CityInfo } from "@/data/stateExtras";
import { getAllCities as getAllCitiesRaw, getCityBySlug as getCityBySlugRaw } from "@/data/stateExtras";
import type { Source } from "./source";

export function getAllCities(_source?: Source): CityInfo[] {
  return getAllCitiesRaw();
}

export function getCityBySlug(slug: string, _source?: Source): CityInfo | undefined {
  return getCityBySlugRaw(slug);
}

export function getCitiesByState(stateSlug: string, _source?: Source): CityInfo[] {
  return getAllCitiesRaw().filter((c) => c.stateSlug === stateSlug);
}

export function getFeaturedCities(limit = 12, _source?: Source): CityInfo[] {
  return getAllCitiesRaw()
    .filter((c) => c.overview && c.coords)
    .sort((a, b) => b.attractionsCount - a.attractionsCount)
    .slice(0, limit);
}
