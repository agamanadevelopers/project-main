import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * "Crafted with ♥ by Navodita" pill — styled like the reference badge, adapted
 * for the dark footer. The whole pill links to navodita.com.
 */
export function CraftedBadge({ className }: { className?: string }) {
  return (
    <a
      href="https://navodita.com"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] px-5 py-2.5 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.08] hover:ring-white/20",
        className,
      )}
    >
      <span className="text-[0.72rem] font-semibold uppercase tracking-eyebrow text-white/45">
        Crafted with
      </span>
      <Heart
        size={13}
        className="fill-[#ef5350] text-[#ef5350] transition-transform duration-300 ease-[var(--ease-spring)] group-hover:scale-125"
        aria-hidden
      />
      <span className="text-[0.72rem] font-semibold uppercase tracking-eyebrow text-white/45">
        by
      </span>
      <span className="font-display text-sm font-bold text-white transition-colors duration-300 group-hover:text-lime">
        Navodita
      </span>
    </a>
  );
}
