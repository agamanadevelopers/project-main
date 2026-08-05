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
      "Sagara is home base for Agamana Projects. From our office on B.H. Road we help land owners across the taluk turn raw land into well-planned residential layouts and farmland plots, handling planning, approvals, infrastructure, branding and launch with one team.",
    whyHere: [
      "Local knowledge of Sagara taluk land, from Lingadahalli to Ulavi, and the approval process that applies here.",
      "On-the-ground presence: our office is on B.H. Road, opposite the court, near the old private bus stand.",
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
        a: "Yes. Sagara is our home base and most of our farmland projects (including Tapovana, Tribhuvana and Nandanavana) are in and around Sagara taluk.",
      },
      {
        q: "I own land near Sagara. How do we start?",
        a: "Tell us about your land: location, extent and your goals. We'll visit the site, prepare a clear development plan, and walk you through planning, approvals and launch.",
      },
      {
        q: "Where is your office in Sagara?",
        a: "No.57, Wodeyar Building, 1st Floor, near the Old Private Bus Stand, opposite the court, on B.H. Road, Sagara – 577401.",
      },
      {
        q: "Do you handle township planning in Sagara?",
        a: "Yes. We help land owners plan and develop township-scale residential layouts in and around Sagara, covering layout design, government approvals, infrastructure and project launch.",
      },
    ],
  },
  {
    slug: "shivamogga",
    city: "Shivamogga",
    district: "Shivamogga",
    region: "Central Karnataka",
    title: "Layout Planning & Land Development in Shivamogga (Shimoga) | Agamana",
    metaDescription:
      "Agamana Projects helps land owners in Shivamogga (Shimoga) plan, develop and launch residential layouts and township projects. One partner for every stage.",
    h1: "Layout Planning & Land Development in Shivamogga (Shimoga)",
    intro:
      "Shivamogga (also known as Shimoga) is a growing market for planned residential layouts, plotted development and township planning. Agamana Projects partners with land owners across the district to plan layouts, secure approvals, build real on-site infrastructure, and launch projects buyers trust.",
    whyHere: [
      "District-level experience across Shivamogga, close to our Sagara base.",
      "End-to-end delivery: layout design, approvals, roads and infrastructure, branding and marketing under one roof.",
      "Focus on Tier 2 and Tier 3 towns where well-planned land stands out.",
      "A partner model, not a broker. We stay with your project from land to launch.",
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
        a: "Residential layouts, plotted developments and township planning projects. We cover layout planning, approvals, infrastructure, branding, marketing and launch.",
      },
      {
        q: "Do you handle township planning in Shimoga?",
        a: "Yes. We help land owners plan township-scale residential layouts in Shivamogga district, covering layout design, approvals, infrastructure and project launch.",
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
      "Complete project support: planning, approvals, infrastructure, branding and launch.",
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
      {
        q: "How do I develop land in Uttara Kannada?",
        a: "Start by understanding your land's zoning and conversion status. We visit the site, check land records, assess feasibility and prepare a complete development plan covering layout design, approvals, infrastructure and launch.",
      },
      {
        q: "What is the land conversion process in Uttara Kannada?",
        a: "Agricultural land needs DC (District Commissioner) conversion before residential development. The process involves applying to the DC office with required documents, getting a site inspection and receiving the conversion order. We guide land owners through each step.",
      },
    ],
  },
  {
    slug: "tumkur",
    city: "Tumkur",
    district: "Tumakuru",
    region: "Central Karnataka",
    title: "Layout Planning & Land Development in Tumkur | Agamana Projects",
    metaDescription:
      "Agamana Projects helps land owners in Tumkur plan, develop and launch residential layouts. Layout planning, approvals, branding and marketing with one partner.",
    h1: "Layout Planning & Land Development in Tumkur",
    intro:
      "Tumkur sits at the crossroads of Bangalore and Central Karnataka, making it one of the fastest-growing corridors for residential layout development. Agamana Projects works with land owners in Tumakuru district to plan layouts, handle approvals, build infrastructure and launch projects that attract buyers from both the city and the region.",
    whyHere: [
      "Tumkur's proximity to Bangalore drives steady demand for planned residential layouts and plotted projects.",
      "End-to-end support: layout design, government approvals, infrastructure, branding and launch under one roof.",
      "Experience across Central Karnataka, with a process built for Tier 2 towns where professional planning sets projects apart.",
      "One team, one point of contact from first site visit to market launch.",
    ],
    projects: [],
    nearbyAreas: ["Kunigal", "Tiptur", "Gubbi", "Sira", "Madhugiri"],
    faqs: [
      {
        q: "Do you work on residential layout projects in Tumkur?",
        a: "Yes. We help land owners across Tumakuru district plan, develop and launch residential layouts and plotted projects.",
      },
      {
        q: "What services do you offer in Tumkur?",
        a: "Layout planning, government approvals, infrastructure coordination, project branding and marketing. One partner for every stage of your project.",
      },
      {
        q: "How do I start a layout project in Tumkur with Agamana?",
        a: "Tell us about your land: location, extent and your goals. We visit the site, assess feasibility and prepare a clear development plan.",
      },
    ],
  },
  {
    slug: "chitradurga",
    city: "Chitradurga",
    district: "Chitradurga",
    region: "Central Karnataka",
    title: "Residential Layouts & Land Development in Chitradurga | Agamana",
    metaDescription:
      "Agamana Projects plans and launches residential layouts in Chitradurga. Layout planning, approvals, branding and launch support for land owners.",
    h1: "Residential Layouts & Land Development in Chitradurga",
    intro:
      "Chitradurga district offers growing opportunities for well-planned residential layouts. The region's connectivity to Bangalore, Davangere and Shivamogga makes it attractive for plotted development. Agamana Projects helps land owners here plan layouts, navigate approvals and bring projects to market with professional branding and support.",
    whyHere: [
      "Growing demand for residential plots in Chitradurga, driven by improved road and rail connectivity.",
      "Full project support: layout design, approvals, infrastructure, branding and launch.",
      "Experience across Central Karnataka with a process designed for Tier 2 and Tier 3 markets.",
      "A partner model. We stay with your project from land assessment to buyer handover.",
    ],
    projects: [],
    nearbyAreas: ["Davangere", "Challakere", "Hiriyur", "Holalkere", "Hosadurga"],
    faqs: [
      {
        q: "Do you develop residential layouts in Chitradurga?",
        a: "Yes. We work with land owners across Chitradurga district to plan, develop and launch residential layout projects.",
      },
      {
        q: "What does Agamana handle in Chitradurga?",
        a: "Everything from layout planning and government approvals to infrastructure, project branding and marketing. One partner for all 8 stages.",
      },
    ],
  },
  {
    slug: "hubli",
    city: "Hubli",
    district: "Dharwad",
    region: "North Karnataka",
    title: "Land Development & Layout Planning in Hubli | Agamana Projects",
    metaDescription:
      "Agamana Projects helps land owners in Hubli and Dharwad plan, develop and launch residential layouts. One partner from land to launch.",
    h1: "Land Development & Layout Planning in Hubli-Dharwad",
    intro:
      "Hubli-Dharwad is North Karnataka's fastest-growing twin city and a strong market for residential plotted development. Agamana Projects brings its Central Karnataka experience to Hubli, helping land owners plan layouts, secure approvals, build infrastructure and launch projects that stand out in a competitive market.",
    whyHere: [
      "Hubli-Dharwad is a key growth corridor in North Karnataka with rising demand for planned residential plots.",
      "Complete project delivery: layout design, approvals, infrastructure, branding and marketing.",
      "Our process is built for cities where professional planning and branding give projects a clear edge.",
      "One team, one process, one point of contact from land to launch.",
    ],
    projects: [],
    nearbyAreas: ["Dharwad", "Gadag", "Navalgund", "Kundgol", "Kalghatgi"],
    faqs: [
      {
        q: "Do you work in Hubli and Dharwad?",
        a: "Yes. We help land owners across Hubli-Dharwad and surrounding areas plan, develop and launch residential layout projects.",
      },
      {
        q: "What kind of projects do you handle in Hubli?",
        a: "Residential layouts and plotted developments. We cover layout planning, government approvals, infrastructure, branding and marketing.",
      },
    ],
  },
  {
    slug: "haveri",
    city: "Haveri",
    district: "Haveri",
    region: "North Karnataka",
    title: "Layout Planning & Residential Development in Haveri | Agamana",
    metaDescription:
      "Agamana Projects helps land owners in Haveri plan and launch residential layouts. Layout planning, approvals, branding and project support.",
    h1: "Layout Planning & Residential Development in Haveri",
    intro:
      "Haveri district sits between Hubli and Shivamogga, with growing interest in residential plotted development as connectivity improves. Agamana Projects works with land owners here to plan layouts, handle approvals and launch projects with professional branding and marketing support.",
    whyHere: [
      "Haveri's position between two major growth centres creates steady demand for well-planned residential plots.",
      "End-to-end project support: layout design, approvals, infrastructure, branding and launch.",
      "Experience across Central and North Karnataka, with a process that works in Tier 2 and Tier 3 towns.",
      "A partner, not a broker. We stay with your project from start to finish.",
    ],
    projects: [],
    nearbyAreas: ["Ranebennur", "Byadgi", "Savanur", "Hirekerur", "Hanagal"],
    faqs: [
      {
        q: "Do you handle layout projects in Haveri?",
        a: "Yes. We help land owners in Haveri district plan, develop and launch residential layouts and plotted projects.",
      },
      {
        q: "What services are available in Haveri?",
        a: "Layout planning, government approvals, infrastructure coordination, project branding and marketing. One team for all stages.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
