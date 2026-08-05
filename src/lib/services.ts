// lib/services.ts
// Single source of truth for every service page.
// Content is grounded on the services listed on the live agamanaprojects.com homepage.

export interface Service {
  slug: string;
  name: string;               // Display name
  title: string;              // <title>
  metaDescription: string;
  h1: string;
  intro: string;
  includes: string[];         // the bullet list from the homepage cards
  forWhom: string;            // one line: who this service is for
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "layout-planning",
    name: "Layout Planning",
    title: "Residential Layout Planning in Karnataka | Agamana Projects",
    metaDescription:
      "Layout development planning for residential plots and farmland projects in Karnataka. Site analysis, plot planning, road network and infrastructure. Agamana Projects.",
    h1: "Layout Development Planning for Residential & Farmland Projects",
    intro:
      "A layout that sells starts with a plan that works. We plan every aspect of your residential or farmland layout before a single road is cut, so plots are usable, infrastructure is sensible, and the project is ready to approve and launch. Our layout development planning covers land subdivision, master planning and plotted layout design for projects ranging from 5 to 50 acres across Tier 2 and Tier 3 towns in Karnataka.",
    includes: [
      "Site Analysis",
      "Layout Design",
      "Plot Planning",
      "Road Network",
      "Amenity Planning",
      "Infrastructure Planning",
    ],
    forWhom: "For land owners turning raw land into a residential or farmland layout.",
    faqs: [
      {
        q: "What does layout planning include?",
        a: "Site analysis, layout and plot design, road network planning, amenity planning and infrastructure planning. Everything needed before execution begins.",
      },
      {
        q: "Do you plan farmland layouts as well as residential?",
        a: "Yes. We plan both residential layouts and farmland plot projects, tailoring the layout to the land and the buyer it's meant for.",
      },
      {
        q: "What is land subdivision planning?",
        a: "Land subdivision planning is the process of dividing a larger parcel of land into individual plots with roads, amenities and infrastructure. We handle the full process from survey to final plot layout.",
      },
      {
        q: "Do you offer residential master planning?",
        a: "Yes. Our master planning covers the complete layout: plot sizes, road network, open spaces, drainage, electricity and water connections. Every aspect is planned before execution begins.",
      },
    ],
  },
  {
    slug: "approvals",
    name: "Approvals & Documentation",
    title: "Layout Approvals & Documentation in Karnataka | Agamana Projects",
    metaDescription:
      "Navigate layout approvals, government compliance, technical drawings and project documentation with one partner. Agamana Projects, Karnataka.",
    h1: "Approvals & Documentation",
    intro:
      "Approvals are where projects stall. In Karnataka, layout approval typically involves 8 to 12 different documents and coordination with multiple government departments. We help you navigate government approvals and project documentation so your layout is clean, compliant and on record, with the technical drawings and paperwork handled properly.",
    includes: [
      "Documentation",
      "Government Approvals",
      "Compliance",
      "Layout Approval",
      "Technical Drawings",
    ],
    forWhom: "For land owners and developers who need approvals handled correctly the first time.",
    faqs: [
      {
        q: "Do you handle government approvals for layouts?",
        a: "Yes. We help with layout approvals, compliance, technical drawings and the documentation required to get a project on record.",
      },
    ],
  },
  {
    slug: "branding",
    name: "Project Branding",
    title: "Real Estate Branding for Residential Projects | Agamana Projects",
    metaDescription:
      "Real estate branding for residential layouts and township projects in Karnataka. Logo, brochure, flyers and site hoardings. Agamana Projects.",
    h1: "Real Estate Branding for Residential & Township Projects",
    intro:
      "Buyers trust projects that look established. We build a memorable identity for your residential layout or township project (a name, a look and the materials that carry it) so your project earns attention and confidence from the first hoarding. Professional real estate branding sets your project apart in a crowded market.",
    includes: ["Logo", "Brochure", "Flyers", "Site Hoardings"],
    forWhom: "For developers who want their project to stand out and feel trustworthy.",
    faqs: [
      {
        q: "What branding do you create for a project?",
        a: "A project logo, brochure, flyers and site hoardings. A consistent identity that increases trust and attracts buyers.",
      },
      {
        q: "Do you offer branding for residential layouts and townships?",
        a: "Yes. We create complete brand identities for residential layouts, plotted developments and township projects across Karnataka.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing & Digital Presence",
    title: "Real Estate Marketing & Digital Presence | Agamana Projects",
    metaDescription:
      "Present your project professionally across digital and print: website, social media, campaigns, lead generation, photography and walkthrough videos. Agamana Projects.",
    h1: "Marketing & Digital Presence",
    intro:
      "The right buyers need to find your project, and trust it when they do. We present your layout professionally across digital and print platforms, from a project website to social media, campaigns and walkthrough videos.",
    includes: [
      "Website",
      "Social Media",
      "Digital Campaigns",
      "Lead Generation",
      "Project Photography",
      "Walkthrough Videos",
    ],
    forWhom: "For developers who want a professional presence and a steady flow of genuine leads.",
    faqs: [
      {
        q: "Do you build a website for the project?",
        a: "Yes. Marketing includes a project website, social media, digital campaigns, lead generation, photography and walkthrough videos.",
      },
    ],
  },
  {
    slug: "sales-launch",
    name: "Sales & Launch Support",
    title: "Sales & Project Launch Support in Karnataka | Agamana Projects",
    metaDescription:
      "Launch your project with a clear strategy and professional sales materials: launch strategy, sales collaterals, customer presentations and marketing assets. Agamana Projects.",
    h1: "Sales & Launch Support",
    intro:
      "A launch only works if everything's ready. We support your project launch with a clear strategy and the professional sales materials your team needs to convert interest into bookings.",
    includes: [
      "Launch Strategy",
      "Sales Collaterals",
      "Customer Presentations",
      "Marketing Assets",
    ],
    forWhom: "For developers taking a project to market and its first buyers.",
    faqs: [
      {
        q: "What does launch support include?",
        a: "A launch strategy, sales collaterals, customer presentations and the marketing assets your sales team needs on launch day.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
