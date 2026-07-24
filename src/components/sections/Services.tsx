"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { ContactButton } from "@/components/ui/ContactButton";
import { useContact } from "@/lib/contact";
import { useT } from "@/lib/i18n";
import { images, type Img } from "@/lib/images";
import { cn } from "@/lib/utils";

type Card =
  | { kind: "card"; ci: number; img: Img; size: "feature" | "tall" | "wide"; span: string }
  | { kind: "cta"; span: string };

// Bento composition — every service is a visual image card, all two rows tall so
// the capability chips have room to wrap. `ci` indexes the (bilingual) services
// list; DOM order tiles the lg grid with no gaps.
const cards: Card[] = [
  { kind: "card", ci: 0, img: images.hero, size: "feature", span: "sm:col-span-2 lg:col-span-2 lg:row-span-2" },
  { kind: "card", ci: 1, img: images.haveProject, size: "tall", span: "lg:col-span-1 lg:row-span-2" },
  { kind: "card", ci: 2, img: images.projects[0], size: "tall", span: "lg:col-span-1 lg:row-span-2" },
  { kind: "card", ci: 3, img: images.statement, size: "wide", span: "sm:col-span-2 lg:col-span-2 lg:row-span-2" },
  { kind: "card", ci: 4, img: images.projects[1], size: "wide", span: "sm:col-span-2 lg:col-span-2 lg:row-span-2" },
  { kind: "cta", span: "sm:col-span-2 lg:col-span-4" },
];

function Chip({ label }: { label: string }) {
  return (
    <li className="rounded-full bg-white/10 px-3 py-1.5 text-[0.82rem] font-medium text-white/90 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:bg-white/20 hover:ring-white/45">
      {label}
    </li>
  );
}

export function Services() {
  const t = useT().services;
  const cta = useT().cta;
  const common = useT().common;
  const { openContact } = useContact();

  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <Container>
        {/* Header */}
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <div className="mt-4">
              <WordReveal
                key={t.heading}
                text={t.heading}
                className="text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl"
              />
            </div>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{t.body}</p>
          </div>
          <div className="shrink-0">
            <ContactButton variant="primary" size="lg">
              {common.letsTalk}
            </ContactButton>
          </div>
        </Reveal>

        {/* Bento grid */}
        <Reveal
          stagger
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[12.5rem] lg:grid-cols-4 lg:gap-5"
        >
          {cards.map((c, idx) => {
            if (c.kind === "cta") {
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={openContact}
                  className={cn(
                    "group flex min-h-[10rem] flex-col justify-between rounded-[var(--radius-2xl)] bg-lime p-7 text-left text-teal-deep transition-transform duration-300 hover:-translate-y-1 md:flex-row md:items-center md:justify-between lg:min-h-0",
                    c.span,
                  )}
                >
                  <span className="max-w-md">
                    <span className="block text-xs font-semibold uppercase tracking-eyebrow text-teal-deep/70">
                      {cta.eyebrow}
                    </span>
                    <span className="mt-2 block font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                      {cta.headline}
                    </span>
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-teal-deep px-6 py-3 font-semibold text-lime md:mt-0">
                    {common.letsTalk}
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-lime/15 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </span>
                  </span>
                </button>
              );
            }

            const s = t.items[c.ci];
            const feature = c.size === "feature";
            return (
              <div
                key={idx}
                className={cn(
                  "group relative overflow-hidden rounded-[var(--radius-2xl)] bg-teal-deep",
                  "min-h-[22rem] lg:min-h-0",
                  c.span,
                )}
              >
                <Image
                  src={s.image ?? c.img.src}
                  alt=""
                  fill
                  sizes={feature ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/85 to-teal-deep/20" />

                {/* Step number */}
                <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 font-display text-xs font-bold text-white ring-1 ring-white/20 backdrop-blur-sm">
                  {String(c.ci + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                  <h3
                    className={cn(
                      "font-display font-bold tracking-tight text-white",
                      feature ? "text-2xl md:text-[2.25rem] md:leading-[1.05]" : "text-xl md:text-2xl",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 max-w-md leading-relaxed text-white/75",
                      feature ? "text-base" : "text-[0.92rem]",
                    )}
                  >
                    {s.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.chips.map((chip) => (
                      <Chip key={chip} label={chip} />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
