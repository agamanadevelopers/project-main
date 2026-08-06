// app/locations/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/lib/locations";
import { BUSINESS, faqSchema, breadcrumbSchema, webPageSchema, articleSchema, howToSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, PageHero, CtaRow, FaqList, SectionHeading, KeyTakeaways, ComparisonTable, LastReviewed } from "@/app/_components/PageBlocks";

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
    name: `${BUSINESS.name}, ${loc.city}`,
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

      <JsonLd
        data={webPageSchema({
          url: canonical,
          name: loc.title,
          description: loc.metaDescription,
          speakable: ["h1", "#why-heading", "#faq-heading"],
        })}
      />
      <JsonLd
        data={articleSchema({
          url: canonical,
          headline: loc.h1,
          description: loc.metaDescription,
          datePublished: "2025-08-01",
          dateModified: LAST_REVIEWED,
          speakable: ["h1", "#how-heading", "#faq-heading"],
        })}
      />

      <JsonLd
        data={howToSchema({
          name: `How to develop land in ${loc.city}`,
          description: `Step-by-step process for developing residential layouts and farmland plots in ${loc.city}, ${loc.district} district.`,
          url: `${canonical}#how-heading`,
          steps: [
            { name: "Site visit and land assessment", text: `We visit your land in ${loc.city}, assess its shape, access, terrain, water sources and proximity to roads and amenities.` },
            { name: "Development plan", text: "We prepare a development plan: layout design, plot sizes, road network, open spaces and infrastructure." },
            { name: "Approvals and documentation", text: `We handle documentation, liaise with local authorities in ${loc.district} district and prepare the technical drawings required.` },
            { name: "Infrastructure and construction", text: "Internal roads, fencing, water, electricity and any amenities the layout promises are built on site." },
            { name: "Branding, marketing and launch", text: "Project branding, a marketing plan and launch support run in parallel so your project reaches buyers the moment plots are ready." },
          ],
        })}
      />

      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      <PageHero eyebrow={`${loc.region} · ${loc.district} District`} h1={loc.h1} intro={loc.intro} />

      <KeyTakeaways
        items={[
          `Agamana Projects works with land owners in ${loc.city} and across ${loc.district} district.`,
          "One partner handles planning, approvals, branding, marketing and launch.",
          `We serve ${loc.nearbyAreas.slice(0, 3).join(", ")} and surrounding areas.`,
        ]}
      />

      <CtaRow />

      <section aria-labelledby="stats-heading" className="mt-14">
        <SectionHeading id="stats-heading">At a glance</SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Stages of support", value: "8" },
            { label: "Services under one roof", value: "5" },
            { label: "Areas served near " + loc.city, value: String(loc.nearbyAreas.length + 1) },
            { label: "Districts covered statewide", value: String(BUSINESS.areaServed.length) },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[var(--radius-card)] border border-line bg-card p-5 text-center">
              <p className="font-display text-3xl font-bold text-teal">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-heading" className="mt-14">
        <SectionHeading id="how-heading">How we work in {loc.city}</SectionHeading>
        <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <p>
            Every project in {loc.city} begins with a site visit. We assess the land, its shape, access,
            terrain, water sources and proximity to roads and amenities, and prepare a development plan
            that fits the location. If the land is suited to farmland plots, we plan accordingly; if it is better
            for residential layouts, the design reflects that.
          </p>
          <p>
            Approvals follow a clear process: we handle documentation, liaise with local authorities in{" "}
            {loc.district} district, and prepare the technical drawings required. Once approved, we move to
            infrastructure: internal roads, fencing, water, electricity and any amenities the layout
            promises. Branding, marketing and launch support run in parallel so the project reaches
            buyers the moment plots are ready.
          </p>
        </div>
      </section>

      <ComparisonTable
        title={`Land Owners vs Developers in ${loc.city}`}
        headers={["Aspect", "Land Owner", "Developer"]}
        rows={[
          { aspect: "Starting point", col1: "Raw land, often ancestral or agricultural", col2: "Acquired land earmarked for a project" },
          { aspect: "Primary need", col1: "Guidance on what the land can become", col2: "Execution partner to plan and launch" },
          { aspect: "Approval knowledge", col1: "Usually limited, first-time process", col2: "Familiar with steps but wants it handled" },
          { aspect: "Marketing", col1: "Rarely considered early on", col2: "Planned from the start to attract buyers" },
          { aspect: "How Agamana helps", col1: "End-to-end from first site visit to launch", col2: "Fills gaps: branding, approvals, marketing" },
        ]}
      />

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

      <section aria-labelledby="definitions-heading" className="mt-14">
        <SectionHeading id="definitions-heading">Key terms</SectionHeading>
        <dl className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <div>
            <dt className="font-semibold text-ink">Layout planning</dt>
            <dd>Layout planning is the process of dividing a larger parcel of land into individual plots with roads, open spaces, drainage and utility connections. A well-planned layout maximises usable area while meeting local authority requirements.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">DC conversion</dt>
            <dd>DC conversion is the legal process of converting agricultural land to non-agricultural use through the District Commissioner&apos;s office. It is a mandatory step before developing residential layouts on farmland in Karnataka.</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Layout approval</dt>
            <dd>Layout approval is the formal permission granted by the local planning authority (Town Planning Authority or DTCP) to develop land into a plotted layout. It requires submitting a layout plan, land documents, technical drawings and NOCs.</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="methodology-heading" className="mt-14">
        <SectionHeading id="methodology-heading">Our approach</SectionHeading>
        <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
          <p>
            We have worked with land owners across {loc.district} district and the wider {loc.region} region.
            Our process is built on direct, on-the-ground experience with local land records offices, planning
            authorities and infrastructure contractors in the area.
          </p>
          <p>
            Every recommendation we make is based on a physical site visit, verified land records and
            conversations with the relevant local authorities. We do not rely on satellite imagery alone or
            make assessments without visiting your land first.
          </p>
        </div>
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
          Tell us about your land or project and we&apos;ll take it from there. One partner, every step.
        </p>
        <CtaRow />
      </section>

      <LastReviewed date={LAST_REVIEWED} />
    </>
  );
}
