// lib/business.ts
// Business constants + reusable JSON-LD builders, used across every page.

export const BUSINESS = {
  name: "Agamana Projects",
  url: "https://agamanaprojects.com",
  logo:
    "https://cdn.sanity.io/images/k3e80j48/production/ab19a69a8db1ec471dcfb1074a6e27c580d22fe5-673x151.svg",
  image:
    "https://cdn.sanity.io/images/k3e80j48/production/36ff89c71ecdb8711f71e171bd9bc6473f04af02-1729x910.jpg",
  phonePrimary: "+917090644644",
  phoneSecondary: "+917090226226",
  email: "hello@agamanaprojects.com",
  address: {
    streetAddress:
      "No.57, Wodeyar Building, 1st Floor, Near Old Private Bus Stand, Opp Court, B.H. Road",
    addressLocality: "Sagara",
    addressRegion: "Karnataka",
    postalCode: "577401",
    addressCountry: "IN",
  },
  // Exact office pin (confirmed from Google Maps)
  geo: { latitude: 14.1668472200862, longitude: 75.02253337653568 },
  // Confirmed opening hours
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:30",
  },
  areaServed: [
    "Sagara",
    "Shivamogga",
    "Sirsi",
    "Uttara Kannada",
    "Tumakuru",
    "Chitradurga",
    "Karnataka",
  ],
  // Social profiles (used for schema sameAs)
  sameAs: ["https://www.instagram.com/agamana.projects"] as string[],
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.phonePrimary,
    email: BUSINESS.email,
    priceRange: "\u20B9\u20B9",
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.openingHours.days,
      opens: BUSINESS.openingHours.opens,
      closes: BUSINESS.openingHours.closes,
    },
    ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${BUSINESS.url}/#business` },
    areaServed: { "@type": "State", name: "Karnataka" },
    serviceType: "Real estate development",
  };
}
