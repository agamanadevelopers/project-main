/**
 * Bilingual homepage content (English + Kannada).
 *
 * `content[locale]` returns the full dictionary for that language. Non-translatable
 * data (icons, images, hrefs, phone numbers) lives in `site.ts` / `images.ts` and is
 * zipped in by index, so the two language trees stay identical in shape.
 */
import type { Locale } from "./i18n";
import type { NavKey } from "./site";

type Dict = {
  nav: Record<NavKey, string>;
  common: {
    letsTalk: string;
    seeProjects: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
  };
  audience: {
    eyebrow: string;
    heading: string;
    supporting: string;
    cards: { kicker: string; title: string; lead: string; body: string; cta: string }[];
  };
  journey: {
    eyebrow: string;
    caption: string;
    intro: string;
    steps: { n: string; label: string; note: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    body: string;
    items: { title: string; blurb: string; chips: string[] }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { name: string; tag: string; place: string; blurb: string }[];
  };
  why: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    quote: string;
    quoteBy: string;
    pillars: { title: string; body: string }[];
    stats: { value: string; label: string }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    steps: { n: string; title: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  cta: { eyebrow: string; headline: string; body: string };
  footer: {
    tagline: string;
    serving: string;
    explore: string;
    getInTouch: string;
    visitUs: string;
    callUs: string;
    rights: string;
    disclaimer: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    email: string;
    interest: string;
    interestOwnLand: string;
    interestHaveProject: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    orCall: string;
    successTitle: string;
    successBody: string;
    close: string;
    required: string;
    invalidEmail: string;
  };
};

const en: Dict = {
  nav: {
    journey: "Journey",
    services: "How We Help",
    projects: "Projects",
    why: "Why Agamana",
    process: "Process",
    faq: "FAQ",
  },
  common: { letsTalk: "Let's Talk", seeProjects: "See Our Projects" },
  hero: {
    eyebrow: "Land development partner",
    headline: "You Have the Land. We'll Help You Build the Project.",
    supporting:
      "Whether you own land or already have a project, we help you plan, build, brand and bring it to market — one partner for every step.",
  },
  audience: {
    eyebrow: "Who we work with",
    heading: "Tell us where you're starting.",
    supporting:
      "Whether you own land or are already developing a residential project, Agamana Projects is built to support you.",
    cards: [
      {
        kicker: "Land Owner",
        title: "I Own Land",
        lead: "Own land and want to develop it?",
        body: "We'll help you transform your land into a professionally planned residential layout.",
        cta: "Learn More",
      },
      {
        kicker: "Developer",
        title: "I'm Developing a Project",
        lead: "Already working on a residential project?",
        body: "We'll help you build a stronger brand, market your project and support a successful launch.",
        cta: "Learn More",
      },
    ],
  },
  journey: {
    eyebrow: "Project journey",
    caption: "One Partner. Every Step.",
    intro:
      "From raw land to a confident launch — we stay with you through every stage, so nothing falls through the cracks.",
    steps: [
      { n: "01", label: "Land", note: "It starts with your ground." },
      { n: "02", label: "Planning", note: "The right decisions, early." },
      { n: "03", label: "Layout Design", note: "Plots that sell themselves." },
      { n: "04", label: "Approvals", note: "Clean, compliant, on record." },
      { n: "05", label: "Roads & Amenities", note: "Real infrastructure on site." },
      { n: "06", label: "Branding", note: "A name people trust." },
      { n: "07", label: "Marketing", note: "The right buyers, reached." },
      { n: "08", label: "Launch", note: "Ready for the market." },
    ],
  },
  services: {
    eyebrow: "How we help",
    heading: "Everything around your project, handled.",
    body: "You focus on your land or your idea. We take care of the rest — from the first plan to launch day.",
    items: [
      {
        title: "Layout Planning",
        blurb: "Plan every aspect of your residential layout before execution.",
        chips: [
          "Site Analysis",
          "Layout Design",
          "Plot Planning",
          "Road Network",
          "Amenity Planning",
          "Infrastructure Planning",
        ],
      },
      {
        title: "Approvals & Documentation",
        blurb: "Helping you navigate approvals and project documentation.",
        chips: [
          "Documentation",
          "Government Approvals",
          "Compliance",
          "Layout Approval",
          "Technical Drawings",
        ],
      },
      {
        title: "Project Branding",
        blurb: "Build a memorable identity that increases trust and attracts buyers.",
        chips: ["Logo", "Brochure", "Flyers", "Site Hoardings"],
      },
      {
        title: "Marketing & Digital Presence",
        blurb: "Present your project professionally across digital and print platforms.",
        chips: [
          "Website",
          "Social Media",
          "Digital Campaigns",
          "Lead Generation",
          "Project Photography",
          "Walkthrough Videos",
        ],
      },
      {
        title: "Sales & Launch Support",
        blurb: "Support your project launch with professional sales and marketing materials.",
        chips: ["Launch Strategy", "Sales Collaterals", "Customer Presentations", "Marketing Assets"],
      },
    ],
  },
  projects: {
    eyebrow: "Featured projects",
    heading: "Land, shaped into places to live.",
    intro: "A few of the projects we're proud to partner on across Karnataka.",
    items: [
      {
        name: "Tapovana",
        tag: "Plotted Development",
        place: "Karnataka",
        blurb: "A calm, wooded layout planned around mature greenery.",
      },
      {
        name: "Tribhuvana",
        tag: "Residential Layout",
        place: "Karnataka",
        blurb: "Open plots and wide avenues built for family living.",
      },
      {
        name: "Nandanavana",
        tag: "Greenfield Project",
        place: "Karnataka",
        blurb: "A garden-led community with landscaped roads.",
      },
    ],
  },
  why: {
    eyebrow: "Why Agamana",
    heading: "Professional project planning, brought to your land.",
    lead: "Many people own good land. Many developers have good ideas. But turning them into successful projects takes the right planning — done properly, from the very start.",
    body: "We started Agamana Projects to bring professional planning, branding and marketing to regional developers and land owners — the kind of care usually reserved for big-city projects, delivered close to home across Karnataka.",
    quote: "You focus on your project. We'll help you with everything around it.",
    quoteBy: "The Agamana promise",
    pillars: [
      {
        title: "One point of contact",
        body: "From the first plan to launch day, you work with a single, accountable partner.",
      },
      {
        title: "Planning-first",
        body: "The right decisions early save time, money and costly mistakes later.",
      },
      {
        title: "Local, on the ground",
        body: "We know Karnataka's Tier 2 and Tier 3 towns and work close to your site.",
      },
      {
        title: "End to end",
        body: "Layouts, approvals, roads, branding and marketing — all under one roof.",
      },
    ],
    stats: [
      { value: "8", label: "Steps, one partner" },
      { value: "3", label: "Projects underway" },
      { value: "1", label: "Point of contact" },
    ],
  },
  process: {
    eyebrow: "The process",
    heading: "Simple, clear and honest.",
    body: "Four steps from your first message to a project ready for the market.",
    steps: [
      {
        n: "01",
        title: "Tell us about your land or project.",
        body: "Share where you are today — a plot, an idea, or a project already in motion.",
      },
      {
        n: "02",
        title: "We understand your requirements.",
        body: "We listen, study the ground and understand what you want to build.",
      },
      {
        n: "03",
        title: "We prepare a clear plan.",
        body: "A simple, honest roadmap covering planning, approvals, branding and launch.",
      },
      {
        n: "04",
        title: "We help you build and launch.",
        body: "We stay with you through execution, marketing and a confident launch.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    heading: "We've got answers.",
    intro:
      "Still unsure where you fit? Tell us about your land or project and we'll point you in the right direction.",
    items: [
      {
        q: "What does Agamana Projects do?",
        a: "We are a project partner. We help land owners and developers plan, build, brand, market and launch residential projects — all with one team.",
      },
      {
        q: "Are you a builder or a broker?",
        a: "Neither. We are not a builder, a broker or a marketing agency. We are a partner who helps you with everything around your project.",
      },
      {
        q: "I only have land. Where do we start?",
        a: "That's the perfect starting point. Tell us about your land and we'll prepare a clear plan to turn it into a residential project.",
      },
      {
        q: "I already have a project. Can you still help?",
        a: "Yes. We can step in to brand, build a website, prepare brochures, market and launch your existing project.",
      },
      {
        q: "Which areas do you work in?",
        a: "We focus on Karnataka, including Tier 2 and Tier 3 towns where good land deserves professional planning.",
      },
      {
        q: "How do I get started?",
        a: "Just reach out. Tell us about your land or project and we'll take it from there — one partner, every step.",
      },
    ],
  },
  cta: {
    eyebrow: "Let's build",
    headline: "Ready to build your project?",
    body: "Tell us about your land or your project. We'll help you plan it, build it, brand it and bring it to market.",
  },
  footer: {
    tagline: "You focus on your project. We'll help you with everything around it.",
    serving: "Serving Karnataka.",
    explore: "Explore",
    getInTouch: "Get in touch",
    visitUs: "Visit us",
    callUs: "Call us",
    rights: "All rights reserved.",
    disclaimer: "A trusted project partner — not a builder, broker or agency.",
  },
  contact: {
    title: "Let's Talk",
    subtitle: "Tell us about your land or project and we'll get back to you.",
    name: "Your name",
    phone: "Phone number",
    email: "Email (optional)",
    interest: "I'm reaching out because…",
    interestOwnLand: "I own land",
    interestHaveProject: "I have a project",
    message: "Message",
    messagePlaceholder: "Tell us a little about your land or project…",
    send: "Send message",
    sending: "Sending…",
    orCall: "Or call us directly",
    successTitle: "Thank you!",
    successBody: "We've received your details and will be in touch very soon.",
    close: "Close",
    required: "This field is required",
    invalidEmail: "Please enter a valid email",
  },
};

const kn: Dict = {
  nav: {
    journey: "ಹಂತಗಳು",
    services: "ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ",
    projects: "ಯೋಜನೆಗಳು",
    why: "ಏಕೆ ಆಗಮನ",
    process: "ಪ್ರಕ್ರಿಯೆ",
    faq: "ಪ್ರಶ್ನೆಗಳು",
  },
  common: { letsTalk: "ಮಾತನಾಡೋಣ", seeProjects: "ನಮ್ಮ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ" },
  hero: {
    eyebrow: "ಭೂ ಅಭಿವೃದ್ಧಿ ಪಾಲುದಾರ",
    headline: "ನಿಮ್ಮ ಬಳಿ ಭೂಮಿ ಇದೆ. ಯೋಜನೆ ರೂಪಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    supporting:
      "ನಿಮ್ಮ ಬಳಿ ಭೂಮಿ ಇರಲಿ ಅಥವಾ ಈಗಾಗಲೇ ಯೋಜನೆ ಇರಲಿ — ಯೋಜನೆ, ನಿರ್ಮಾಣ, ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ತರುವವರೆಗೆ ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಒಬ್ಬ ಪಾಲುದಾರ.",
  },
  audience: {
    eyebrow: "ನಾವು ಯಾರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ",
    heading: "ನೀವು ಎಲ್ಲಿಂದ ಆರಂಭಿಸುತ್ತಿದ್ದೀರಿ ಎಂದು ತಿಳಿಸಿ.",
    supporting:
      "ನೀವು ಭೂಮಿ ಹೊಂದಿರಲಿ ಅಥವಾ ಈಗಾಗಲೇ ವಸತಿ ಯೋಜನೆ ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತಿರಲಿ, ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ ನಿಮಗೆ ಬೆಂಬಲ ನೀಡಲು ರಚಿಸಲಾಗಿದೆ.",
    cards: [
      {
        kicker: "ಭೂ ಮಾಲೀಕ",
        title: "ನನ್ನ ಬಳಿ ಭೂಮಿ ಇದೆ",
        lead: "ಭೂಮಿ ಹೊಂದಿದ್ದೀರಾ ಮತ್ತು ಅದನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಬಯಸುತ್ತೀರಾ?",
        body: "ನಿಮ್ಮ ಭೂಮಿಯನ್ನು ವೃತ್ತಿಪರವಾಗಿ ಯೋಜಿಸಿದ ವಸತಿ ಲೇಔಟ್ ಆಗಿ ಪರಿವರ್ತಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
        cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
      },
      {
        kicker: "ಡೆವಲಪರ್",
        title: "ನಾನು ಯೋಜನೆ ಅಭಿವೃದ್ಧಿಪಡಿಸುತ್ತಿದ್ದೇನೆ",
        lead: "ಈಗಾಗಲೇ ವಸತಿ ಯೋಜನೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೀರಾ?",
        body: "ಬಲವಾದ ಬ್ರಾಂಡ್ ರೂಪಿಸಲು, ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಮಾರಾಟ ಮಾಡಲು ಮತ್ತು ಯಶಸ್ವಿ ಬಿಡುಗಡೆಗೆ ಬೆಂಬಲ ನೀಡಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
        cta: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
      },
    ],
  },
  journey: {
    eyebrow: "ಯೋಜನೆಯ ಹಂತಗಳು",
    caption: "ಒಬ್ಬ ಪಾಲುದಾರ. ಪ್ರತಿ ಹಂತ.",
    intro:
      "ಭೂಮಿಯಿಂದ ಆತ್ಮವಿಶ್ವಾಸದ ಬಿಡುಗಡೆಯವರೆಗೆ — ಪ್ರತಿ ಹಂತದಲ್ಲೂ ನಾವು ನಿಮ್ಮೊಂದಿಗಿರುತ್ತೇವೆ, ಯಾವುದೂ ಬಿಟ್ಟುಹೋಗದಂತೆ.",
    steps: [
      { n: "01", label: "ಭೂಮಿ", note: "ಇದು ನಿಮ್ಮ ನೆಲದಿಂದ ಆರಂಭ." },
      { n: "02", label: "ಯೋಜನೆ", note: "ಸರಿಯಾದ ನಿರ್ಧಾರಗಳು, ಮೊದಲೇ." },
      { n: "03", label: "ಲೇಔಟ್ ವಿನ್ಯಾಸ", note: "ತಾವಾಗಿಯೇ ಮಾರಾಟವಾಗುವ ಪ್ಲಾಟ್‌ಗಳು." },
      { n: "04", label: "ಅನುಮೋದನೆಗಳು", note: "ಸ್ವಚ್ಛ, ನಿಯಮಬದ್ಧ, ದಾಖಲೆಯಲ್ಲಿ." },
      { n: "05", label: "ರಸ್ತೆ ಮತ್ತು ಸೌಕರ್ಯ", note: "ಸ್ಥಳದಲ್ಲಿ ನಿಜವಾದ ಮೂಲಸೌಕರ್ಯ." },
      { n: "06", label: "ಬ್ರಾಂಡಿಂಗ್", note: "ಜನರು ನಂಬುವ ಹೆಸರು." },
      { n: "07", label: "ಮಾರ್ಕೆಟಿಂಗ್", note: "ಸರಿಯಾದ ಖರೀದಿದಾರರನ್ನು ತಲುಪುವುದು." },
      { n: "08", label: "ಬಿಡುಗಡೆ", note: "ಮಾರುಕಟ್ಟೆಗೆ ಸಿದ್ಧ." },
    ],
  },
  services: {
    eyebrow: "ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ",
    heading: "ನಿಮ್ಮ ಯೋಜನೆಯ ಸುತ್ತಲಿನ ಎಲ್ಲವನ್ನೂ ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
    body: "ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಕಲ್ಪನೆಯ ಮೇಲೆ ಗಮನ ಕೊಡಿ. ಉಳಿದದ್ದನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ — ಮೊದಲ ಯೋಜನೆಯಿಂದ ಬಿಡುಗಡೆಯ ದಿನದವರೆಗೆ.",
    items: [
      {
        title: "ಲೇಔಟ್ ಯೋಜನೆ",
        blurb: "ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮೊದಲು ನಿಮ್ಮ ವಸತಿ ಲೇಔಟ್‌ನ ಪ್ರತಿ ಅಂಶವನ್ನೂ ಯೋಜಿಸಿ.",
        chips: [
          "ಸ್ಥಳ ವಿಶ್ಲೇಷಣೆ",
          "ಲೇಔಟ್ ವಿನ್ಯಾಸ",
          "ಪ್ಲಾಟ್ ಯೋಜನೆ",
          "ರಸ್ತೆ ಜಾಲ",
          "ಸೌಕರ್ಯ ಯೋಜನೆ",
          "ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆ",
        ],
      },
      {
        title: "ಅನುಮೋದನೆ ಮತ್ತು ದಾಖಲಾತಿ",
        blurb: "ಅನುಮೋದನೆ ಮತ್ತು ಯೋಜನೆ ದಾಖಲಾತಿಯಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ.",
        chips: [
          "ದಾಖಲಾತಿ",
          "ಸರ್ಕಾರಿ ಅನುಮೋದನೆ",
          "ಅನುಸರಣೆ",
          "ಲೇಔಟ್ ಅನುಮೋದನೆ",
          "ತಾಂತ್ರಿಕ ರೇಖಾಚಿತ್ರ",
        ],
      },
      {
        title: "ಯೋಜನೆ ಬ್ರಾಂಡಿಂಗ್",
        blurb: "ವಿಶ್ವಾಸ ಹೆಚ್ಚಿಸಿ ಖರೀದಿದಾರರನ್ನು ಆಕರ್ಷಿಸುವ ಸ್ಮರಣೀಯ ಗುರುತನ್ನು ರೂಪಿಸಿ.",
        chips: ["ಲೋಗೋ", "ಬ್ರೋಷರ್", "ಫ್ಲೈಯರ್", "ಸೈಟ್ ಹೋರ್ಡಿಂಗ್"],
      },
      {
        title: "ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಉಪಸ್ಥಿತಿ",
        blurb: "ಡಿಜಿಟಲ್ ಮತ್ತು ಮುದ್ರಣ ವೇದಿಕೆಗಳಲ್ಲಿ ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ವೃತ್ತಿಪರವಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಿ.",
        chips: [
          "ವೆಬ್‌ಸೈಟ್",
          "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ",
          "ಡಿಜಿಟಲ್ ಪ್ರಚಾರ",
          "ಲೀಡ್ ಜನರೇಶನ್",
          "ಯೋಜನೆ ಛಾಯಾಗ್ರಹಣ",
          "ವಾಕ್‌ಥ್ರೂ ವೀಡಿಯೊ",
        ],
      },
      {
        title: "ಮಾರಾಟ ಮತ್ತು ಬಿಡುಗಡೆ ಬೆಂಬಲ",
        blurb: "ವೃತ್ತಿಪರ ಮಾರಾಟ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಸಾಮಗ್ರಿಯೊಂದಿಗೆ ನಿಮ್ಮ ಯೋಜನೆ ಬಿಡುಗಡೆಗೆ ಬೆಂಬಲ.",
        chips: ["ಬಿಡುಗಡೆ ಕಾರ್ಯತಂತ್ರ", "ಮಾರಾಟ ಸಾಮಗ್ರಿ", "ಗ್ರಾಹಕ ಪ್ರಸ್ತುತಿ", "ಮಾರ್ಕೆಟಿಂಗ್ ಸ್ವತ್ತು"],
      },
    ],
  },
  projects: {
    eyebrow: "ವಿಶೇಷ ಯೋಜನೆಗಳು",
    heading: "ಭೂಮಿ, ವಾಸಿಸುವ ತಾಣವಾಗಿ ರೂಪುಗೊಂಡಿದೆ.",
    intro: "ಕರ್ನಾಟಕದಾದ್ಯಂತ ನಾವು ಹೆಮ್ಮೆಯಿಂದ ಪಾಲುದಾರರಾಗಿರುವ ಕೆಲವು ಯೋಜನೆಗಳು.",
    items: [
      {
        name: "ತಪೋವನ",
        tag: "ಪ್ಲಾಟ್ ಅಭಿವೃದ್ಧಿ",
        place: "ಕರ್ನಾಟಕ",
        blurb: "ಬೆಳೆದ ಹಸಿರಿನ ಸುತ್ತ ವಿನ್ಯಾಸಗೊಂಡ ಶಾಂತ ಲೇಔಟ್.",
      },
      {
        name: "ತ್ರಿಭುವನ",
        tag: "ವಸತಿ ಲೇಔಟ್",
        place: "ಕರ್ನಾಟಕ",
        blurb: "ಕುಟುಂಬ ಜೀವನಕ್ಕೆ ವಿಶಾಲ ಪ್ಲಾಟ್ ಮತ್ತು ಅಗಲ ರಸ್ತೆಗಳು.",
      },
      {
        name: "ನಂದನವನ",
        tag: "ಹಸಿರು ಯೋಜನೆ",
        place: "ಕರ್ನಾಟಕ",
        blurb: "ಉದ್ಯಾನ ಶೈಲಿಯ ರಸ್ತೆಗಳ ಹಸಿರು ಸಮುದಾಯ.",
      },
    ],
  },
  why: {
    eyebrow: "ಏಕೆ ಆಗಮನ",
    heading: "ವೃತ್ತಿಪರ ಯೋಜನಾ ಯೋಜನೆ, ನಿಮ್ಮ ಭೂಮಿಗೆ.",
    lead: "ಅನೇಕರ ಬಳಿ ಒಳ್ಳೆಯ ಭೂಮಿ ಇದೆ. ಅನೇಕ ಡೆವಲಪರ್‌ಗಳ ಬಳಿ ಒಳ್ಳೆಯ ಕಲ್ಪನೆಗಳಿವೆ. ಆದರೆ ಅವುಗಳನ್ನು ಯಶಸ್ವಿ ಯೋಜನೆಗಳಾಗಿ ಪರಿವರ್ತಿಸಲು ಆರಂಭದಿಂದಲೇ ಸರಿಯಾದ ಯೋಜನೆ ಬೇಕು.",
    body: "ದೊಡ್ಡ ನಗರಗಳ ಯೋಜನೆಗಳಿಗೆ ಸಿಗುವ ವೃತ್ತಿಪರ ಯೋಜನೆ, ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಅನ್ನು ಕರ್ನಾಟಕದ ಪ್ರಾದೇಶಿಕ ಡೆವಲಪರ್‌ಗಳಿಗೆ ಮತ್ತು ಭೂ ಮಾಲೀಕರಿಗೆ ತರಲು ನಾವು ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ ಆರಂಭಿಸಿದೆವು.",
    quote: "ನೀವು ನಿಮ್ಮ ಯೋಜನೆಯ ಮೇಲೆ ಗಮನ ಕೊಡಿ. ಸುತ್ತಲಿನ ಎಲ್ಲದರಲ್ಲೂ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    quoteBy: "ಆಗಮನ ಭರವಸೆ",
    pillars: [
      {
        title: "ಒಂದೇ ಸಂಪರ್ಕ ಕೇಂದ್ರ",
        body: "ಮೊದಲ ಯೋಜನೆಯಿಂದ ಬಿಡುಗಡೆಯ ದಿನದವರೆಗೆ, ನೀವು ಒಬ್ಬ ಜವಾಬ್ದಾರ ಪಾಲುದಾರರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತೀರಿ.",
      },
      {
        title: "ಯೋಜನೆಗೆ ಮೊದಲ ಆದ್ಯತೆ",
        body: "ಆರಂಭದಲ್ಲೇ ಸರಿಯಾದ ನಿರ್ಧಾರಗಳು ನಂತರ ಸಮಯ, ಹಣ ಮತ್ತು ತಪ್ಪುಗಳನ್ನು ಉಳಿಸುತ್ತವೆ.",
      },
      {
        title: "ಸ್ಥಳೀಯ, ನೆಲದ ಮೇಲೆ",
        body: "ಕರ್ನಾಟಕದ ಟಯರ್ 2 ಮತ್ತು ಟಯರ್ 3 ಪಟ್ಟಣಗಳು ನಮಗೆ ಗೊತ್ತು, ನಿಮ್ಮ ಸ್ಥಳದ ಹತ್ತಿರವೇ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ.",
      },
      {
        title: "ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ",
        body: "ಲೇಔಟ್, ಅನುಮೋದನೆ, ರಸ್ತೆ, ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ — ಎಲ್ಲವೂ ಒಂದೇ ಸೂರಿನಡಿ.",
      },
    ],
    stats: [
      { value: "8", label: "ಹಂತಗಳು, ಒಬ್ಬ ಪಾಲುದಾರ" },
      { value: "3", label: "ನಡೆಯುತ್ತಿರುವ ಯೋಜನೆಗಳು" },
      { value: "1", label: "ಸಂಪರ್ಕ ಕೇಂದ್ರ" },
    ],
  },
  process: {
    eyebrow: "ಪ್ರಕ್ರಿಯೆ",
    heading: "ಸರಳ, ಸ್ಪಷ್ಟ ಮತ್ತು ಪ್ರಾಮಾಣಿಕ.",
    body: "ನಿಮ್ಮ ಮೊದಲ ಸಂದೇಶದಿಂದ ಮಾರುಕಟ್ಟೆಗೆ ಸಿದ್ಧವಾದ ಯೋಜನೆಯವರೆಗೆ ನಾಲ್ಕು ಹಂತಗಳು.",
    steps: [
      {
        n: "01",
        title: "ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ.",
        body: "ನೀವು ಈಗ ಎಲ್ಲಿದ್ದೀರೋ ಹಂಚಿಕೊಳ್ಳಿ — ಒಂದು ಪ್ಲಾಟ್, ಕಲ್ಪನೆ, ಅಥವಾ ಈಗಾಗಲೇ ನಡೆಯುತ್ತಿರುವ ಯೋಜನೆ.",
      },
      {
        n: "02",
        title: "ನಿಮ್ಮ ಅಗತ್ಯಗಳನ್ನು ನಾವು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇವೆ.",
        body: "ನಾವು ಆಲಿಸುತ್ತೇವೆ, ನೆಲವನ್ನು ಅಧ್ಯಯನ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ನೀವು ಏನನ್ನು ನಿರ್ಮಿಸಬೇಕೆಂದಿದ್ದೀರೋ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇವೆ.",
      },
      {
        n: "03",
        title: "ನಾವು ಸ್ಪಷ್ಟ ಯೋಜನೆ ಸಿದ್ಧಪಡಿಸುತ್ತೇವೆ.",
        body: "ಯೋಜನೆ, ಅನುಮೋದನೆ, ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಬಿಡುಗಡೆಯನ್ನು ಒಳಗೊಂಡ ಸರಳ, ಪ್ರಾಮಾಣಿಕ ದಾರಿ.",
      },
      {
        n: "04",
        title: "ನಿರ್ಮಿಸಲು ಮತ್ತು ಬಿಡುಗಡೆ ಮಾಡಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
        body: "ಕಾರ್ಯಗತ, ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸದ ಬಿಡುಗಡೆಯವರೆಗೂ ನಾವು ನಿಮ್ಮೊಂದಿಗಿರುತ್ತೇವೆ.",
      },
    ],
  },
  faq: {
    eyebrow: "ಪ್ರಶ್ನೆಗಳು",
    heading: "ನಮ್ಮ ಬಳಿ ಉತ್ತರಗಳಿವೆ.",
    intro:
      "ನೀವು ಎಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತೀರಿ ಎಂದು ಖಚಿತವಿಲ್ಲವೇ? ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ, ನಾವು ದಾರಿ ತೋರಿಸುತ್ತೇವೆ.",
    items: [
      {
        q: "ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ ಏನು ಮಾಡುತ್ತದೆ?",
        a: "ನಾವು ಒಬ್ಬ ಯೋಜನೆ ಪಾಲುದಾರ. ಭೂ ಮಾಲೀಕರಿಗೆ ಮತ್ತು ಡೆವಲಪರ್‌ಗಳಿಗೆ ವಸತಿ ಯೋಜನೆಗಳನ್ನು ಯೋಜಿಸಲು, ನಿರ್ಮಿಸಲು, ಬ್ರಾಂಡ್ ಮಾಡಲು, ಮಾರಾಟ ಮಾಡಲು ಮತ್ತು ಬಿಡುಗಡೆ ಮಾಡಲು ಒಂದೇ ತಂಡದೊಂದಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
      },
      {
        q: "ನೀವು ಬಿಲ್ಡರ್ ಅಥವಾ ಬ್ರೋಕರ್ ಆಗಿದ್ದೀರಾ?",
        a: "ಇಲ್ಲ. ನಾವು ಬಿಲ್ಡರ್, ಬ್ರೋಕರ್ ಅಥವಾ ಮಾರ್ಕೆಟಿಂಗ್ ಏಜೆನ್ಸಿ ಅಲ್ಲ. ನಿಮ್ಮ ಯೋಜನೆಯ ಸುತ್ತಲಿನ ಎಲ್ಲದರಲ್ಲೂ ಸಹಾಯ ಮಾಡುವ ಪಾಲುದಾರ ನಾವು.",
      },
      {
        q: "ನನ್ನ ಬಳಿ ಕೇವಲ ಭೂಮಿ ಇದೆ. ಎಲ್ಲಿಂದ ಆರಂಭಿಸೋಣ?",
        a: "ಅದೇ ಸೂಕ್ತ ಆರಂಭ. ನಿಮ್ಮ ಭೂಮಿಯ ಬಗ್ಗೆ ತಿಳಿಸಿ, ಅದನ್ನು ವಸತಿ ಯೋಜನೆಯಾಗಿ ಪರಿವರ್ತಿಸಲು ಸ್ಪಷ್ಟ ಯೋಜನೆ ಸಿದ್ಧಪಡಿಸುತ್ತೇವೆ.",
      },
      {
        q: "ನನ್ನ ಬಳಿ ಈಗಾಗಲೇ ಯೋಜನೆ ಇದೆ. ಆದರೂ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
        a: "ಹೌದು. ನಿಮ್ಮ ಈಗಿನ ಯೋಜನೆಯನ್ನು ಬ್ರಾಂಡ್ ಮಾಡಲು, ವೆಬ್‌ಸೈಟ್ ರಚಿಸಲು, ಬ್ರೋಷರ್ ಸಿದ್ಧಪಡಿಸಲು, ಮಾರಾಟ ಮಾಡಲು ಮತ್ತು ಬಿಡುಗಡೆ ಮಾಡಲು ನಾವು ಸಹಾಯ ಮಾಡಬಹುದು.",
      },
      {
        q: "ನೀವು ಯಾವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೀರಿ?",
        a: "ಒಳ್ಳೆಯ ಭೂಮಿಗೆ ವೃತ್ತಿಪರ ಯೋಜನೆ ಅಗತ್ಯವಿರುವ ಟಯರ್ 2 ಮತ್ತು ಟಯರ್ 3 ಪಟ್ಟಣಗಳ ಸೇರಿದಂತೆ ಕರ್ನಾಟಕದ ಮೇಲೆ ನಾವು ಗಮನ ಕೇಂದ್ರೀಕರಿಸುತ್ತೇವೆ.",
      },
      {
        q: "ನಾನು ಹೇಗೆ ಆರಂಭಿಸಲಿ?",
        a: "ಸಂಪರ್ಕಿಸಿ. ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ, ಮುಂದಿನದ್ದನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ — ಒಬ್ಬ ಪಾಲುದಾರ, ಪ್ರತಿ ಹಂತ.",
      },
    ],
  },
  cta: {
    eyebrow: "ನಿರ್ಮಿಸೋಣ",
    headline: "ನಿಮ್ಮ ಯೋಜನೆ ನಿರ್ಮಿಸಲು ಸಿದ್ಧರೇ?",
    body: "ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ. ಯೋಜನೆ, ನಿರ್ಮಾಣ, ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ತರಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
  },
  footer: {
    tagline: "ನೀವು ನಿಮ್ಮ ಯೋಜನೆಯ ಮೇಲೆ ಗಮನ ಕೊಡಿ. ಸುತ್ತಲಿನ ಎಲ್ಲದರಲ್ಲೂ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    serving: "ಕರ್ನಾಟಕದಲ್ಲಿ ಸೇವೆ.",
    explore: "ಅನ್ವೇಷಿಸಿ",
    getInTouch: "ಸಂಪರ್ಕಿಸಿ",
    visitUs: "ನಮ್ಮ ಕಚೇರಿ",
    callUs: "ಕರೆ ಮಾಡಿ",
    rights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    disclaimer: "ವಿಶ್ವಾಸಾರ್ಹ ಯೋಜನೆ ಪಾಲುದಾರ — ಬಿಲ್ಡರ್, ಬ್ರೋಕರ್ ಅಥವಾ ಏಜೆನ್ಸಿ ಅಲ್ಲ.",
  },
  contact: {
    title: "ಮಾತನಾಡೋಣ",
    subtitle: "ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ, ನಾವು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    name: "ನಿಮ್ಮ ಹೆಸರು",
    phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    email: "ಇಮೇಲ್ (ಐಚ್ಛಿಕ)",
    interest: "ನಾನು ಸಂಪರ್ಕಿಸುತ್ತಿರುವುದು…",
    interestOwnLand: "ನನ್ನ ಬಳಿ ಭೂಮಿ ಇದೆ",
    interestHaveProject: "ನನ್ನ ಬಳಿ ಯೋಜನೆ ಇದೆ",
    message: "ಸಂದೇಶ",
    messagePlaceholder: "ನಿಮ್ಮ ಭೂಮಿ ಅಥವಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ತಿಳಿಸಿ…",
    send: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    sending: "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ…",
    orCall: "ಅಥವಾ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ",
    successTitle: "ಧನ್ಯವಾದಗಳು!",
    successBody: "ನಿಮ್ಮ ವಿವರಗಳು ನಮಗೆ ಸಿಕ್ಕಿವೆ, ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    close: "ಮುಚ್ಚಿ",
    required: "ಈ ಕ್ಷೇತ್ರ ಅಗತ್ಯವಿದೆ",
    invalidEmail: "ದಯವಿಟ್ಟು ಸರಿಯಾದ ಇಮೇಲ್ ನಮೂದಿಸಿ",
  },
};

export const content: Record<Locale, Dict> = { en, kn };
export type ContentDict = Dict;
