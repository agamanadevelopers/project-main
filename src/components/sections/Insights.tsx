"use client";

import { ExternalLink, Lightbulb, BarChart3, GitCompareArrows, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export function Insights() {
  const t = useT().insights;

  return (
    <section id="insights" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.75rem]">
            {t.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.intro}</p>
        </Reveal>

        {/* Key Takeaways — issue #8 */}
        <Reveal className="mt-12">
          <div className="rounded-[var(--radius-card)] border border-lime/30 bg-lime/5 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Lightbulb size={20} className="text-teal" aria-hidden />
              <h3 className="font-display text-lg font-bold text-ink">Key Takeaways</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {t.takeaways.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Direct-answer Q&A — issue #5 */}
        <Reveal className="mt-12">
          <div className="flex items-center gap-3">
            <BookOpen size={20} className="text-teal" aria-hidden />
            <h3 className="font-display text-xl font-bold text-ink">Common Questions</h3>
          </div>
          <div className="mt-6 space-y-8">
            {t.qa.map((item, i) => (
              <div key={i}>
                <h4 className="font-display text-lg font-bold text-ink">{item.q}</h4>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Comparison table — issues #2 and #11 */}
        <Reveal className="mt-14">
          <div className="flex items-center gap-3">
            <GitCompareArrows size={20} className="text-teal" aria-hidden />
            <h3 className="font-display text-xl font-bold text-ink">{t.comparison.heading}</h3>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-[0.95rem]">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="pb-3 pr-4 font-display font-bold text-ink" />
                  <th className="pb-3 pr-4 font-display font-bold text-teal">
                    {t.comparison.columns[0]}
                  </th>
                  <th className="pb-3 font-display font-bold text-ink-soft">
                    {t.comparison.columns[1]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5">
                    <td className="py-3.5 pr-4 font-medium text-ink">{row.aspect}</td>
                    <td className="py-3.5 pr-4 text-ink-soft">{row.withPartner}</td>
                    <td className="py-3.5 text-ink-soft">{row.without}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Statistics — issue #7 */}
        <Reveal stagger className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label} className="rounded-[var(--radius-card)] bg-cream p-5">
              <BarChart3 size={16} className="text-teal" aria-hidden />
              <span className="mt-3 block font-display text-3xl font-bold tracking-tight text-teal">
                {s.value}
              </span>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
              {s.source && (
                <p className="mt-0.5 text-xs text-ink-faint">{s.source}</p>
              )}
            </div>
          ))}
        </Reveal>

        {/* Methodology — issue #9 */}
        <Reveal className="mt-14">
          <h3 className="font-display text-lg font-bold text-ink">Our Assessment Methodology</h3>
          <p className="mt-3 max-w-3xl text-[0.97rem] leading-relaxed text-ink-soft">
            {t.methodology}
          </p>
        </Reveal>

        {/* Authoritative sources — issue #10 */}
        <Reveal className="mt-10">
          <h3 className="font-display text-lg font-bold text-ink">Authoritative Sources</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {t.sources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream px-4 py-2 text-sm text-ink-soft transition-colors hover:border-teal hover:text-teal"
              >
                <ExternalLink size={14} aria-hidden />
                {src.label}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
