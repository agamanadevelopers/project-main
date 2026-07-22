"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-card)] ring-1 transition-colors duration-300",
        open ? "bg-card ring-line" : "bg-card/60 ring-line/70",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
        >
          <span className="font-display text-lg font-bold leading-snug tracking-tight text-ink md:text-xl">
            {q}
          </span>
          <span
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ease-[var(--ease-out-soft)]",
              open ? "rotate-45 bg-lime text-teal-deep" : "bg-cream text-ink",
            )}
            aria-hidden
          >
            <Plus size={18} />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn(
          "grid transition-all duration-300 ease-[var(--ease-out-soft)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <p className="px-6 pb-6 pr-12 text-[1.02rem] leading-relaxed text-ink-soft md:px-7">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const t = useT().faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold tracking-eyebrow text-ink-soft uppercase">
              {t.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-soft">{t.intro}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-col gap-3">
              {t.items.map((f, i) => (
                <Item
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
