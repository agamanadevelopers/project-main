"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";
import { images } from "@/lib/images";

export function WhyAgamana() {
  const t = useT().why;

  return (
    <section id="why" className="bg-cream py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Image + floating quote */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-2xl)] ring-1 ring-line">
                <Image
                  src={images.why.src}
                  alt={images.why.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 to-transparent" />
              </div>

              {/* Signature quote card */}
              <div className="relative z-10 mx-4 -mt-14 rounded-[var(--radius-card)] bg-lime p-6 shadow-[0_24px_50px_-28px_rgba(4,48,59,0.5)] sm:-mt-16 sm:p-7">
                <Quote size={26} className="text-teal-deep/60" aria-hidden />
                <p className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-teal-deep sm:text-2xl">
                  {t.quote}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-eyebrow text-teal-deep/70">
                  {t.quoteBy}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Editorial copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-sm font-semibold tracking-eyebrow text-ink-soft uppercase">
                {t.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink sm:text-[2.75rem]">
                {t.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-ink sm:text-xl">{t.lead}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{t.body}</p>
            </Reveal>

            {/* Pillars — classic hairline list */}
            <Reveal stagger className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {t.pillars.map((p, i) => (
                <div key={p.title} className="border-t border-ink/15 pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-bold text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Stats band */}
        <Reveal
          stagger
          className="mt-16 grid grid-cols-3 gap-4 rounded-[var(--radius-2xl)] bg-teal px-6 py-10 text-white sm:gap-8 md:px-12"
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-5xl font-extrabold tracking-tight text-lime sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/70">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
