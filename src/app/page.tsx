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
import { Insights } from "@/components/sections/Insights";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/lib/json-ld";
import {
  faqSchema,
  webPageSchema,
  howToSchema,
  breadcrumbSchema,
  articleSchema,
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
      <JsonLd
        data={articleSchema({
          url: `${BUSINESS.url}/#insights`,
          headline: content.en.insights.heading,
          description: content.en.insights.intro,
          datePublished: "2025-08-01",
          dateModified: LAST_REVIEWED,
          speakable: ["#insights h2", "#insights h4"],
        })}
      />
      <JsonLd data={faqSchema([...content.en.faq.items, ...content.en.insights.qa])} />
      {/* WebPage: freshness (dateModified) + Speakable for voice/AI answers */}
      <JsonLd
        data={webPageSchema({
          url: BUSINESS.url,
          name: "Agamana Projects | Land Development & Project Partner in Karnataka",
          speakable: ["#top h1", "#faq"],
        })}
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
        <Insights />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
