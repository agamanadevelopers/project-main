// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { BUSINESS, breadcrumbSchema, webPageSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, LastReviewed } from "@/app/_components/PageBlocks";

export const metadata: Metadata = {
  title: { absolute: "Our Services — Land to Launch | Agamana Projects" },
  description:
    "Everything your project needs: layout planning, approvals, branding, marketing and sales & launch support. One partner for every stage, across Karnataka.",
  alternates: { canonical: `${BUSINESS.url}/services` },
};

export default function ServicesIndex() {
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Services", href: "/services", url: `${BUSINESS.url}/services` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd
        data={webPageSchema({
          url: `${BUSINESS.url}/services`,
          name: "Our Services — Land to Launch | Agamana Projects",
          speakable: ["h1"],
        })}
      />
      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero
        eyebrow="How we help"
        h1="Everything Your Project Needs"
        intro="No matter where you are in your journey, we're here to help — from planning your land to launching your project."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((svc) => (
          <Link
            key={svc.slug}
            href={`/services/${svc.slug}`}
            className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(4,48,59,0.45)]"
          >
            <h2 className="font-display text-xl font-bold tracking-tight text-ink">{svc.name}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{svc.intro}</p>
            <span className="mt-4 text-sm font-semibold text-teal transition-colors group-hover:text-lime-deep">
              Learn more &rarr;
            </span>
          </Link>
        ))}
      </div>

      <LastReviewed date={LAST_REVIEWED} />
    </>
  );
}
