"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

const numbers = ["01", "02"];

export function AudienceCards() {
  const t = useT().audience;

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow align="center">{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.5rem]">
            {t.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {t.supporting}
          </p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:gap-6">
          {t.cards.map((card, i) => (
            <a
              key={i}
              href="#services"
              className="group relative flex min-h-[23rem] flex-col overflow-hidden rounded-[var(--radius-2xl)] bg-card p-8 ring-1 ring-line transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-2 hover:ring-teal/25 hover:shadow-[0_44px_90px_-46px_rgba(4,48,59,0.5)] md:p-12"
            >
              {/* Ghost index — editorial watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-14 -right-3 z-0 select-none font-display text-[11rem] font-bold leading-none text-ink/[0.05] transition-all duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-3 group-hover:text-lime/30 md:text-[15rem]"
              >
                {numbers[i]}
              </span>

              <div className="relative z-10 flex h-full flex-col">
                {/* Big title — hover roll-swaps into an on-brand lime highlight.
                    `w-fit self-start` stops the flex column from stretching it,
                    so the highlight hugs the text; `-ml-3` offsets the padding so
                    the text still lines up with the body below. */}
                <h3 className="-ml-3 w-fit self-start font-display text-4xl font-bold leading-[0.98] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[4rem]">
                  <span className="relative block overflow-hidden">
                    <span className="block px-3 pb-[0.2em] pt-[0.06em] transition-transform duration-[560ms] ease-[var(--ease-out-expo)] group-hover:-translate-y-full">
                      {card.title}
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 block translate-y-full rounded-lg bg-lime px-3 pb-[0.2em] pt-[0.06em] text-teal-deep transition-transform duration-[560ms] ease-[var(--ease-out-expo)] group-hover:translate-y-0"
                    >
                      {card.title}
                    </span>
                  </span>
                </h3>

                {/* Body */}
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{card.body}</p>

                {/* CTA */}
                <span className="mt-auto inline-flex items-center gap-3 pt-10 text-base font-semibold text-ink">
                  {card.cta}
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink ring-1 ring-line transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:bg-lime group-hover:ring-lime">
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
              </div>
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
