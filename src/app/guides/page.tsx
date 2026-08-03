// app/guides/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { BUSINESS, breadcrumbSchema, webPageSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, LastReviewed } from "@/app/_components/PageBlocks";

export const metadata: Metadata = {
  title: { absolute: "Guides: Land Development in Karnataka | Agamana Projects" },
  description:
    "Practical guides for land owners and developers in Karnataka. DC conversion, layout approval, land development, project branding and more.",
  alternates: { canonical: `${BUSINESS.url}/guides` },
};

export default function GuidesIndex() {
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Guides", href: "/guides", url: `${BUSINESS.url}/guides` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd
        data={webPageSchema({
          url: `${BUSINESS.url}/guides`,
          name: "Guides: Land Development in Karnataka",
          description:
            "Practical guides for land owners and developers in Karnataka.",
          speakable: ["h1"],
        })}
      />
      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero
        eyebrow="Guides"
        h1="Practical Guides for Land Owners & Developers"
        intro="Everything you need to know about developing land in Karnataka. Written in plain language, from people who do this every day."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(4,48,59,0.45)]"
          >
            <span className="text-xs font-semibold uppercase tracking-eyebrow text-teal">
              {g.category}
            </span>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-ink">
              {g.h1}
            </h2>
            <p className="mt-2 line-clamp-3 leading-relaxed text-ink-soft">{g.intro}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-ink-faint">
              <span>{g.readingTime}</span>
              <span aria-hidden>·</span>
              <time dateTime={g.updatedDate}>
                {new Date(g.updatedDate + "T00:00:00").toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <span className="mt-4 text-sm font-semibold text-teal transition-colors group-hover:text-lime-deep">
              Read guide &rarr;
            </span>
          </Link>
        ))}
      </div>

      <LastReviewed date={LAST_REVIEWED} />
    </>
  );
}
