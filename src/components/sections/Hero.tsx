"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { useT } from "@/lib/i18n";
import { images } from "@/lib/images";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const hero = useT().hero;
  const common = useT().common;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-media",
          { scale: 1.12 },
          { scale: 1, duration: 14, ease: "power1.out" },
        );
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.6, delay: 0.15 })
          .from(".hero-line", { yPercent: 120, opacity: 0, duration: 0.9, stagger: 0.12 }, "-=0.2")
          .from(".hero-aside", { y: 22, opacity: 0, duration: 0.7 }, "-=0.5");
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="hero-media absolute inset-0 will-change-transform">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/75 via-teal-deep/35 to-teal-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/70 via-transparent to-transparent" />
      </div>

      <Container className="flex min-h-[100svh] flex-col justify-between pb-12 pt-28 sm:pt-32 md:pb-16">
        <div className="pt-12 md:pt-20">
          <p className="hero-eyebrow text-sm font-medium tracking-eyebrow text-lime uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl overflow-hidden font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.2rem]">
            <span className="hero-line block">{hero.headline}</span>
          </h1>
        </div>

        {/* Supporting text + CTA — left-aligned under the headline */}
        <div className="hero-aside mt-12 flex w-full max-w-xl flex-col gap-6">
          <p className="text-lg leading-relaxed text-white/85">{hero.supporting}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ContactButton variant="primary" size="lg">
              {common.letsTalk}
            </ContactButton>
            <Button
              href="#projects"
              size="lg"
              className="bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm hover:bg-white/20"
            >
              {common.seeProjects}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
