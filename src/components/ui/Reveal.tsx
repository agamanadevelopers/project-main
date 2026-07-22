"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel in px. */
  y?: number;
  delay?: number;
  duration?: number;
  /** When true, direct children stagger in rather than the block as a whole. */
  stagger?: boolean;
  as?: React.ElementType;
};

/**
 * Scroll-triggered fade-up. Children carry `.will-reveal` (opacity:0 via CSS)
 * so there is no flash before hydration. Reduced-motion users get the CSS
 * fallback (always visible) and GSAP is skipped via matchMedia.
 *
 * A safety net force-reveals anything still hidden after a short delay, so a
 * fast scroll, a layout shift, or an interrupted tween can never strand
 * content at opacity 0.
 */
export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.7,
  stagger = false,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger
          ? (gsap.utils.toArray<HTMLElement>(el.children) as HTMLElement[])
          : [el];

        gsap.set(targets, { opacity: 0, y });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });

        // Safety net: rescue any target that has already reached the reveal
        // line but is still hidden (e.g. a trigger created already-scrolled-past,
        // or a tween interrupted by a layout shift). Below-fold content stays
        // hidden until scrolled — this never reveals ahead of the viewport.
        const rescue = () => {
          targets.forEach((t) => {
            const past = t.getBoundingClientRect().top < window.innerHeight * 0.9;
            if (past && getComputedStyle(t).opacity === "0") {
              gsap.to(t, { opacity: 1, y: 0, duration: 0.4, overwrite: true });
            }
          });
        };
        const guards = [800, 2500].map((ms) => window.setTimeout(rescue, ms));

        return () => guards.forEach(window.clearTimeout);
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(stagger ? "reveal-stagger" : "will-reveal", className)}>
      {children}
    </Tag>
  );
}
