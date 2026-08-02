// app/locations/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/lib/locations";
import { BUSINESS, faqSchema, breadcrumbSchema } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, CtaRow, FaqList, SectionHeading } from "@/app/_components/PageBlocks";

// Pre-render every location at build time (static, fast, crawlable).
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

// Per-page <title> and meta description — critical for ranking each city page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const canonical = `${BUSINESS.url}/locations/${loc.slug}`;
  return {
    title: { absolute: loc.title },
    description: loc.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: loc.title,
      description: loc.metaDescription,
      url: canonical,
      type: "website",
      images: [BUSINESS.image],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const canonical = `${BUSINESS.url}/locations/${loc.slug}`;
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Locations", href: "/locations", url: `${BUSINESS.url}/locations` },
    { name: loc.city, href: `/locations/${loc.slug}`, url: canonical },
  ];

  // Region-specific business node: same business, area-served narrowed to this
  // city, tied back to the site-wide RealEstateAgent entity via parentOrganization.
  const localAreaSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${canonical}/#business`,
    name: `${BUSINESS.name} — ${loc.city}`,
    url: canonical,
    parentOrganization: { "@id": `${BUSINESS.url}/#business` },
    image: BUSINESS.image,
    telephone: BUSINESS.phonePrimary,
    areaServed: { "@type": "AdministrativeArea", name: `${loc.city}, ${loc.district}` },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd data={localAreaSchema} />
      {loc.faqs.length > 0 && <JsonLd data={faqSchema(loc.faqs)} />}

      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero eyebrow={`${loc.region} · ${loc.district} District`} h1={loc.h1} intro={loc.intro} />

      <CtaRow />

      <section aria-labelledby="why-heading" className="mt-14">
        <SectionHeading id="why-heading">Why land owners in {loc.city} work with us</SectionHeading>
        <ul className="mt-6 space-y-3">
          {loc.whyHere.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-ink-soft">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-deep" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {loc.projects.length > 0 && (
        <section aria-labelledby="projects-heading" className="mt-14">
          <SectionHeading id="projects-heading">Our projects in and around {loc.city}</SectionHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loc.projects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(4,48,59,0.45)]"
              >
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                  {p.type}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink">{p.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="areas-heading" className="mt-14">
        <SectionHeading id="areas-heading">Areas we serve near {loc.city}</SectionHeading>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          We work across {loc.district} district and nearby, including {loc.nearbyAreas.join(", ")}.
        </p>
      </section>

      <FaqList faqs={loc.faqs} />

      <section
        aria-labelledby="cta-heading"
        className="mt-16 rounded-[var(--radius-2xl)] bg-teal p-8 text-white sm:p-12"
      >
        <h2 id="cta-heading" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Own land in {loc.city}? Let&apos;s talk.
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-white/75">
          Tell us about your land or project and we&apos;ll take it from there — one partner, every step.
        </p>
        <CtaRow />
      </section>
    </>
  );
}
