import type { Destination } from "./types";
import { DESTINATIONS } from "@/data/destinations";
import type { InterestSlug, DestinationCategory } from "@/lib/constants";
import type { Source } from "./source";

export function getAllDestinations(_source?: Source): Destination[] {
  return DESTINATIONS;
}
export function getDestinationBySlug(slug: string, _source?: Source): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
export function getDestinationsByState(stateSlug: string, _source?: Source): Destination[] {
  return DESTINATIONS.filter((d) => d.stateSlug === stateSlug);
}
export function getDestinationsByCategory(cat: DestinationCategory, _source?: Source): Destination[] {
  return DESTINATIONS.filter((d) => d.category === cat);
}
export function getDestinationsByInterest(interest: InterestSlug, _source?: Source): Destination[] {
  return DESTINATIONS.filter((d) => d.interests.includes(interest));
}
export function getFeaturedDestinations(_source?: Source): Destination[] {
  return DESTINATIONS.filter((d) => d.featured);
}
