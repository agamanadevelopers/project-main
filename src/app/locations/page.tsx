// app/locations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { BUSINESS, breadcrumbSchema, webPageSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, LastReviewed } from "@/app/_components/PageBlocks";

export const metadata: Metadata = {
  title: { absolute: "Where We Work — Land Development Across Karnataka | Agamana Projects" },
  description:
    "Agamana Projects develops residential layouts and farmland plots across Karnataka — Sagara, Shivamogga, Sirsi and Uttara Kannada. Find your area.",
  alternates: { canonical: `${BUSINESS.url}/locations` },
};

export default function LocationsIndex() {
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Locations", href: "/locations", url: `${BUSINESS.url}/locations` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd
        data={webPageSchema({
          url: `${BUSINESS.url}/locations`,
          name: "Where We Work — Land Development Across Karnataka | Agamana Projects",
          speakable: ["h1"],
        })}
      />
      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero
        eyebrow="Where we work"
        h1="Land Development Across Karnataka"
        intro="We partner with land owners and developers across Central, Malnad and coastal Karnataka. Find the area closest to your land."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(4,48,59,0.45)]"
          >
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
              {loc.region}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">{loc.city}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{loc.metaDescription}</p>
            <span className="mt-4 text-sm font-semibold text-teal transition-colors group-hover:text-lime-deep">
              Explore {loc.city} &rarr;
            </span>
          </Link>
        ))}
      </div>

      <LastReviewed date={LAST_REVIEWED} />
    </>
  );
}
