"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ui/ContactButton";
import { useT } from "@/lib/i18n";
import { images } from "@/lib/images";

export function CTA() {
  const t = useT().cta;
  const common = useT().common;
  return (
    <section id="cta" className="bg-paper pb-24 pt-4 md:pb-28">
      <Container>
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[var(--radius-2xl)] bg-teal px-8 py-16 text-center text-white md:px-16 md:py-24">
            <div aria-hidden className="absolute inset-0 -z-10 opacity-20">
              <Image src={images.statement.src} alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-b from-teal via-teal/90 to-teal-deep"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-lime/10 blur-[110px]"
            />

            <div className="flex justify-center">
              <Eyebrow tone="dark" align="center">{t.eyebrow}</Eyebrow>
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.0] tracking-[-0.02em] sm:text-6xl">
              {t.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">{t.body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ContactButton variant="primary" size="lg">
                {common.letsTalk}
              </ContactButton>
              <Button
                href="#projects"
                size="lg"
                className="bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/20"
              >
                {common.seeProjects}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
