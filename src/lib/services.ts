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
    title: "Layout Planning Company in Karnataka | Agamana Projects",
    metaDescription:
      "Looking for a layout design company or plotting consultant in Karnataka? Agamana Projects offers residential layout planning, land subdivision and site planning for projects across the state.",
    h1: "Layout Planning Company for Residential & Farmland Projects",
    intro:
      "A layout that sells starts with a plan that works. As a layout planning company in Karnataka, we plan every aspect of your residential or farmland layout before a single road is cut, so plots are usable, infrastructure is sensible, and the project is ready to approve and launch. Our layout development planning covers land subdivision, master planning, site planning and plotted layout design for projects ranging from 5 to 50 acres across Tier 2 and Tier 3 towns in Karnataka.",
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
      {
        q: "Are you a layout design company or a plotting consultant?",
        a: "We are both. Agamana Projects is a layout design company and plotting consultant that handles residential plotting services end to end: site planning, layout design, plot planning, approvals and infrastructure across Karnataka.",
      },
      {
        q: "Do you offer project planning for land owners?",
        a: "Yes. If you own land and want to develop it, we handle the complete project layout planning: from initial site analysis to a finished layout ready for approval and construction.",
      },
    ],
  },
  {
    slug: "approvals",
    name: "Approvals & Documentation",
    title: "Layout Approval Consultant in Karnataka | Agamana Projects",
    metaDescription:
      "Looking for a layout approval consultant in Karnataka? Agamana Projects navigates government approvals, compliance, technical drawings and documentation for residential layouts.",
    h1: "Layout Approval Consultant & Documentation Services",
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
      {
        q: "Do you handle layout approval in Shivamogga and Shimoga?",
        a: "Yes. We handle layout approval in Shivamogga (Shimoga) district, including DC conversion, documentation, technical drawings and follow-up with the Town Planning Authority and other departments.",
      },
      {
        q: "Can you help with layout approval in Sagara?",
        a: "Yes. Sagara is our home base. We handle the full layout approval process here: land records verification, DC conversion, layout plan preparation, NOCs and submission to the Sagara planning authority.",
      },
      {
        q: "Do you assist with layout approvals in Sirsi and Uttara Kannada?",
        a: "Yes. We assist land owners in Sirsi and across Uttara Kannada with layout approvals, including DC conversion for agricultural land, documentation and coordination with local planning authorities.",
      },
      {
        q: "What is the layout approval process in Karnataka?",
        a: "The layout approval process in Karnataka involves verifying land records, obtaining DC conversion (if agricultural), preparing a layout plan with a licensed surveyor, securing NOCs from utilities, and submitting the complete file to the Town Planning Authority or DC office. Timelines vary by district. We handle the full process as your layout approval consultant.",
      },
    ],
  },
  {
    slug: "branding",
    name: "Project Branding",
    title: "Project Branding Company for Builders & Developers | Agamana",
    metaDescription:
      "Project branding for builders and developers in Karnataka. Logo design, brochure, project naming, identity design and site hoardings. Agamana Projects.",
    h1: "Project Branding for Builders, Developers & Land Projects",
    intro:
      "Buyers trust projects that look established. We build a memorable identity for your residential layout or township project (a name, a look and the materials that carry it) so your project earns attention and confidence from the first hoarding. Whether you are a builder, a developer or a land owner, professional project branding sets your project apart in a crowded market.",
    includes: ["Logo", "Brochure", "Flyers", "Site Hoardings"],
    forWhom: "For builders and developers who want their project to stand out and feel trustworthy.",
    faqs: [
      {
        q: "What branding do you create for a project?",
        a: "A project logo, brochure, flyers and site hoardings. A consistent project identity that increases trust and attracts buyers.",
      },
      {
        q: "Do you offer branding for builders and developers?",
        a: "Yes. We create complete brand identities for builders, developers and land owners launching residential layouts, plotted developments and township projects across Karnataka.",
      },
      {
        q: "Do you handle project naming and identity design?",
        a: "Yes. Project naming and identity design are part of our branding service. We create the project name, logo, visual identity and all the materials that carry it: brochures, flyers and site hoardings.",
      },
      {
        q: "Can you design a project brochure and logo?",
        a: "Yes. Project logo design and brochure design are core to what we do. Every residential project we brand gets a logo, brochure, flyers and hoardings designed as a single, consistent identity.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing & Digital Presence",
    title: "Project Marketing Partner for Residential Layouts | Agamana",
    metaDescription:
      "Project marketing for residential layouts in Karnataka. Website, social media, digital campaigns, lead generation, photography and walkthrough videos. Agamana Projects.",
    h1: "Project Marketing Partner for Residential Layouts",
    intro:
      "The right buyers need to find your project, and trust it when they do. As a project marketing partner for residential layouts across Karnataka, we present your project professionally across digital and print platforms, from a project website to social media, campaigns and walkthrough videos.",
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
      {
        q: "Can one company handle both layout planning and marketing?",
        a: "Yes. Agamana Projects is one company for layout planning and branding. We handle the full cycle: layout design, approvals, infrastructure, project branding and marketing under one roof.",
      },
      {
        q: "Do you offer branding and marketing together for residential projects?",
        a: "Yes. We combine project branding (logo, brochure, hoardings) with project marketing (website, social media, campaigns, lead generation) so your residential layout launches with a complete, professional presence.",
      },
    ],
  },
  {
    slug: "sales-launch",
    name: "Sales & Launch Support",
    title: "Project Launch Partner for Layouts in Karnataka | Agamana",
    metaDescription:
      "Looking for a project launch partner? Agamana Projects supports residential layout launches with strategy, sales collaterals, presentations and marketing assets.",
    h1: "Project Launch Partner for Residential Layouts",
    intro:
      "A launch only works if everything is ready. As your project launch partner, we support your residential layout launch with a clear strategy and the professional sales materials your team needs to convert interest into bookings.",
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
      {
        q: "What is a project launch partner?",
        a: "A project launch partner handles everything needed to bring your residential layout to market: launch strategy, branding materials, sales collaterals, digital campaigns and buyer presentations. We stay with your project through the first bookings.",
      },
      {
        q: "Can you be our project execution partner?",
        a: "Yes. As a project execution partner, we handle planning, approvals, infrastructure, branding, marketing and launch. One team from land to first sale.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
