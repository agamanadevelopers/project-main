"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Journey() {
  const root = useRef<HTMLElement>(null);
  const railFill = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const t = useT().journey;
  const journeySteps = t.steps;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const steps = gsap.utils.toArray<HTMLElement>(".journey-step");

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (railFill.current) {
          gsap.fromTo(
            railFill.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".journey-list",
                start: "top 55%",
                end: "bottom 65%",
                scrub: true,
              },
            },
          );
        }
        steps.forEach((step, i) => {
          gsap.from(step, {
            opacity: 0,
            x: 24,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 82%", once: true },
          });
          ScrollTrigger.create({
            trigger: step,
            start: "top 60%",
            end: "bottom 60%",
            onToggle: (self) => self.isActive && setActive(i),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const activeStep = journeySteps[active];

  return (
    <section
      ref={root}
      id="journey"
      className="relative bg-teal text-white"
      aria-labelledby="journey-heading"
    >
      <Container className="grid gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        {/* Sticky panel */}
        <div className="md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:py-24">
          <span className="text-sm font-semibold tracking-eyebrow text-lime uppercase">
            {t.eyebrow}
          </span>
          <h2
            id="journey-heading"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.0] tracking-[-0.04em] sm:text-6xl"
          >
            {t.caption}
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/65">{t.intro}</p>

          <div className="mt-10 hidden items-baseline gap-4 md:flex">
            <span className="font-display text-6xl font-extrabold leading-none text-lime">
              {activeStep.n}
            </span>
            <div>
              <p className="font-display text-2xl font-bold tracking-tight">{activeStep.label}</p>
              <p className="mt-1 text-sm text-white/60">{activeStep.note}</p>
            </div>
          </div>
          <div className="mt-8 hidden gap-1.5 md:flex" aria-hidden>
            {journeySteps.map((s, i) => (
              <span
                key={s.n}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors duration-300",
                  i <= active ? "bg-lime" : "bg-white/15",
                )}
              />
            ))}
          </div>
        </div>

        {/* Steps list with vertical rail */}
        <ol className="journey-list relative pl-8 md:pl-10">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15 md:left-[11px]"
          />
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top md:left-[11px]"
          >
            <span ref={railFill} className="block h-full w-full origin-top bg-lime" />
          </span>

          {journeySteps.map((step, i) => (
            <li
              key={step.n}
              className={cn(
                "journey-step relative py-6 transition-opacity duration-300 md:py-8",
                i <= active ? "opacity-100" : "opacity-55",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute -left-8 top-8 grid h-4 w-4 -translate-x-[7px] place-items-center rounded-full ring-4 ring-teal transition-colors duration-300 md:-left-10 md:-translate-x-[3px]",
                  i <= active ? "bg-lime" : "bg-white/25",
                )}
              />
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-bold text-lime/80">{step.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-[2rem]">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-[0.98rem] text-white/60">{step.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
