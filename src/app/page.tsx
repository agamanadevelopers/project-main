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

export default function Home() {
  return (
    <>
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
