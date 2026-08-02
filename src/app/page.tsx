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
import { faqSchema } from "@/lib/business";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* FAQPage schema — built from the same data the visible FAQ renders */}
      <JsonLd data={faqSchema(content.en.faq.items)} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AudienceCards />
        <Journey />
        <Services />
        <Projects />
        <WhyAgamana />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
