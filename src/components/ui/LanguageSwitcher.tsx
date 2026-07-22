"use client";

import { useLocale, LOCALES, localeLabel } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Compact EN / ಕನ್ನಡ segmented toggle. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-cream p-1 ring-1 ring-line",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-200",
              active ? "bg-teal text-paper" : "text-ink-soft hover:text-ink",
            )}
          >
            {localeLabel[l]}
          </button>
        );
      })}
    </div>
  );
}
