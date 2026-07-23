import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small circular arrow badge that sits inside a pill button (Farmio style). */
export function ArrowCircle({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-7 w-7 place-items-center rounded-full bg-teal-deep/10 text-current transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:rotate-45",
        className,
      )}
    >
      <ArrowUpRight size={16} strokeWidth={2.4} />
    </span>
  );
}

export type Variant = "primary" | "dark" | "ghost" | "white";
export type Size = "md" | "lg";

const base =
  "group relative overflow-hidden isolate inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 cursor-pointer";

const variants: Record<Variant, string> = {
  // Lime pill, dark text — the signature Farmio CTA
  primary:
    "btn-shine bg-lime text-teal-deep hover:bg-lime-deep hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(231,243,82,0.7)] active:translate-y-0",
  dark: "btn-shine bg-teal text-paper hover:bg-teal-deep hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-16px_rgba(4,48,59,0.6)]",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/20 hover:bg-ink hover:text-paper hover:-translate-y-0.5",
  white:
    "btn-shine bg-card text-ink ring-1 ring-inset ring-line hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-18px_rgba(4,48,59,0.4)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 pl-6 pr-5 text-[0.95rem]",
  lg: "h-14 pl-8 pr-6 text-base",
};

/** Shared class builder so links and <button> triggers look identical. */
export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: Props) {
  const cls = buttonClasses(variant, size, className);
  const isInternalHash = href.startsWith("#");
  if (isInternalHash || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
