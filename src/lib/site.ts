/**
 * Central site configuration.
 * Future-ready data layer — swap these values (or wire a CMS) without
 * touching component code.
 */
export const site = {
  name: "Agamana Projects",
  legalName: "Agamana Projects",
  shortDescription:
    "A trusted project partner for land owners and developers in Karnataka.",
  description:
    "Agamana Projects helps land owners and regional developers plan, build, brand, market and launch residential projects. One partner for every step.",
  // Production domain. Update this if you attach a custom domain later.
  url: "https://agamanaprojects.vercel.app",
  locale: "en_IN",
  email: "hello@agamanaprojects.com",
  phones: ["7090 644 644", "7090 226 226"],
  // tel: links (E.164-ish, India)
  phoneLinks: ["+917090644644", "+917090226226"],
  address: {
    line1: "No.57, Wodeyar Building, 1st Floor",
    line2: "Near Old Private Bus Stand, Opp Court",
    line3: "B.H. Road, Sagara – 577401",
    locality: "Sagara",
    region: "Karnataka",
    postalCode: "577401",
    country: "IN",
  },
  region: "Karnataka, India",
  areaServed: "Karnataka",
  ogImage: "/opengraph-image",
  social: {
    instagram: "https://instagram.com/agamanaprojects",
    linkedin: "https://linkedin.com/company/agamanaprojects",
    youtube: "https://youtube.com/@agamanaprojects",
  },
} as const;

export const navItems = [
  { key: "journey", href: "#journey" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "why", href: "#why" },
  { key: "process", href: "#process" },
  { key: "faq", href: "#faq" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
