"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export function Process() {
  const t = useT().process;
  return (
    <section id="process" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold tracking-eyebrow text-ink-soft uppercase">
            {t.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.body}</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <div
              key={step.n}
              className={
                "flex flex-col rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:-translate-y-1 " +
                (i === 0
                  ? "bg-teal text-white"
                  : "bg-cream text-ink ring-1 ring-line hover:shadow-[0_24px_50px_-30px_rgba(4,48,59,0.4)]")
              }
            >
              <span
                className={
                  "font-display text-5xl font-extrabold leading-none " +
                  (i === 0 ? "text-lime" : "text-ink/25")
                }
              >
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold leading-snug tracking-tight">
                {step.title}
              </h3>
              <p
                className={
                  "mt-3 text-[0.95rem] leading-relaxed " +
                  (i === 0 ? "text-white/70" : "text-ink-soft")
                }
              >
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
