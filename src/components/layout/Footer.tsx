"use client";

import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CraftedBadge } from "@/components/ui/CraftedBadge";
import { Logo } from "@/components/ui/Logo";
import { navItems, legalLinks, site } from "@/lib/site";
import { useT } from "@/lib/i18n";

const year = new Date().getFullYear();
const WORDMARK = "AGAMANA".split("");

export function Footer() {
  const t = useT();
  return (
    <footer className="overflow-hidden bg-teal-deep text-white">
      <Container className="pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1.2fr]">
          <div className="max-w-sm">
            <Logo variant="light" className="h-10" />
            <p className="mt-6 text-[0.98rem] leading-relaxed text-white/65">{t.footer.tagline}</p>
            <p className="mt-4 text-sm text-white/45">{t.footer.serving}</p>
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
            </ul>
          </nav>

          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.visitUs}</h3>
              <address className="mt-4 flex gap-3 not-italic">
                <MapPin size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <span className="text-[0.98rem] leading-relaxed text-white/80">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </span>
              </address>
            </div>

            {/* Phones */}
            <div>
              <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.callUs}</h3>
              <div className="mt-4 flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <div className="flex flex-col gap-1.5">
                  {site.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${site.phoneLinks[i]}`}
                      className="text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                    >
                      {p}
                    </a>
                  ))}
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 text-[0.98rem] text-white/80 transition-colors hover:text-lime"
                  >
                    {site.email}
                  </a>
                </div>
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
