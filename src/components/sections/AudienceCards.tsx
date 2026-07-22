"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LandOwnerArt, DeveloperArt } from "@/components/sections/audience-art";
import { useT } from "@/lib/i18n";

const art = [LandOwnerArt, DeveloperArt];

export function AudienceCards() {
  const t = useT().audience;

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-eyebrow text-ink-soft uppercase">
            {t.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.5rem]">
            {t.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {t.supporting}
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {t.cards.map((card, i) => {
            const Art = art[i];
            return (
              <a
                key={i}
                href="#services"
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius-2xl)] bg-card p-3 ring-1 ring-line transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-38px_rgba(4,48,59,0.5)] hover:ring-2 hover:ring-teal/30"
              >
                {/* Illustration */}
                <div className="relative flex items-center justify-center overflow-hidden rounded-[calc(var(--radius-2xl)-0.5rem)] bg-gradient-to-b from-cream to-paper">
                  {/* hover glow */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-lime/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Art className="relative h-56 w-full max-w-sm sm:h-64" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 pb-6 pt-7 md:px-6">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft ring-1 ring-line">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-deep" />
                    {card.kicker}
                  </span>

                  <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink md:text-[2.25rem]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-lg font-medium leading-snug text-ink">{card.lead}</p>
                  <p className="mt-2 max-w-sm text-[1.02rem] leading-relaxed text-ink-soft">
                    {card.body}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-[0.98rem] font-semibold text-ink">
                    {card.cta}
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-ink ring-1 ring-line transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:bg-lime group-hover:ring-lime">
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5"
                      />
                    </span>
                  </span>
                </div>
              </a>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
