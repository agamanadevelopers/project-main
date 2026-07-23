"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactButton } from "@/components/ui/ContactButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";
import { navItems, site } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function BrandLink() {
  return (
    <a href="#top" className="flex items-center" aria-label={`${site.name} — home`}>
      <Logo variant="dark" priority className="h-8 sm:h-9" />
    </a>
  );
}

export function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section in view.
  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-lime transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
      <Container>
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-4 rounded-full pl-5 pr-3 transition-all duration-300 ease-[var(--ease-out-soft)]",
            scrolled
              ? "bg-card/90 shadow-[0_10px_30px_-16px_rgba(4,48,59,0.45)] ring-1 ring-line/70 backdrop-blur-md"
              : "bg-card/80 ring-1 ring-line/50 backdrop-blur-sm",
          )}
        >
          <BrandLink />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative text-[0.95rem] font-medium transition-colors hover:text-ink",
                    isActive ? "nav-active text-ink" : "text-ink-soft",
                  )}
                >
                  {t.nav[item.key]}
                  <span aria-hidden className="nav-dot" />
                </a>
              );
            })}
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
