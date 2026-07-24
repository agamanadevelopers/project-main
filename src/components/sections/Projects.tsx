"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";
import { images } from "@/lib/images";

export function Projects() {
  const t = useT().projects;
  return (
    <section id="projects" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl">
              {t.heading}
            </h2>
          </div>
          <p className="max-w-sm text-[1.02rem] leading-relaxed text-ink-soft">{t.intro}</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-7">
          {t.items.map((p, i) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-2xl)] bg-teal text-white ring-1 ring-transparent transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-2 hover:shadow-[0_40px_80px_-42px_rgba(4,48,59,0.65)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.image ?? images.projects[i].src}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-lime px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-deep">
                  {p.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight md:text-[1.8rem]">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">{p.place}</p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-lime group-hover:text-teal-deep group-hover:ring-lime">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                  <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-white/75">{p.blurb}</p>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
