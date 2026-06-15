import type { InterestSlug, DestinationCategory } from "@/lib/constants";

export type ContentStatus = "showcase" | "stub";

export interface State {
  id: string;
  slug: string;
  name: string;
  capital: string;
  language: string;
  population: string;
  area: string;
  bestTimeToVisit: string;
  heroImage: string;
  overview: string;
  culture: string;
  isUT: boolean;
  status: ContentStatus;
  region: "north" | "south" | "east" | "west" | "central" | "northeast";
  stats: { attractions: number; foods: number; festivals: number };
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  stateSlug: string;
  category: DestinationCategory;
  interests: InterestSlug[];
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  thingsToDo: string[];
  bestTime: string;
  travelTips: string[];
  coords: { lat: number; lng: number };
  nearbySlugs: string[];
  featured?: boolean;
}

export interface Food {
  id: string;
  slug: string;
  name: string;
  stateSlug: string;
  category: string;
  image: string;
  description: string;
  vegetarian: boolean;
  featured?: boolean;
}

export interface Festival {
  id: string;
  slug: string;
  name: string;
  stateSlug: string;
  month: string;
  type: string;
  image: string;
  description: string;
  significance: string;
  featured?: boolean;
}
