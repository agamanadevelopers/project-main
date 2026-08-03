// app/guides/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuide } from "@/lib/guides";
import { BUSINESS, faqSchema, breadcrumbSchema, articleSchema, webPageSchema, LAST_REVIEWED } from "@/lib/business";
import { JsonLd } from "@/lib/json-ld";
import { Breadcrumbs, CtaRow, FaqList, SectionHeading, KeyTakeaways, LastReviewed } from "@/app/_components/PageBlocks";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const canonical = `${BUSINESS.url}/guides/${guide.slug}`;
  return {
    title: { absolute: guide.title },
    description: guide.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: canonical,
      type: "article",
      publishedTime: guide.publishedDate,
      modifiedTime: guide.updatedDate,
      authors: [BUSINESS.name],
      images: [BUSINESS.image],
    },
  };
}

function countWords(guide: ReturnType<typeof getGuide>): number {
  if (!guide) return 0;
  const text = [
    guide.intro,
    ...guide.sections.flatMap((s) => [s.heading, ...s.body]),
    ...guide.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).length;
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const canonical = `${BUSINESS.url}/guides/${guide.slug}`;
  const crumbs = [
    { name: "Home", href: "/", url: BUSINESS.url },
    { name: "Guides", href: "/guides", url: `${BUSINESS.url}/guides` },
    { name: guide.h1, href: `/guides/${guide.slug}`, url: canonical },
  ];

  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: c.url })))} />
      <JsonLd
        data={articleSchema({
          url: canonical,
          headline: guide.h1,
          description: guide.metaDescription,
          datePublished: guide.publishedDate,
          dateModified: guide.updatedDate,
          wordCount: countWords(guide),
          speakable: ["h1", "#key-takeaways", "#faq-heading"],
        })}
      />
      <JsonLd
        data={webPageSchema({
          url: canonical,
          name: guide.title,
          description: guide.metaDescription,
          speakable: ["h1", "#key-takeaways"],
        })}
      />
      {guide.faqs.length > 0 && <JsonLd data={faqSchema(guide.faqs)} />}

      <Breadcrumbs items={crumbs.map((c) => ({ name: c.name, href: c.href }))} />

      {/* Article header */}
      <header className="mt-8 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-eyebrow text-teal">
          {guide.category}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.8rem]">
          {guide.h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{guide.intro}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-faint">
          <span>{guide.readingTime}</span>
          <span aria-hidden>·</span>
          <span>By {BUSINESS.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={guide.updatedDate}>
            Updated{" "}
            {new Date(guide.updatedDate + "T00:00:00").toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      <KeyTakeaways items={guide.keyTakeaways} />

      {/* Table of contents */}
      <nav aria-label="Table of contents" className="mt-10 rounded-[var(--radius-card)] border border-line bg-card p-6">
        <h2 className="font-display text-lg font-bold text-ink">In this guide</h2>
        <ol className="mt-3 space-y-2">
          {guide.sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex gap-2 text-[0.95rem] text-ink-soft transition-colors hover:text-teal"
              >
                <span className="shrink-0 font-medium text-ink-faint">{i + 1}.</span>
                {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Guide body */}
      <article className="mt-14 space-y-14">
        {guide.sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <SectionHeading id={section.id}>{section.heading}</SectionHeading>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              {section.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      {/* Internal link to DC conversion guide from the land development guide */}
      {guide.slug === "how-to-develop-land-into-plots-karnataka" && (
        <aside className="mt-14 rounded-[var(--radius-card)] border border-lime-deep/20 bg-lime-deep/5 p-6">
          <p className="text-[0.95rem] leading-relaxed text-ink-soft">
            <strong className="text-ink">Related guide:</strong>{" "}
            <Link
              href="/guides/dc-conversion-karnataka"
              className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep"
            >
              DC Conversion in Karnataka: What Every Land Owner Needs to Know
            </Link>
          </p>
        </aside>
      )}

      {guide.slug === "dc-conversion-karnataka" && (
        <aside className="mt-14 rounded-[var(--radius-card)] border border-lime-deep/20 bg-lime-deep/5 p-6">
          <p className="text-[0.95rem] leading-relaxed text-ink-soft">
            <strong className="text-ink">Related guide:</strong>{" "}
            <Link
              href="/guides/how-to-develop-land-into-plots-karnataka"
              className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep"
            >
              How to Develop Land into Plots in Karnataka: Step by Step
            </Link>
          </p>
        </aside>
      )}

      {/* Useful resources */}
      <section aria-labelledby="resources-heading" className="mt-14">
        <SectionHeading id="resources-heading">Useful resources</SectionHeading>
        <ul className="mt-4 space-y-2 text-[0.95rem]">
          <li>
            <a href="https://karunadu.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep">
              Government of Karnataka
            </a>{" "}
            <span className="text-ink-soft">(official state government portal)</span>
          </li>
          <li>
            <a href="https://rera.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep">
              Karnataka RERA
            </a>{" "}
            <span className="text-ink-soft">(Real Estate Regulatory Authority for project registrations)</span>
          </li>
          <li>
            <a href="https://landrecords.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="font-medium text-teal underline decoration-lime decoration-2 underline-offset-2 transition-colors hover:text-lime-deep">
              Bhoomi: Karnataka Land Records
            </a>{" "}
            <span className="text-ink-soft">(official land records and mutation tracking)</span>
          </li>
        </ul>
      </section>

      <FaqList faqs={guide.faqs} />

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="mt-16 rounded-[var(--radius-2xl)] bg-teal p-8 text-white sm:p-12"
      >
        <h2 id="cta-heading" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Need help with your land?
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-white/75">
          Tell us about your land or project and we&apos;ll take it from there. One partner, every step.
        </p>
        <CtaRow />
      </section>

      {/* More guides */}
      {otherGuides.length > 0 && (
        <section aria-labelledby="more-guides-heading" className="mt-16">
          <SectionHeading id="more-guides-heading">More guides</SectionHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-card p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(4,48,59,0.45)]"
              >
                <span className="text-xs font-semibold uppercase tracking-eyebrow text-teal">
                  {g.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
                  {g.h1}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{g.intro}</p>
                <span className="mt-3 text-sm font-semibold text-teal transition-colors group-hover:text-lime-deep">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <LastReviewed date={LAST_REVIEWED} />
    </>
  );
}
