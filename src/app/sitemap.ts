import type { MetadataRoute } from "next";
import { site, legalLinks } from "@/lib/site";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guidesIndex: MetadataRoute.Sitemap = [
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(g.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalPages: MetadataRoute.Sitemap = legalLinks.map((l) => ({
    url: `${base}${l.href}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  // NOTE: project detail pages are intentionally omitted until the canonical
  // project URL is confirmed (the site links projects via the CMS, and the
  // brief flagged agamana.com vs agamanaprojects.com). Add them here once the
  // real, resolving project routes exist.
  return [...staticPages, ...servicePages, ...locationPages, ...guidesIndex, ...guidePages, ...legalPages];
}
