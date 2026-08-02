// lib/locations.ts
// Single source of truth for every location page.
// Add a new city = add one object here. Pages render from this data.
//
// NOTE: Fields marked  // VERIFY  contain reasonable defaults or inferred
// facts. Confirm them against reality before you deploy — wrong facts in
// location content hurt trust and can mislead buyers.

export interface LocationProject {
  name: string;
  type: string;        // e.g. "Farmland Plots"
  blurb: string;
  href: string;
}

export interface Location {
  slug: string;                 // URL segment: /locations/<slug>
  city: string;                 // Display name
  district: string;
  region: string;               // e.g. "Central Karnataka"
  // SEO
  title: string;                // <title> — under ~60 chars
  metaDescription: string;      // under ~155 chars
  // On-page
  h1: string;
  intro: string;                // 2–3 sentences, opens the page
  whyHere: string[];            // bullet reasons Agamana works well in this area
  projects: LocationProject[];  // real projects in / near this location
  nearbyAreas: string[];        // taluks / towns you also serve from here
  faqs: { q: string; a: string }[];
}

export const locations: Location[] = [
  {
    slug: "sagara",
    city: "Sagara",
    district: "Shivamogga",
    region: "Central Karnataka",
    title: "Land Development & Farmland Plots in Sagara | Agamana Projects",
    metaDescription:
      "Agamana Projects plans, develops and launches residential layouts and farmland plots in Sagara, Karnataka. One partner from land to launch.",
    h1: "Land Development & Farmland Projects in Sagara",
    intro:
      "Sagara is home base for Agamana Projects. From our office on B.H. Road we help land owners across the taluk turn raw land into well-planned residential layouts and farmland plots — handling planning, approvals, infrastructure, branding and launch with one team.",
    whyHere: [
      "Local knowledge of Sagara taluk land, from Lingadahalli to Ulavi, and the approval process that applies here.",
      "On-the-ground presence — our office is on B.H. Road, opposite the court, near the old private bus stand.",
      "A track record of farmland projects launched in and around Sagara.",
      "One point of contact through every stage, from first site visit to buyer handover.",
    ],
    projects: [
      {
        name: "Tapovana",
        type: "Farmland Plots",
        blurb:
          "Premium gated farmland for investment, nature and weekend living, in Lingadahalli, Sagara.",
        href: "/#projects",
      },
      {
        name: "Tribhuvana",
        type: "Farm Plots",
        blurb: "Private one-acre farmland estates in the heart of Ulavi, Sagara.",
        href: "/#projects",
      },
      {
        name: "Nandanavana",
        type: "Farm Plots",
        blurb:
          "Well-planned farmplots surrounded by nature, greenery and tranquility.",
        href: "/#projects",
      },
    ],
    nearbyAreas: ["Lingadahalli", "Ulavi", "Talaguppa", "Anandapuram", "Jog"], // confirmed
    faqs: [
      {
        q: "Do you develop farmland plots in Sagara?",
        a: "Yes. Sagara is our home base and most of our farmland projects — including Tapovana, Tribhuvana and Nandanavana — are in and around Sagara taluk.",
      },
      {
        q: "I own land near Sagara. How do we start?",
        a: "Tell us about your land — location, extent and your goals. We'll visit the site, prepare a clear development plan, and walk you through planning, approvals and launch.",
      },
      {
        q: "Where is your office in Sagara?",
        a: "No.57, Wodeyar Building, 1st Floor, near the Old Private Bus Stand, opposite the court, on B.H. Road, Sagara – 577401.",
      },
    ],
  },
  {
    slug: "shivamogga",
    city: "Shivamogga",
    district: "Shivamogga",
    region: "Central Karnataka",
    title: "Land Development & Residential Layouts in Shivamogga | Agamana",
    metaDescription:
      "Agamana Projects helps land owners in Shivamogga plan, develop, brand and launch residential layouts and plotted projects. One partner for every stage.",
    h1: "Residential Layout & Land Development in Shivamogga",
    intro:
      "Shivamogga is a growing market for planned residential layouts and plotted development. Agamana Projects partners with land owners across the district to plan layouts, secure approvals, build real on-site infrastructure, and launch projects buyers trust.",
    whyHere: [
      "District-level experience across Shivamogga, close to our Sagara base.",
      "End-to-end delivery — layout design, approvals, roads and infrastructure, branding and marketing under one roof.",
      "Focus on Tier 2 and Tier 3 towns where well-planned land stands out.",
      "A partner model, not a broker — we stay with your project from land to launch.",
    ],
    projects: [], // VERIFY — add real Shivamogga-district projects when available
    nearbyAreas: ["Bhadravati", "Thirthahalli", "Shikaripura", "Soraba", "Hosanagara"], // confirmed
    faqs: [
      {
        q: "Do you work on projects in Shivamogga city and district?",
        a: "Yes. We work across Shivamogga district, including the surrounding taluks, from our base in nearby Sagara.",
      },
      {
        q: "What kinds of projects do you handle in Shivamogga?",
        a: "Residential layouts and plotted developments — from initial layout planning and approvals through to branding, marketing and launch.",
      },
    ],
  },
  {
    slug: "sirsi",
    city: "Sirsi",
    district: "Uttara Kannada",
    region: "Coastal & Malnad Karnataka",
    title: "Land Development in Sirsi & Uttara Kannada | Agamana Projects",
    metaDescription:
      "Agamana Projects plans and launches residential layouts and farmland plots across Sirsi and Uttara Kannada. One partner from land to launch.",
    h1: "Land Development in Sirsi & Uttara Kannada",
    intro:
      "From Sirsi to the Uttara Kannada coast, Agamana Projects helps land owners develop residential layouts and farmland plots in the Malnad and coastal belt. We bring planning, approvals, infrastructure and launch support to a region where good land deserves professional development.",
    whyHere: [
      "Coverage across the Malnad and coastal Uttara Kannada belt, extending from our Central Karnataka base.",
      "Suited to farmland and residential plots in green, high-rainfall terrain.",
      "Complete project support — planning, approvals, infrastructure, branding and launch.",
      "One team, one process, one point of contact throughout.",
    ],
    projects: [], // VERIFY — add real Sirsi / Uttara Kannada projects when available
    nearbyAreas: ["Siddapur", "Yellapur", "Kumta", "Honnavar", "Ankola"], // confirmed
    faqs: [
      {
        q: "Do you develop land in Sirsi and Uttara Kannada?",
        a: "Yes. We work across Sirsi and the wider Uttara Kannada region, including the Malnad taluks and the coastal belt.",
      },
      {
        q: "Is farmland development suitable in this region?",
        a: "The green, high-rainfall terrain of Uttara Kannada suits farmland and plotted residential projects well. We plan each layout to work with the land and location.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
