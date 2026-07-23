import { cn } from "@/lib/utils";

/**
 * Section eyebrow with a lime marker line — a consistent premium accent used
 * above every section heading. `tone="dark"` for use on dark (teal) sections.
 */
export function Eyebrow({
  children,
  tone = "light",
  align = "left",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex flex-col gap-2.5 text-sm font-semibold uppercase tracking-eyebrow",
        align === "center" ? "items-center" : "items-start",
        tone === "dark" ? "text-lime" : "text-ink-soft",
        className,
      )}
    >
      {/* Marker line sits above the label so the text stays flush-left with the
          heading below it. */}
      <span
        aria-hidden
        className={cn("h-px w-7", tone === "dark" ? "bg-lime" : "bg-lime-deep")}
      />
      {children}
    </span>
  );
}
