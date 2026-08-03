"use client";

import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CraftedBadge } from "@/components/ui/CraftedBadge";
import { Logo } from "@/components/ui/Logo";
import { navItems, legalLinks, site } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { useSettings } from "@/lib/settings";

const year = new Date().getFullYear();
const WORDMARK = "AGAMANA".split("");

export function Footer() {
  const t = useT();
  const settings = useSettings();
  return (
    <footer className="overflow-hidden bg-teal-deep text-white">
      <Container className="pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1.2fr]">
          <div className="max-w-sm">
            <Logo variant="light" className="h-10" />
            <p className="mt-6 text-[0.98rem] leading-relaxed text-white/65">{t.footer.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.explore}</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  className="text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                >
                  Where We Work
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                >
                  Guides
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.visitUs}</h3>
              <address className="mt-4 flex gap-3 not-italic">
                <MapPin size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <span className="text-[0.98rem] leading-relaxed text-white/80">
                  {settings.address.line1}
                  <br />
                  {settings.address.line2}
                  <br />
                  {settings.address.line3}
                </span>
              </address>
            </div>

            {/* Phones */}
            <div>
              <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.callUs}</h3>
              <div className="mt-4 flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <div className="flex flex-col gap-1.5">
                  {settings.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                    >
                      {p.display}
                    </a>
                  ))}
                  <a
                    href={`mailto:${settings.email}`}
                    className="mt-1 text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                  >
                    {settings.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.followUs}</h3>
              <div className="mt-4 flex gap-4">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-lime hover:text-lime"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-lime hover:text-lime"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Oversized brand wordmark with per-letter hover ripple */}
      <div
        className="group relative mt-14 cursor-default select-none px-4 md:mt-16"
        aria-hidden
      >
        <div className="flex justify-center leading-[0.8]">
          {WORDMARK.map((ch, i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 45}ms` }}
              className="inline-block font-display text-[21vw] font-bold tracking-[-0.02em] text-white/[0.1] transition-[transform,color] duration-500 ease-[var(--ease-spring)] group-hover:-translate-y-[0.08em] group-hover:text-lime motion-reduce:transition-colors motion-reduce:group-hover:translate-y-0"
            >
              {ch}
            </span>
          ))}
        </div>
      </div>

      <Container className="pb-10 pt-8 md:pb-12">
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {site.legalName}. {t.footer.rights}
            </p>
            <nav
              aria-label="Legal"
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {legalLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition-colors hover:text-lime"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Crafted-by badge */}
          <div className="mt-8 flex justify-center">
            <CraftedBadge />
          </div>
        </div>
      </Container>
    </footer>
  );
}
