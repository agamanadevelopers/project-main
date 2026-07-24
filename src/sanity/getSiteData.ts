import { client } from "./client";
import { urlFor } from "./image";
import { content as staticContent, type ContentDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import {
  DEFAULT_SETTINGS,
  DEFAULT_SEO,
  type SiteSettings,
  type SeoData,
} from "@/lib/settings-defaults";

const query = `{
  "homepage": *[_id == "homepage"][0],
  "settings": *[_id == "siteSettings"][0]
}`;

/* eslint-disable @typescript-eslint/no-explicit-any */
const img = (o: any, w: number, h?: number): string | undefined => {
  if (!o?.asset) return undefined;
  let b = urlFor(o).width(w);
  if (h) b = b.height(h);
  return b.auto("format").quality(80).url();
};

/** Build one language's dictionary from Sanity, falling back to static per field. */
function buildDict(hp: any, loc: Locale): ContentDict {
  const base = staticContent[loc];
  if (!hp) return base;
  const L = (o: any, fb: string): string =>
    o && typeof o[loc] === "string" && o[loc].trim() ? o[loc] : fb;

  const heroSlides = hp.heroSlides?.length
    ? hp.heroSlides.map((s: any, i: number) => {
        const bs = base.hero.slides[i] ?? base.hero.slides[0];
        return {
          eyebrow: L(s.eyebrow, bs.eyebrow),
          headline: L(s.headline, bs.headline),
          supporting: L(s.supporting, bs.supporting),
          primary: L(s.primary, bs.primary),
          secondary: L(s.secondary, bs.secondary),
          image: img(s.background, 2560),
        };
      })
    : base.hero.slides;

  const audienceCards = hp.audienceCards?.length
    ? hp.audienceCards.map((c: any, i: number) => {
        const bc = base.audience.cards[i] ?? base.audience.cards[0];
        return { title: L(c.title, bc.title), body: L(c.body, bc.body), cta: L(c.cta, bc.cta) };
      })
    : base.audience.cards;

  const journeySteps = hp.journeySteps?.length
    ? hp.journeySteps.map((s: any, i: number) => {
        const bs = base.journey.steps[i] ?? base.journey.steps[0];
        return { n: s.number || bs.n, label: L(s.label, bs.label), note: L(s.note, bs.note) };
      })
    : base.journey.steps;

  const serviceItems = hp.serviceItems?.length
    ? hp.serviceItems.map((it: any, i: number) => {
        const bi = base.services.items[i] ?? base.services.items[0];
        const chips =
          it.chips?.length
            ? it.chips.map((c: any, ci: number) => L(c, bi.chips[ci] ?? bi.chips[0] ?? ""))
            : bi.chips;
        return {
          title: L(it.title, bi.title),
          blurb: L(it.blurb, bi.blurb),
          chips,
          image: img(it.image, 1800),
        };
      })
    : base.services.items;

  const projectItems = hp.projectItems?.length
    ? hp.projectItems.map((p: any, i: number) => {
        const bp = base.projects.items[i] ?? base.projects.items[0];
        return {
          name: L(p.name, bp.name),
          tag: L(p.tag, bp.tag),
          place: L(p.place, bp.place),
          blurb: L(p.blurb, bp.blurb),
          image: img(p.image, 1200, 1500),
        };
      })
    : base.projects.items;

  const whyPillars = hp.whyPillars?.length
    ? hp.whyPillars.map((p: any, i: number) => {
        const bp = base.why.pillars[i] ?? base.why.pillars[0];
        return { title: L(p.title, bp.title), body: L(p.body, bp.body) };
      })
    : base.why.pillars;

  const processSteps = hp.processSteps?.length
    ? hp.processSteps.map((s: any, i: number) => {
        const bs = base.process.steps[i] ?? base.process.steps[0];
        return { n: s.number || bs.n, title: L(s.title, bs.title), body: L(s.body, bs.body) };
      })
    : base.process.steps;

  const faqItems = hp.faqItems?.length
    ? hp.faqItems.map((f: any, i: number) => {
        const bf = base.faq.items[i] ?? base.faq.items[0];
        return { q: L(f.question, bf.q), a: L(f.answer, bf.a) };
      })
    : base.faq.items;

  return {
    ...base,
    hero: { slides: heroSlides },
    audience: {
      eyebrow: L(hp.audienceEyebrow, base.audience.eyebrow),
      heading: L(hp.audienceHeading, base.audience.heading),
      supporting: L(hp.audienceSupporting, base.audience.supporting),
      cards: audienceCards,
    },
    journey: {
      eyebrow: L(hp.journeyEyebrow, base.journey.eyebrow),
      caption: L(hp.journeyCaption, base.journey.caption),
      intro: L(hp.journeyIntro, base.journey.intro),
      footnote: L(hp.journeyFootnote, base.journey.footnote),
      steps: journeySteps,
    },
    services: {
      eyebrow: L(hp.servicesEyebrow, base.services.eyebrow),
      heading: L(hp.servicesHeading, base.services.heading),
      body: L(hp.servicesBody, base.services.body),
      items: serviceItems,
    },
    projects: {
      eyebrow: L(hp.projectsEyebrow, base.projects.eyebrow),
      heading: L(hp.projectsHeading, base.projects.heading),
      intro: L(hp.projectsIntro, base.projects.intro),
      items: projectItems,
    },
    why: {
      eyebrow: L(hp.whyEyebrow, base.why.eyebrow),
      heading: L(hp.whyHeading, base.why.heading),
      lead: L(hp.whyLead, base.why.lead),
      body: L(hp.whyBody, base.why.body),
      tagline: L(hp.whyTagline, base.why.tagline),
      image: img(hp.whyImage, 1200, 1500),
      pillars: whyPillars,
    },
    process: {
      eyebrow: L(hp.processEyebrow, base.process.eyebrow),
      heading: L(hp.processHeading, base.process.heading),
      body: L(hp.processBody, base.process.body),
      steps: processSteps,
    },
    faq: {
      eyebrow: L(hp.faqEyebrow, base.faq.eyebrow),
      heading: L(hp.faqHeading, base.faq.heading),
      intro: L(hp.faqIntro, base.faq.intro),
      items: faqItems,
    },
    cta: {
      eyebrow: L(hp.ctaEyebrow, base.cta.eyebrow),
      headline: L(hp.ctaHeadline, base.cta.headline),
      body: L(hp.ctaBody, base.cta.body),
    },
  };
}

function buildSettings(s: any): SiteSettings {
  if (!s) return DEFAULT_SETTINGS;
  return {
    logoColor: img(s.logoColor, 500) ?? DEFAULT_SETTINGS.logoColor,
    logoWhite: img(s.logoWhite, 500) ?? DEFAULT_SETTINGS.logoWhite,
    email: s.email || DEFAULT_SETTINGS.email,
    phones: s.phones?.length
      ? s.phones.map((p: any) => ({ display: p.display, tel: p.tel }))
      : DEFAULT_SETTINGS.phones,
    address: {
      line1: s.addressLine1 || DEFAULT_SETTINGS.address.line1,
      line2: s.addressLine2 || DEFAULT_SETTINGS.address.line2,
      line3: s.addressLine3 || DEFAULT_SETTINGS.address.line3,
    },
  };
}

function buildSeo(s: any): SeoData {
  if (!s) return DEFAULT_SEO;
  return {
    title: {
      en: s.seoTitle?.en || DEFAULT_SEO.title.en,
      kn: s.seoTitle?.kn || DEFAULT_SEO.title.kn,
    },
    description: {
      en: s.seoDescription?.en || DEFAULT_SEO.description.en,
      kn: s.seoDescription?.kn || DEFAULT_SEO.description.kn,
    },
    ogImage: img(s.ogImage, 1200, 630) ?? DEFAULT_SEO.ogImage,
  };
}

export type SiteData = {
  content: Record<Locale, ContentDict>;
  settings: SiteSettings;
  seo: SeoData;
};

/** Fetch all site content from Sanity; falls back to static on any error/empty. */
export async function getSiteData(): Promise<SiteData> {
  try {
    const data = await client.fetch<{ homepage: any; settings: any }>(
      query,
      {},
      { next: { revalidate: 60 } },
    );
    return {
      content: { en: buildDict(data?.homepage, "en"), kn: buildDict(data?.homepage, "kn") },
      settings: buildSettings(data?.settings),
      seo: buildSeo(data?.settings),
    };
  } catch {
    return { content: staticContent, settings: DEFAULT_SETTINGS, seo: DEFAULT_SEO };
  }
}
