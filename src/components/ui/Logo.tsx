import Image from "next/image";
import { cn } from "@/lib/utils";

const SRC = {
  dark: "/agamana-logo-color.webp", // teal + lime wordmark — for LIGHT surfaces (navbar, legal header)
  light: "/agamana-logo-white.webp", // white wordmark — for DARK surfaces (footer)
} as const;

/**
 * Agamana Projects wordmark. Pass `variant="light"` on dark backgrounds.
 * Control the size with a height class (e.g. `className="h-8"`); width is auto.
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
  return (
    <Image
      src={SRC[variant]}
      alt="Agamana Projects"
      width={2442}
      height={700}
      priority={priority}
      sizes="180px"
      className={cn("w-auto", className)}
    />
  );
}
