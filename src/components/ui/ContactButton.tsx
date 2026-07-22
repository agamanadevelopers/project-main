"use client";

import { buttonClasses, ArrowCircle, type Variant, type Size } from "@/components/ui/Button";
import { useContact } from "@/lib/contact";
import { cn } from "@/lib/utils";

/** Pill button that opens the contact popup. Matches <Button> styling. */
export function ContactButton({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = true,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  "aria-label"?: string;
}) {
  const { openContact } = useContact();
  return (
    <button
      type="button"
      onClick={openContact}
      aria-label={ariaLabel}
      className={cn(buttonClasses(variant, size, className))}
    >
      {children}
      {withArrow ? <ArrowCircle /> : null}
    </button>
  );
}
