"use client";

import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/lib/site";
import { useT } from "@/lib/i18n";

const year = new Date().getFullYear();

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-teal-deep text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1.2fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-full bg-lime font-display text-lg leading-none text-teal-deep"
              >
                A
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight">
                Agamana Projects
              </span>
            </div>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-white/65">{t.footer.tagline}</p>
            <p className="mt-4 text-sm text-white/45">{t.footer.serving}</p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs uppercase tracking-eyebrow text-white/45">{t.footer.explore}</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
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

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. {t.footer.rights}
            </p>
            <p>{t.footer.disclaimer}</p>
          </div>
          <p className="mt-4 text-sm text-white/45">
            Developed by{" "}
            <a
              href="https://navodita.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/75 underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-lime"
            >
              Navodita
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
