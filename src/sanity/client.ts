import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";

/** Read-only client for fetching published content (public dataset, no token). */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
