import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";

/**
 * Read-only client for fetching published content (public dataset, no token).
 * `useCdn: false` so builds/revalidations always get the freshest published
 * data (the CDN lags behind new uploads); Next.js ISR handles caching.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
