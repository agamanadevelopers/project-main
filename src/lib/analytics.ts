// Thin wrapper around gtag for GA4 custom events. No-ops safely on the server
// or if the Google tag hasn't loaded (e.g. blocked by an ad-blocker).
type GtagParams = Record<string, string | number | boolean | undefined>;

type Gtag = (command: "event", eventName: string, params?: GtagParams) => void;

export function trackEvent(name: string, params?: GtagParams): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}
