"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useContact } from "@/lib/contact";
import { useT } from "@/lib/i18n";
import { images } from "@/lib/images";

const media = [images.ownLand, images.haveProject];

export function AudienceCards() {
  const t = useT().audience;
  const { openContact } = useContact();

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-eyebrow text-ink-soft uppercase">
            {t.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl">
            {t.heading}
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-7">
          {t.cards.map((card, i) => (
            <button
              key={i}
              type="button"
              onClick={openContact}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-2xl)] bg-card text-left ring-1 ring-line transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(4,48,59,0.45)]"
            >
              <div className="relative m-2.5 aspect-[16/10] overflow-hidden rounded-[calc(var(--radius-2xl)-0.6rem)]">
                <Image
                  src={media[i].src}
                  alt={media[i].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/55 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-lime px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-deep">
                  {card.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-4 md:px-8 md:pb-9">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-[1.9rem]">
                    {card.title}
                  </h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-lime">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <p className="mt-3 max-w-sm text-[1.02rem] leading-relaxed text-ink-soft">
                  {card.body}
                </p>
                <span className="mt-6 text-[0.98rem] font-semibold text-ink underline decoration-lime decoration-2 underline-offset-4">
                  {card.cta}
                </span>
              </div>
            </button>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
