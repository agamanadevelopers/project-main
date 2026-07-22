import { site } from "./site";
import { content } from "./content";

// JSON-LD is emitted in English (the site's primary language).
const faqs = content.en.faq.items;

/** Structured data (JSON-LD) for rich results and local SEO. */
export function buildJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    url: site.url,
    email: site.email,
    description: site.description,
    areaServed: site.areaServed,
    sameAs: [site.social.instagram, site.social.linkedin, site.social.youtube],
    slogan: "You focus on your project. We'll help you with everything around it.",
  };

  const localBusiness = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneLinks,
    description: site.shortDescription,
    areaServed: { "@type": "State", name: "Karnataka" },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, faqPage],
  };
}
