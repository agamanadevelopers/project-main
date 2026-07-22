"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactButton } from "@/components/ui/ContactButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { navItems, site } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-full bg-lime font-display text-lg leading-none text-teal-deep"
      >
        A
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">Agamana</span>
    </a>
  );
}

export function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-4 rounded-full pl-5 pr-3 transition-all duration-300 ease-[var(--ease-out-soft)]",
            scrolled
              ? "bg-card/90 shadow-[0_10px_30px_-16px_rgba(4,48,59,0.45)] ring-1 ring-line/70 backdrop-blur-md"
              : "bg-card/80 ring-1 ring-line/50 backdrop-blur-sm",
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <ContactButton variant="primary">{t.common.letsTalk}</ContactButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full text-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "mt-2 overflow-hidden rounded-3xl bg-card ring-1 ring-line/70 transition-[max-height,opacity] duration-300 ease-[var(--ease-out-soft)] lg:hidden",
            open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-cream hover:text-ink"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <ContactButton variant="primary" className="mt-2 w-full">
              {t.common.letsTalk}
            </ContactButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
