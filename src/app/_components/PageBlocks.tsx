// app/_components/PageBlocks.tsx
// Shared building blocks for the location & service pages, styled with the
// site's own design system (Container, Eyebrow, Button, ContactButton, tokens)
// so these pages read as native parts of the site — not bolted on.
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-faint">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.name}
                </Link>
                <span aria-hidden className="text-line">
                  /
                </span>
              </>
            ) : (
              <span aria-current="page" className="text-ink-soft">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, h1, intro }: { eyebrow: string; h1: string; intro: string }) {
  return (
    <header className="mt-8 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] text-ink sm:text-5xl">
        {h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>
    </header>
  );
}

/** Primary contact (opens the site's contact popup) + link to homepage projects. */
export function CtaRow() {
  return (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
      <ContactButton variant="primary" size="lg">
        Let&apos;s Talk About Your Land
      </ContactButton>
      <Button href="/#projects" size="lg" variant="white">
        View Our Projects
      </Button>
    </div>
  );
}

export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display text-2xl font-bold leading-tight tracking-[-0.01em] text-ink sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function LastReviewed({ date }: { date: string }) {
  return (
    <p className="mt-6 text-xs text-ink-faint">
      Last reviewed: <time dateTime={date}>{new Date(date + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time>
    </p>
  );
}

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside aria-label="Key takeaways" className="mt-10 rounded-[var(--radius-card)] border border-lime-deep/20 bg-lime-deep/5 p-6">
      <h2 className="font-display text-lg font-bold text-ink">Key Takeaways</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-deep" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function ComparisonTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: [string, string, string];
  rows: { aspect: string; col1: string; col2: string }[];
}) {
  return (
    <section aria-labelledby="comparison-heading" className="mt-14">
      <SectionHeading id="comparison-heading">{title}</SectionHeading>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-[0.95rem]">
          <thead>
            <tr className="border-b border-line">
              <th className="py-3 pr-4 font-display font-semibold text-ink">{headers[0]}</th>
              <th className="px-4 py-3 font-display font-semibold text-ink">{headers[1]}</th>
              <th className="px-4 py-3 font-display font-semibold text-ink">{headers[2]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.aspect} className="border-b border-line/50">
                <td className="py-3 pr-4 font-medium text-ink">{row.aspect}</td>
                <td className="px-4 py-3 text-ink-soft">{row.col1}</td>
                <td className="px-4 py-3 text-ink-soft">{row.col2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="faq-heading" className="mt-16">
      <SectionHeading id="faq-heading">Frequently Asked Questions</SectionHeading>
      <dl className="mt-6 divide-y divide-line/70 border-y border-line/70">
        {faqs.map((f) => (
          <div key={f.q} className="py-5">
            <dt className="font-display text-lg font-semibold text-ink">{f.q}</dt>
            <dd className="mt-2 leading-relaxed text-ink-soft">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
