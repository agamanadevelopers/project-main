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
    slides: {
      eyebrow: string;
      headline: string;
      supporting: string;
      primary: string;
      secondary: string;
      image?: string;
    }[];
  };
  audience: {
    eyebrow: string;
    heading: string;
    supporting: string;
    cards: { title: string; body: string; cta: string }[];
  };
  journey: {
    eyebrow: string;
    caption: string;
    intro: string;
    footnote: string;
    steps: { n: string; label: string; note: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    body: string;
    items: { title: string; blurb: string; chips: string[]; image?: string }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { name: string; tag: string; place: string; blurb: string; image?: string }[];
  };
  why: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    tagline: string;
    image?: string;
    pillars: { title: string; body: string }[];
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
  common: { letsTalk: "Let's Talk", seeProjects: "View Our Projects" },
  hero: {
    slides: [
      {
        eyebrow: "For Land Owners",
        headline: "Own Land?\nLet's Build Something Valuable Together.",
        supporting:
          "Whether it's 2 acres or 50 acres, we help you plan, develop and launch your residential layout with the right strategy and support.",
        primary: "Discuss Your Land",
        secondary: "See How We Work",
      },
      {
        eyebrow: "For Developers",
        headline: "Building a Project?\nFocus on Development. We'll Handle the Rest.",
        supporting:
          "From project branding and marketing to launch support, we help you present your project professionally and reach the right buyers.",
        primary: "Discuss Your Project",
        secondary: "View Our Projects",
      },
      {
        eyebrow: "Agamana Projects",
        headline: "One Partner.\nEvery Step of Your Project.",
        supporting:
          "Planning. Approvals. Infrastructure. Branding. Marketing. Everything you need to take your project from land to launch.",
        primary: "Explore Our Services",
        secondary: "Let's Talk",
      },
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    heading: "Who We Work With",
    supporting:
      "We work with people at different stages of their project journey. Choose the one that best describes you.",
    cards: [
      {
        title: "Land Owners",
        body: "You own land and want to develop it into a residential layout or plotted project.",
        cta: "Explore Solutions",
      },
      {
        title: "Developers",
        body: "You already have a project and need help with branding, marketing or launching it successfully.",
        cta: "Explore Solutions",
      },
    ],
  },
  journey: {
    eyebrow: "The Journey",
    caption: "From Land to Launch.",
    intro: "We stay with your project at every stage.",
    footnote: "One team. One process. One point of contact.",
    steps: [
      { n: "01", label: "Land", note: "It starts with your ground." },
      { n: "02", label: "Planning", note: "The right decisions, early." },
      { n: "03", label: "Layout Design", note: "Plots that sell themselves." },
      { n: "04", label: "Approvals", note: "Clean, compliant, on record." },
      { n: "05", label: "Roads & Infrastructure", note: "Real infrastructure on site." },
      { n: "06", label: "Branding", note: "A name people trust." },
      { n: "07", label: "Marketing", note: "The right buyers, reached." },
      { n: "08", label: "Launch", note: "Ready for the market." },
    ],
  },
  services: {
    eyebrow: "How we help",
    heading: "Everything Your Project Needs.",
    body: "No matter where you are in your journey, we're here to help.",
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
    eyebrow: "Our work",
    heading: "Projects We've Worked On",
    intro: "Every project is different. Here's a look at some of our work.",
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
    heading: "Why Choose Agamana Projects?",
    lead: "Developing a successful project takes planning, coordination and the right team.",
    body: "We're here to help you through every stage.",
    tagline: "Trusted Partner for Every Stage",
    pillars: [
      {
        title: "We Understand Land Development",
        body: "From planning your layout to launching your project, we know what it takes.",
      },
      {
        title: "We Keep Things Simple",
        body: "One team to guide you through every stage.",
      },
      {
        title: "We Focus on Quality",
        body: "Every project deserves proper planning and attention to detail.",
      },
      {
        title: "We Work Like Partners",
        body: "Your project's success is our success.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "Our Process",
    body: "Simple. Clear. Transparent.",
    steps: [
      {
        n: "01",
        title: "Understand Your Land",
        body: "We begin by understanding your land, location and goals.",
      },
      {
        n: "02",
        title: "Plan the Project",
        body: "We prepare the layout and development plan.",
      },
      {
        n: "03",
        title: "Develop & Build",
        body: "We coordinate the required development work.",
      },
      {
        n: "04",
        title: "Brand & Launch",
        body: "Once everything is ready, we help bring your project to the market.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
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
    eyebrow: "Get in touch",
    headline: "Let's Build Something Great Together.",
    body: "Whether you're planning your first project or your next one, we'd love to hear from you.",
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
    slides: [
      {
        eyebrow: "ಭೂ ಮಾಲೀಕರಿಗಾಗಿ",
        headline: "ಭೂಮಿ ಇದೆಯೇ?\nಒಟ್ಟಿಗೆ ಮೌಲ್ಯಯುತವಾದದ್ದನ್ನು ನಿರ್ಮಿಸೋಣ.",
        supporting:
          "2 ಎಕರೆ ಇರಲಿ ಅಥವಾ 50 ಎಕರೆ ಇರಲಿ, ಸರಿಯಾದ ಕಾರ್ಯತಂತ್ರ ಮತ್ತು ಬೆಂಬಲದೊಂದಿಗೆ ನಿಮ್ಮ ವಸತಿ ಲೇಔಟ್ ಅನ್ನು ಯೋಜಿಸಲು, ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಮತ್ತು ಬಿಡುಗಡೆ ಮಾಡಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
        primary: "ನಿಮ್ಮ ಭೂಮಿ ಬಗ್ಗೆ ಮಾತನಾಡಿ",
        secondary: "ನಾವು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ ನೋಡಿ",
      },
      {
        eyebrow: "ಡೆವಲಪರ್‌ಗಳಿಗಾಗಿ",
        headline: "ಯೋಜನೆ ನಿರ್ಮಿಸುತ್ತಿದ್ದೀರಾ?\nಅಭಿವೃದ್ಧಿಯ ಮೇಲೆ ಗಮನ ಕೊಡಿ. ಉಳಿದದ್ದನ್ನು ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.",
        supporting:
          "ಯೋಜನೆ ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್‌ನಿಂದ ಬಿಡುಗಡೆ ಬೆಂಬಲದವರೆಗೆ, ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ವೃತ್ತಿಪರವಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸಲು ಮತ್ತು ಸರಿಯಾದ ಖರೀದಿದಾರರನ್ನು ತಲುಪಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
        primary: "ನಿಮ್ಮ ಯೋಜನೆ ಬಗ್ಗೆ ಮಾತನಾಡಿ",
        secondary: "ನಮ್ಮ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
      },
      {
        eyebrow: "ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್",
        headline: "ಒಬ್ಬ ಪಾಲುದಾರ.\nನಿಮ್ಮ ಯೋಜನೆಯ ಪ್ರತಿ ಹಂತದಲ್ಲೂ.",
        supporting:
          "ಯೋಜನೆ. ಅನುಮೋದನೆ. ಮೂಲಸೌಕರ್ಯ. ಬ್ರಾಂಡಿಂಗ್. ಮಾರ್ಕೆಟಿಂಗ್. ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಭೂಮಿಯಿಂದ ಬಿಡುಗಡೆಯವರೆಗೆ ಕೊಂಡೊಯ್ಯಲು ಬೇಕಾದ ಎಲ್ಲವೂ.",
        primary: "ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        secondary: "ಮಾತನಾಡೋಣ",
      },
    ],
  },
  audience: {
    eyebrow: "ಯಾರಿಗಾಗಿ",
    heading: "ನಾವು ಯಾರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ",
    supporting:
      "ನಾವು ತಮ್ಮ ಯೋಜನೆಯ ವಿವಿಧ ಹಂತಗಳಲ್ಲಿರುವ ಜನರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ. ನಿಮಗೆ ಸೂಕ್ತವಾದದ್ದನ್ನು ಆರಿಸಿ.",
    cards: [
      {
        title: "ಭೂ ಮಾಲೀಕರು",
        body: "ನಿಮ್ಮ ಬಳಿ ಭೂಮಿ ಇದೆ ಮತ್ತು ಅದನ್ನು ವಸತಿ ಲೇಔಟ್ ಅಥವಾ ಪ್ಲಾಟ್ ಯೋಜನೆಯಾಗಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಬಯಸುತ್ತೀರಿ.",
        cta: "ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      },
      {
        title: "ಡೆವಲಪರ್‌ಗಳು",
        body: "ನಿಮ್ಮ ಬಳಿ ಈಗಾಗಲೇ ಯೋಜನೆ ಇದೆ ಮತ್ತು ಬ್ರಾಂಡಿಂಗ್, ಮಾರ್ಕೆಟಿಂಗ್ ಅಥವಾ ಯಶಸ್ವಿ ಬಿಡುಗಡೆಗೆ ಸಹಾಯ ಬೇಕಿದೆ.",
        cta: "ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      },
    ],
  },
  journey: {
    eyebrow: "ಪ್ರಯಾಣ",
    caption: "ಭೂಮಿಯಿಂದ ಬಿಡುಗಡೆಯವರೆಗೆ.",
    intro: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ನಾವು ನಿಮ್ಮ ಯೋಜನೆಯೊಂದಿಗಿರುತ್ತೇವೆ.",
    footnote: "ಒಂದೇ ತಂಡ. ಒಂದೇ ಪ್ರಕ್ರಿಯೆ. ಒಂದೇ ಸಂಪರ್ಕ ಕೇಂದ್ರ.",
    steps: [
      { n: "01", label: "ಭೂಮಿ", note: "ಇದು ನಿಮ್ಮ ನೆಲದಿಂದ ಆರಂಭ." },
      { n: "02", label: "ಯೋಜನೆ", note: "ಸರಿಯಾದ ನಿರ್ಧಾರಗಳು, ಮೊದಲೇ." },
      { n: "03", label: "ಲೇಔಟ್ ವಿನ್ಯಾಸ", note: "ತಾವಾಗಿಯೇ ಮಾರಾಟವಾಗುವ ಪ್ಲಾಟ್‌ಗಳು." },
      { n: "04", label: "ಅನುಮೋದನೆಗಳು", note: "ಸ್ವಚ್ಛ, ನಿಯಮಬದ್ಧ, ದಾಖಲೆಯಲ್ಲಿ." },
      { n: "05", label: "ರಸ್ತೆ ಮತ್ತು ಮೂಲಸೌಕರ್ಯ", note: "ಸ್ಥಳದಲ್ಲಿ ನಿಜವಾದ ಮೂಲಸೌಕರ್ಯ." },
      { n: "06", label: "ಬ್ರಾಂಡಿಂಗ್", note: "ಜನರು ನಂಬುವ ಹೆಸರು." },
      { n: "07", label: "ಮಾರ್ಕೆಟಿಂಗ್", note: "ಸರಿಯಾದ ಖರೀದಿದಾರರನ್ನು ತಲುಪುವುದು." },
      { n: "08", label: "ಬಿಡುಗಡೆ", note: "ಮಾರುಕಟ್ಟೆಗೆ ಸಿದ್ಧ." },
    ],
  },
  services: {
    eyebrow: "ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ",
    heading: "ನಿಮ್ಮ ಯೋಜನೆಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ.",
    body: "ನಿಮ್ಮ ಪ್ರಯಾಣದ ಯಾವುದೇ ಹಂತದಲ್ಲಿ ಇರಲಿ, ಸಹಾಯ ಮಾಡಲು ನಾವು ಇದ್ದೇವೆ.",
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
    eyebrow: "ನಮ್ಮ ಕೆಲಸ",
    heading: "ನಾವು ಕೆಲಸ ಮಾಡಿದ ಯೋಜನೆಗಳು",
    intro: "ಪ್ರತಿ ಯೋಜನೆಯೂ ಭಿನ್ನ. ನಮ್ಮ ಕೆಲವು ಕೆಲಸಗಳ ನೋಟ ಇಲ್ಲಿದೆ.",
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
    heading: "ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ ಅನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?",
    lead: "ಯಶಸ್ವಿ ಯೋಜನೆ ಅಭಿವೃದ್ಧಿಗೆ ಯೋಜನೆ, ಸಮನ್ವಯ ಮತ್ತು ಸರಿಯಾದ ತಂಡ ಬೇಕು.",
    body: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಇದ್ದೇವೆ.",
    tagline: "ಪ್ರತಿ ಹಂತಕ್ಕೂ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ",
    pillars: [
      {
        title: "ನಮಗೆ ಭೂ ಅಭಿವೃದ್ಧಿ ಗೊತ್ತು",
        body: "ನಿಮ್ಮ ಲೇಔಟ್ ಯೋಜಿಸುವುದರಿಂದ ಯೋಜನೆ ಬಿಡುಗಡೆಯವರೆಗೆ, ಏನು ಬೇಕೆಂದು ನಮಗೆ ಗೊತ್ತು.",
      },
      {
        title: "ನಾವು ವಿಷಯಗಳನ್ನು ಸರಳವಾಗಿಡುತ್ತೇವೆ",
        body: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಒಂದೇ ತಂಡ.",
      },
      {
        title: "ನಾವು ಗುಣಮಟ್ಟದ ಮೇಲೆ ಗಮನ ಕೊಡುತ್ತೇವೆ",
        body: "ಪ್ರತಿ ಯೋಜನೆಗೂ ಸರಿಯಾದ ಯೋಜನೆ ಮತ್ತು ವಿವರಗಳ ಗಮನ ಬೇಕು.",
      },
      {
        title: "ನಾವು ಪಾಲುದಾರರಂತೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ",
        body: "ನಿಮ್ಮ ಯೋಜನೆಯ ಯಶಸ್ಸು ನಮ್ಮ ಯಶಸ್ಸು.",
      },
    ],
  },
  process: {
    eyebrow: "ನಾವು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ",
    heading: "ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ",
    body: "ಸರಳ. ಸ್ಪಷ್ಟ. ಪಾರದರ್ಶಕ.",
    steps: [
      {
        n: "01",
        title: "ನಿಮ್ಮ ಭೂಮಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
        body: "ನಿಮ್ಮ ಭೂಮಿ, ಸ್ಥಳ ಮತ್ತು ಗುರಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದರಿಂದ ನಾವು ಆರಂಭಿಸುತ್ತೇವೆ.",
      },
      {
        n: "02",
        title: "ಯೋಜನೆಯನ್ನು ರೂಪಿಸುವುದು",
        body: "ನಾವು ಲೇಔಟ್ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ ಸಿದ್ಧಪಡಿಸುತ್ತೇವೆ.",
      },
      {
        n: "03",
        title: "ಅಭಿವೃದ್ಧಿ ಮತ್ತು ನಿರ್ಮಾಣ",
        body: "ಅಗತ್ಯವಿರುವ ಅಭಿವೃದ್ಧಿ ಕೆಲಸವನ್ನು ನಾವು ಸಮನ್ವಯಗೊಳಿಸುತ್ತೇವೆ.",
      },
      {
        n: "04",
        title: "ಬ್ರಾಂಡ್ ಮತ್ತು ಬಿಡುಗಡೆ",
        body: "ಎಲ್ಲವೂ ಸಿದ್ಧವಾದ ಮೇಲೆ, ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಮಾರುಕಟ್ಟೆಗೆ ತರಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
      },
    ],
  },
  faq: {
    eyebrow: "ಪ್ರಶ್ನೆಗಳು",
    heading: "ಪದೇ ಪದೇ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು",
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
    eyebrow: "ಸಂಪರ್ಕಿಸಿ",
    headline: "ಒಟ್ಟಿಗೆ ಅದ್ಭುತವಾದದ್ದನ್ನು ನಿರ್ಮಿಸೋಣ.",
    body: "ನಿಮ್ಮ ಮೊದಲ ಯೋಜನೆಯಾಗಲಿ ಅಥವಾ ಮುಂದಿನದ್ದಾಗಲಿ, ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಾವು ಇಷ್ಟಪಡುತ್ತೇವೆ.",
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
