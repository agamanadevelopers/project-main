// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { locations } from "@/lib/locations";
import { guides } from "@/lib/guides";
import { BUSINESS, faqSchema, breadcrumbSchema, serviceSchema, webPageSchema, articleSchema, howToSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, CtaRow, FaqList, SectionHeading, KeyTakeaways, ComparisonTable, LastReviewed } from "@/app/_components/PageBlocks";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  const canonical = `${BUSINESS.url}/services/${svc.slug}`;
  return {
    title: { absolute: svc.title },
    description: svc.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: svc.title,
      description: svc.metaDescription,
      url: canonical,
      type: "website",
      images: [BUSINESS.image],
    },
  };
}

const serviceGuideMap: Record<string, string[]> = {
  "layout-planning": ["layout-approval-process-karnataka", "how-to-develop-land-into-plots-karnataka"],
  "approvals": ["dc-conversion-karnataka", "layout-approval-process-karnataka", "agricultural-land-conversion-karnataka"],
  "branding": ["how-to-develop-land-into-plots-karnataka"],
  "marketing": ["how-to-develop-land-into-plots-karnataka"],
  "sales-launch": ["how-to-develop-land-into-plots-karnataka"],
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();
  const relatedGuides = (serviceGuideMap[svc.slug] ?? [])
    .map((s) => guides.find((g) => g.slug === s))
    .filter(Boolean);

  const canonical = `${BUSINESS.url}/services/${svc.slug}`;
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Services", href: "/services", url: `${BUSINESS.url}/services` },
    { name: svc.name, href: `/services/${svc.slug}`, url: canonical },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd data={serviceSchema({ name: svc.name, description: svc.metaDescription, url: canonical })} />
      {svc.faqs.length > 0 && <JsonLd data={faqSchema(svc.faqs)} />}

      <JsonLd
        data={webPageSchema({
          url: canonical,
          name: svc.title,
          description: svc.metaDescription,
          speakable: ["h1", "#includes-heading", "#faq-heading"],
        })}
      />
      <JsonLd
        data={articleSchema({
          url: canonical,
          headline: svc.h1,
          description: svc.metaDescription,
          datePublished: "2025-08-01",
          dateModified: LAST_REVIEWED,
          speakable: ["h1", "#process-heading", "#faq-heading"],
        })}
      />

      <JsonLd
        data={howToSchema({
          name: `How ${svc.name.toLowerCase()} works with Agamana Projects`,
          description: `Step-by-step process for ${svc.name.toLowerCase()} for residential layouts in Karnataka.`,
          url: `${canonical}#process-heading`,
          steps: [
            { name: "Initial consultation", text: "We understand your land, your goals and the scope of the project." },
            { name: "Detailed scope and plan", text: `We prepare a detailed ${svc.name.toLowerCase()} scope tailored to your project and location.` },
            { name: "Execution with updates", text: `We execute ${svc.name.toLowerCase()} with regular updates at every milestone.` },
            { name: "Handover of deliverables", text: "You receive clean, usable deliverables you can act on immediately." },
          ],
        })}
      />

      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero eyebrow="How we help" h1={svc.h1} intro={svc.intro} />
      <p className="mt-4 text-ink-soft">{svc.forWhom}</p>

      <KeyTakeaways
        items={[
          `${svc.name} is one of the core services Agamana provides to land owners and developers.`,
          `Includes: ${svc.includes.slice(0, 4).join(", ")} and more.`,
          "Available across Karnataka: Sagara, Shivamogga, Sirsi and surrounding areas.",
        ]}
      />

      <CtaRow />

      <section aria-labelledby="stats-heading" className="mt-14">
        <SectionHeading id="stats-heading">At a glance</SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Deliverables included", value: String(svc.includes.length) },
            { label: "Locations served", value: String(locations.length) },
            { label: "Districts covered", value: String(BUSINESS.areaServed.length) },
            { label: "Stages of support", value: "8" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[var(--radius-card)] border border-line bg-card p-5 text-center">
              <p className="font-display text-3xl font-bold text-teal">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="includes-heading" className="mt-14">
        <SectionHeading id="includes-heading">What&apos;s included</SectionHeading>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {svc.includes.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-card px-4 py-2 text-[0.95rem] font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Internal links to location pages — spreads link equity, helps both rank */}
      <section aria-labelledby="where-heading" className="mt-14">
        <SectionHeading id="where-heading">Available across Karnataka</SectionHeading>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          We provide {svc.name.toLowerCase()} in{" "}
          {locations.map((loc, i) => (
            <span key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}`}
                className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep"
              >
                {loc.city}
              </Link>
              {i < locations.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          and across the wider region.
        </p>
      </section>

      <section aria-labelledby="process-heading" className="mt-14">
        <SectionHeading id="process-heading">How it works</SectionHeading>
        <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <p>
            We start by understanding your land and your goals. Whether you are a first-time land owner
            or a developer with multiple projects, {svc.name.toLowerCase()} follows the same proven
            process: an initial consultation, a detailed scope, execution with regular updates, and a
            clean handover of deliverables you can use immediately.
          </p>
          <p>
            Every engagement is tailored to the project. A farmland layout in Sagara requires different
            considerations than a residential layout near Shivamogga, and we adapt our approach to the
            land, the market, and the approvals process specific to each location.
          </p>
        </div>
      </section>

      <ComparisonTable
        title="Land Owners vs Developers"
        headers={["Aspect", "Land Owner", "Developer"]}
        rows={[
          { aspect: "Typical goal", col1: "Monetise idle or ancestral land", col2: "Launch a plotted project for buyers" },
          { aspect: "Knowledge of approvals", col1: "Often navigating for the first time", col2: "Familiar but wants it handled" },
          { aspect: "Need for branding", col1: "Rarely considered", col2: "Integral from day one" },
          { aspect: "Marketing expectation", col1: "Word-of-mouth or local agents", col2: "Digital presence and lead generation" },
          { aspect: "How Agamana helps", col1: "Full journey support: plan → approve → brand → sell", col2: "Fills specific gaps with dedicated expertise" },
        ]}
      />

      <section aria-labelledby="definitions-heading" className="mt-14">
        <SectionHeading id="definitions-heading">Key terms</SectionHeading>
        <dl className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <div>
            <dt className="font-semibold text-ink">Layout planning</dt>
            <dd>Layout planning is the process of dividing a larger parcel of land into individual plots with roads, open spaces, drainage and utility connections. A well-planned layout maximises usable area while meeting local authority requirements.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Project branding</dt>
            <dd>Project branding is the creation of a distinct identity for a residential layout or development project. It includes the project name, logo, brochure, flyers and site hoardings that give buyers confidence in the project.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Project launch</dt>
            <dd>A project launch is the coordinated market introduction of a residential layout, combining sales collaterals, digital campaigns, buyer presentations and on-site events to convert interest into bookings.</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="methodology-heading" className="mt-14">
        <SectionHeading id="methodology-heading">Our approach</SectionHeading>
        <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <p>
            Our {svc.name.toLowerCase()} process is built on direct experience across residential layout projects
            in Karnataka. We have refined this process through projects in Sagara, Shivamogga, Sirsi and
            other towns across the state.
          </p>
          <p>
            Every engagement begins with a physical site visit and an in-person conversation with the land
            owner or developer. We do not start work based on phone calls or satellite imagery alone. Our
            recommendations are grounded in what we see on the ground, verified land records and
            conversations with the relevant local authorities.
          </p>
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section aria-labelledby="guides-heading" className="mt-14">
          <SectionHeading id="guides-heading">Related guides</SectionHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedGuides.map((g) => (
              <Link
                key={g!.slug}
                href={`/guides/${g!.slug}`}
                className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(4,48,59,0.45)]"
              >
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-teal">
                  {g!.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
                  {g!.h1}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{g!.intro}</p>
                <span className="mt-3 text-sm font-semibold text-teal transition-colors group-hover:text-lime-deep">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <FaqList faqs={svc.faqs} />

      <section
        aria-labelledby="cta-heading"
        className="mt-16 rounded-[var(--radius-2xl)] bg-teal p-8 text-white sm:p-12"
      >
        <h2 id="cta-heading" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to get started?
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-white/75">
          Tell us about your land or project and we&apos;ll take it from there.
        </p>
        <CtaRow />
      </section>

      <LastReviewed date={LAST_REVIEWED} />
    </>
  );
}
