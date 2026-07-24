"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { content as staticContent, type ContentDict } from "./content";

export type Locale = "en" | "kn";
export const LOCALES: Locale[] = ["en", "kn"];
export const localeLabel: Record<Locale, string> = { en: "EN", kn: "ಕನ್ನಡ" };

const STORAGE_KEY = "agamana-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  content: Record<Locale, ContentDict>;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({
  content = staticContent,
  children,
}: {
  content?: Record<Locale, ContentDict>;
  children: React.ReactNode;
}) {
  // Always render 'en' first so SSR/hydration match; hydrate the stored choice
  // after mount.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      // Intentional: hydrate the persisted language after mount (SSR renders 'en').
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored && LOCALES.includes(stored)) setLocaleState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "kn" ? "kn-IN" : "en-IN";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "kn" : "en";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggle, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLocale must be used within LanguageProvider");
  return ctx;
}

/** Convenience hook: returns the active language's content dictionary. */
export function useT() {
  const { locale, content } = useLocale();
  return content[locale];
}
