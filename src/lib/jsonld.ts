import { site } from "./site";

/**
 * Site-wide structured data (JSON-LD): the brand Organization and the WebSite.
 * The local-business entity (RealEstateAgent, `#business`) is emitted separately
 * from `organizationSchema()` in the root layout and is referenced by the
 * service/location pages. The homepage FAQPage is emitted on the homepage only,
 * from the same content the visible FAQ renders.
 */
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
    slogan: site.shortDescription,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}
