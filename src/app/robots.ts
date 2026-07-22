import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * While the site is on the temporary Vercel domain we block all search engines.
 * Set `BLOCK_INDEXING = false` once it's live on the custom production domain to
 * allow crawling again (and advertise the sitemap).
 */
const BLOCK_INDEXING = true;

export default function robots(): MetadataRoute.Robots {
  if (BLOCK_INDEXING) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
