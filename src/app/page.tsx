import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AudienceCards } from "@/components/sections/AudienceCards";
import { Journey } from "@/components/sections/Journey";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyAgamana } from "@/components/sections/WhyAgamana";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";

import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/lib/json-ld";
import {
  faqSchema,
  webPageSchema,
  howToSchema,
  breadcrumbSchema,
  siteNavigationSchema,
  BUSINESS,
  LAST_REVIEWED,
} from "@/lib/business";
import { content } from "@/lib/content";

export default function Home() {
  const proc = content.en.process;
  return (
    <>
      {/* FAQPage schema — built from the same data the visible FAQ renders */}
      {/* BreadcrumbList — issue #3 */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BUSINESS.url },
        ])}
      />
      <JsonLd data={faqSchema(content.en.faq.items)} />
      {/* WebPage: freshness (dateModified) + Speakable for voice/AI answers */}
      <JsonLd
        data={webPageSchema({
          url: BUSINESS.url,
          name: "Agamana Projects | Land Development & Project Partner in Karnataka",
          speakable: ["#top h1", "#faq"],
        })}
      />
      {/* SiteNavigationElement — helps Google generate sitelinks for "agamana projects" */}
      <JsonLd
        data={siteNavigationSchema([
          { name: "Services", url: `${BUSINESS.url}/services` },
          { name: "Where We Work", url: `${BUSINESS.url}/locations` },
          { name: "Guides", url: `${BUSINESS.url}/guides` },
          { name: "Our Process", url: `${BUSINESS.url}/#process` },
          { name: "Projects", url: `${BUSINESS.url}/#projects` },
          { name: "FAQ", url: `${BUSINESS.url}/#faq` },
        ])}
      />
      {/* HowTo — the real "how we work" process, marked up step-by-step */}
      <JsonLd
        data={howToSchema({
          name: proc.heading,
          description: proc.body,
          url: `${BUSINESS.url}/#process`,
          steps: proc.steps.map((s) => ({ name: s.title, text: s.body })),
        })}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AudienceCards />
        <Journey />
        <Services />
        <Projects />
        <WhyAgamana />
        <Process />

        {/* GEO: Key Takeaways + stats + comparison for AI extraction */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <aside aria-label="Key takeaways" className="rounded-[var(--radius-card)] border border-lime-deep/20 bg-lime-deep/5 p-6">
            <h2 className="font-display text-lg font-bold text-ink">Key Takeaways</h2>
            <ul className="mt-3 space-y-2">
              {[
                "Agamana Projects is a land development partner for land owners and developers across Karnataka.",
                "We cover 8 stages: land assessment, layout planning, approvals, infrastructure, branding, marketing, launch support and buyer handover.",
                `We serve ${BUSINESS.areaServed.length} regions including Sagara, Shivamogga, Sirsi, Tumkur, Chitradurga, Hubli and Haveri.`,
                "One team handles your entire project. No brokers, no middlemen.",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "8", label: "Stages of project support" },
              { value: "5", label: "Core services" },
              { value: String(BUSINESS.areaServed.length), label: "Regions served" },
              { value: "1", label: "Point of contact throughout" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[var(--radius-card)] border border-line bg-card p-5 text-center">
                <p className="font-display text-3xl font-bold text-teal">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto">
            <h2 className="font-display text-xl font-bold text-ink">Land Owners vs Developers</h2>
            <p className="mt-2 text-sm text-ink-soft">How Agamana helps each type of client differently.</p>
            <table className="mt-4 w-full text-left text-[0.95rem]">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-semibold text-ink">Aspect</th>
                  <th className="py-3 pr-4 font-semibold text-ink">Land Owner</th>
                  <th className="py-3 font-semibold text-ink">Developer</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-line/50">
                  <td className="py-3 pr-4 font-medium text-ink">Goal</td>
                  <td className="py-3 pr-4">Monetise idle or ancestral land</td>
                  <td className="py-3">Launch a plotted project for buyers</td>
                </tr>
                <tr className="border-b border-line/50">
                  <td className="py-3 pr-4 font-medium text-ink">Knowledge</td>
                  <td className="py-3 pr-4">Often navigating approvals for the first time</td>
                  <td className="py-3">Familiar but wants it handled</td>
                </tr>
                <tr className="border-b border-line/50">
                  <td className="py-3 pr-4 font-medium text-ink">Branding need</td>
                  <td className="py-3 pr-4">Rarely considered</td>
                  <td className="py-3">Integral from day one</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-ink">How we help</td>
                  <td className="py-3 pr-4">Full journey: plan, approve, brand, sell</td>
                  <td className="py-3">Fills specific gaps with dedicated expertise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
