"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, ArrowCircle } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useT } from "@/lib/i18n";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

// Background image per slide (structure; text comes from content).
const backgrounds = [images.hero, images.statement, images.why];

// Per-slide button targets — "contact" opens the popup, otherwise a section link.
const actions = [
  { primary: "contact", secondary: "#journey" },
  { primary: "contact", secondary: "#projects" },
  { primary: "#services", secondary: "contact" },
] as const;

const GLASS =
  "bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm hover:bg-white/20";
const AUTOPLAY = 6500;

export function Hero() {
  const slides = useT().hero.slides;
  const count = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => setActive((a) => (a + dir + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % count), AUTOPLAY);
    return () => window.clearInterval(id);
  }, [paused, count, active]);

  const slide = slides[active];
  const act = actions[active];

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Intro"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cross-fading background layers */}
      <div className="grain absolute inset-0 -z-10">
        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden
            className={cn(
              "absolute inset-0 transition-opacity duration-[1200ms] ease-[var(--ease-out-soft)]",
              i === active ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={s.image ?? backgrounds[i]?.src ?? images.hero.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/80 via-teal-deep/35 to-teal-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/75 via-transparent to-transparent" />
        <div
          aria-hidden
          className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-lime/10 blur-[120px]"
        />
      </div>

      {/* Slide content (re-mounts per slide so the entrance replays) */}
      <Container className="flex min-h-[100svh] flex-col justify-center pb-36 pt-28 sm:pt-32">
        <div
          key={active}
          className="hero-in max-w-3xl"
          aria-live="polite"
          aria-roledescription="slide"
        >
          <div>
            <Eyebrow tone="dark">{slide.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-7 whitespace-pre-line font-display text-[2.3rem] font-bold leading-[1.03] tracking-[-0.02em] text-white sm:text-5xl lg:text-[4.1rem] lg:leading-[1.02]">
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{slide.supporting}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {act.primary === "contact" ? (
              <ContactButton variant="primary" size="lg">
                {slide.primary}
              </ContactButton>
            ) : (
              <Button href={act.primary} variant="primary" size="lg">
                {slide.primary}
                <ArrowCircle />
              </Button>
            )}
            {act.secondary === "contact" ? (
              <ContactButton size="lg" withArrow={false} className={GLASS}>
                {slide.secondary}
              </ContactButton>
            ) : (
              <Button href={act.secondary} size="lg" className={GLASS}>
                {slide.secondary}
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* Controls — fixed at the bottom so slides stay aligned regardless of copy length */}
      <div className="absolute inset-x-0 bottom-8 z-10 md:bottom-10">
        <Container className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                onClick={() => setActive(i)}
                aria-selected={i === active}
                aria-label={s.eyebrow}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 ease-[var(--ease-out-expo)]",
                  i === active ? "w-8 bg-lime" : "w-2 bg-white/30 hover:bg-white/55",
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-full text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 hover:-translate-x-0.5 hover:bg-white/10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-full text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 hover:translate-x-0.5 hover:bg-white/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
