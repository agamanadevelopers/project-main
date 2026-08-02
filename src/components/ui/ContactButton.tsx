"use client";

import { buttonClasses, ArrowCircle, type Variant, type Size } from "@/components/ui/Button";
import { useContact } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
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
  const handleClick = () => {
    trackEvent("cta_click", {
      cta_text: typeof children === "string" ? children : "Contact",
    });
    openContact();
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={cn(buttonClasses(variant, size, className))}
    >
      {children}
      {withArrow ? <ArrowCircle /> : null}
    </button>
  );
}
