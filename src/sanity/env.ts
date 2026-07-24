// Public Sanity project config. Project ID + dataset are not secrets, so they
// are safe to bake in as fallbacks (the site works on Vercel without env vars).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "k3e80j48";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-01";
