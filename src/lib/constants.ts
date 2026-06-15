export const INTERESTS = [
  { slug: "heritage", label: "Heritage", icon: "🏰", blurb: "Forts, palaces and storied old cities." },
  { slug: "mountains", label: "Mountains", icon: "🏔", blurb: "Himalayan peaks, hill stations and valleys." },
  { slug: "beaches", label: "Beaches", icon: "🏖", blurb: "Coastlines from Goa to the Andamans." },
  { slug: "spiritual", label: "Spiritual", icon: "🛕", blurb: "Temples, ghats and pilgrim trails." },
  { slug: "food", label: "Food", icon: "🍛", blurb: "Regional kitchens worth a detour." },
  { slug: "wildlife", label: "Wildlife", icon: "🐅", blurb: "Tigers, elephants and rare birdlife." },
  { slug: "festivals", label: "Festivals", icon: "🎭", blurb: "Color, music and ritual through the year." },
  { slug: "adventure", label: "Adventure", icon: "🚵", blurb: "Treks, rafting, deserts and dives." },
] as const;

export type InterestSlug = (typeof INTERESTS)[number]["slug"];

export const DESTINATION_CATEGORIES = [
  "City",
  "Heritage Site",
  "Hill Station",
  "Beach",
  "Temple",
  "National Park",
  "Desert",
  "Backwater",
  "Lake",
  "Fort",
] as const;
export type DestinationCategory = (typeof DESTINATION_CATEGORIES)[number];

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

export const SITE_NAME = "India Atlas";
export const SITE_TAGLINE = "Discover India — state by state, story by story.";
