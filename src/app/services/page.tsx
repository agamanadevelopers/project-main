// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { BUSINESS, breadcrumbSchema, webPageSchema, faqSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, KeyTakeaways, SectionHeading, ComparisonTable, FaqList, LastReviewed } from "@/app/_components/PageBlocks";

export const metadata: Metadata = {
  title: { absolute: "Our Services | Land to Launch | Agamana Projects" },
  description:
    "Everything your project needs: layout planning, approvals, branding, marketing and sales & launch support. One partner for every stage, across Karnataka.",
  alternates: { canonical: `${BUSINESS.url}/services` },
};

const serviceFaqs = [
  {
    q: "What services does Agamana Projects offer?",
    a: "We offer 5 core services: layout planning, approvals and documentation, project branding, marketing and digital presence, and sales and launch support. Together they cover the full lifecycle of a residential layout project.",
  },
  {
    q: "Can one company handle layout planning and branding?",
    a: "Yes. Agamana Projects handles layout planning, government approvals, project branding, marketing and launch support under one roof. One team, one process, one point of contact.",
  },
  {
    q: "Do you work with land owners or developers?",
    a: "Both. Land owners typically need end-to-end guidance from land assessment to launch. Developers usually need us to fill specific gaps like branding, approvals or marketing.",
  },
  {
    q: "Which areas in Karnataka do you serve?",
    a: "We serve Sagara, Shivamogga, Sirsi, Tumkur, Chitradurga, Hubli, Haveri and surrounding areas across Central, Malnad and North Karnataka.",
  },
];

export default function ServicesIndex() {
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Services", href: "/services", url: `${BUSINESS.url}/services` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd data={faqSchema(serviceFaqs)} />
      <JsonLd
        data={webPageSchema({
          url: `${BUSINESS.url}/services`,
          name: "Our Services | Land to Launch | Agamana Projects",
          speakable: ["h1"],
        })}
      />
      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero
        eyebrow="How we help"
        h1="Everything Your Project Needs"
        intro="No matter where you are in your journey, we're here to help. From planning your land to launching your project."
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

      <KeyTakeaways
        items={[
          "Agamana Projects offers 5 services that cover the full lifecycle of a residential layout project in Karnataka.",
          "One partner handles layout planning, government approvals, branding, marketing and launch support.",
          "We work with both land owners (end-to-end guidance) and developers (filling specific gaps).",
          "Available across 7 locations in Central, Malnad and North Karnataka.",
        ]}
      />

      <section className="mt-14">
        <SectionHeading id="stats-heading">At a glance</SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "5", label: "Core services" },
            { value: "8", label: "Stages of support" },
            { value: "7", label: "Locations served" },
            { value: String(BUSINESS.areaServed.length), label: "Regions covered" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[var(--radius-card)] border border-line bg-card p-5 text-center">
              <p className="font-display text-3xl font-bold text-teal">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading id="definitions-heading">Key terms</SectionHeading>
        <dl className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <div>
            <dt className="font-semibold text-ink">Layout planning</dt>
            <dd>Layout planning is the process of dividing a larger parcel of land into individual plots with roads, open spaces, drainage and utility connections.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Project branding</dt>
            <dd>Project branding is the creation of a distinct identity for a residential layout, including the project name, logo, brochure and site hoardings.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Project launch</dt>
            <dd>A project launch is the coordinated market introduction of a residential layout, combining sales collaterals, digital campaigns and buyer presentations.</dd>
          </div>
        </dl>
      </section>

      <ComparisonTable
        title="Land Owners vs Developers"
        headers={["Aspect", "Land Owner", "Developer"]}
        rows={[
          { aspect: "Typical goal", col1: "Monetise idle or ancestral land", col2: "Launch a plotted project for buyers" },
          { aspect: "Approval knowledge", col1: "Often navigating for the first time", col2: "Familiar but wants it handled" },
          { aspect: "Branding need", col1: "Rarely considered", col2: "Integral from day one" },
          { aspect: "How Agamana helps", col1: "Full journey: plan, approve, brand, sell", col2: "Fills specific gaps with expertise" },
        ]}
      />

      <FaqList faqs={serviceFaqs} />

      <LastReviewed date={LAST_REVIEWED} published="2025-08-01" />
    </>
  );
}
