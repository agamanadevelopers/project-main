"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export function Process() {
  const t = useT().process;
  return (
    <section id="process" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.body}</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <div
              key={step.n}
              className={
                "group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] p-7 transition-all duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 " +
                (i === 0
                  ? "bg-teal text-white"
                  : "bg-cream text-ink ring-1 ring-line hover:shadow-[0_28px_56px_-30px_rgba(4,48,59,0.45)]")
              }
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-lime transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />
              <span
                className={
                  "font-display text-5xl font-bold leading-none transition-colors duration-300 " +
                  (i === 0 ? "text-lime" : "text-ink/20 group-hover:text-lime-deep")
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
