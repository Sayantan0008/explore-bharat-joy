import type { State } from "./types";
import { STATES } from "@/data/states";
import type { Source } from "./source";

export function getAllStates(_source?: Source): State[] {
  return STATES;
}
export function getStateBySlug(slug: string, _source?: Source): State | undefined {
  return STATES.find((s) => s.slug === slug);
}
export function getShowcaseStates(_source?: Source): State[] {
  return STATES.filter((s) => s.status === "showcase");
}
export function getStubStates(_source?: Source): State[] {
  return STATES.filter((s) => s.status === "stub");
}
