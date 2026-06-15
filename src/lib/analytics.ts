// Analytics stub. Swap with a real provider later (PostHog, Plausible, etc).
// TODO: replace no-op implementation when an analytics provider is connected.

type Props = Record<string, unknown>;

export function track(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line no-console
  if ((window as unknown as { __atlasDebug?: boolean }).__atlasDebug) {
    console.debug("[analytics] track", event, props);
  }
}

export function pageview(path: string) {
  if (typeof window === "undefined") return;
  if ((window as unknown as { __atlasDebug?: boolean }).__atlasDebug) {
    // eslint-disable-next-line no-console
    console.debug("[analytics] pageview", path);
  }
}
