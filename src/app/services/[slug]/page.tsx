// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import { locations } from "@/lib/locations";
import { BUSINESS, faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, CtaRow, FaqList, SectionHeading } from "@/app/_components/PageBlocks";

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

      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero eyebrow="How we help" h1={svc.h1} intro={svc.intro} />
      <p className="mt-4 text-ink-soft">{svc.forWhom}</p>

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
    </>
  );
}
