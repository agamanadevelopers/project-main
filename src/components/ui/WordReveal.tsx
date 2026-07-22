"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  text: string;
  className?: string;
  as?: React.ElementType;
};

/**
 * Farmio-style heading where each word scrubs from muted to full colour as the
 * section scrolls through the viewport. Words start at reduced opacity via CSS
 * (`.word-reveal > span`), so there's no flash and reduced-motion users simply
 * see the finished heading.
 */
export function WordReveal({ text, className, as: Tag = "h2" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(el.querySelectorAll("span > span"));
        gsap.set(items, { opacity: 0.24 });
        gsap.to(items, {
          opacity: 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "bottom 55%",
            scrub: true,
          },
        });
        // Safety: ensure fully revealed once scrolled past.
        const guard = window.setTimeout(() => {
          if (el.getBoundingClientRect().top < 0) gsap.set(items, { opacity: 1 });
        }, 3000);
        return () => window.clearTimeout(guard);
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn("word-reveal font-display", className)}>
      {words.map((w, i) => (
        <span key={i} className="inline-block">
          <span className="inline-block">{w}</span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
