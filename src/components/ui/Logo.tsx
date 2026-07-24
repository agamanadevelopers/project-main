"use client";

import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

/**
 * Agamana Projects wordmark, from the CMS (falls back to the bundled files).
 * `variant="light"` on dark backgrounds. Size with a height class (e.g. `h-9`).
 */
export function Logo({
  variant = "dark",
  className,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const settings = useSettings();
  const src = variant === "dark" ? settings.logoColor : settings.logoWhite;
  return (
    // Plain img so the logo keeps its natural aspect ratio whatever is uploaded.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Agamana Projects"
      className={cn("w-auto", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
