// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { locations } from "@/lib/locations";
import { BUSINESS, faqSchema, breadcrumbSchema, serviceSchema, webPageSchema, LAST_REVIEWED } from "@/lib/business";
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

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

      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero eyebrow="How we help" h1={svc.h1} intro={svc.intro} />
      <p className="mt-4 text-ink-soft">{svc.forWhom}</p>

      <KeyTakeaways
        items={[
          `${svc.name} is one of the core services Agamana provides to land owners and developers.`,
          `Includes: ${svc.includes.slice(0, 4).join(", ")} and more.`,
          "Available across Karnataka — Sagara, Shivamogga, Sirsi and surrounding areas.",
        ]}
      />

      <CtaRow />

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
            considerations than a residential layout near Shivamogga — and we adapt our approach to the
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

      <section aria-labelledby="resources-heading" className="mt-14">
        <SectionHeading id="resources-heading">Useful resources</SectionHeading>
        <ul className="mt-4 space-y-2 text-[0.95rem]">
          <li>
            <a href="https://karunadu.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep">
              Government of Karnataka
            </a>{" "}
            <span className="text-ink-soft">— official state government portal</span>
          </li>
          <li>
            <a href="https://rera.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep">
              Karnataka RERA
            </a>{" "}
            <span className="text-ink-soft">— Real Estate Regulatory Authority for project registrations</span>
          </li>
          <li>
            <a href="https://landrecords.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep">
              Bhoomi — Karnataka Land Records
            </a>{" "}
            <span className="text-ink-soft">— official land records and mutation tracking</span>
          </li>
        </ul>
      </section>

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
