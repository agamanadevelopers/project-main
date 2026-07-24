/**
 * One-time migration: seeds Sanity with the site's current content + images so
 * the Studio opens pre-filled. Run once:
 *
 *   SANITY_WRITE_TOKEN=xxxxx npm run migrate
 *
 * Get the token at sanity.io/manage → API → Tokens → Add token → "Editor".
 * The token stays on your machine; it is never committed.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@sanity/client";
import { content } from "../src/lib/content";
import { images } from "../src/lib/images";
import { site } from "../src/lib/site";
import { projectId, dataset } from "../src/sanity/env";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("\n✗ Missing SANITY_WRITE_TOKEN.\n  Run:  SANITY_WRITE_TOKEN=xxxxx npm run migrate\n");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-12-01", useCdn: false });
const en = content.en;
const kn = content.kn;

// --- image upload (cached by key so shared images upload once) ---
const assetCache = new Map<string, string>();

async function uploadUrl(key: string, url: string) {
  if (assetCache.has(key)) return assetCache.get(key)!;
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buf, { filename: `${key}.jpg` });
  assetCache.set(key, asset._id);
  console.log(`  ↑ uploaded ${key}`);
  return asset._id;
}
async function uploadFile(key: string, filePath: string) {
  if (assetCache.has(key)) return assetCache.get(key)!;
  const buf = await readFile(filePath);
  const asset = await client.assets.upload("image", buf, { filename: path.basename(filePath) });
  assetCache.set(key, asset._id);
  console.log(`  ↑ uploaded ${key}`);
  return asset._id;
}
const imageRef = (id: string) => ({ _type: "image", asset: { _type: "reference", _ref: id } });

const ls = (a: string, b: string) => ({ en: a, kn: b });

async function run() {
  console.log(`\nMigrating content to Sanity project ${projectId}/${dataset}…\n`);
  console.log("Uploading images…");

  const pub = path.join(process.cwd(), "public");
  const [
    logoColor,
    logoWhite,
    heroImg,
    statementImg,
    whyImg,
    haveProjectImg,
    proj0,
    proj1,
    proj2,
  ] = await Promise.all([
    uploadFile("logo-color", path.join(pub, "agamana-logo-color.webp")),
    uploadFile("logo-white", path.join(pub, "agamana-logo-white.webp")),
    uploadUrl("hero", images.hero.src),
    uploadUrl("statement", images.statement.src),
    uploadUrl("why", images.why.src),
    uploadUrl("haveProject", images.haveProject.src),
    uploadUrl("proj0", images.projects[0].src),
    uploadUrl("proj1", images.projects[1].src),
    uploadUrl("proj2", images.projects[2].src),
  ]);

  // Hero slide backgrounds + service/project images, matching the current site.
  const heroBg = [heroImg, statementImg, whyImg];
  const serviceImg = [heroImg, haveProjectImg, proj0, statementImg, proj1];
  const projectImg = [proj0, proj1, proj2];

  console.log("Writing documents…");

  const homepage = {
    _id: "homepage",
    _type: "homepage",
    heroSlides: en.hero.slides.map((s, i) => ({
      _key: `slide${i}`,
      eyebrow: ls(s.eyebrow, kn.hero.slides[i].eyebrow),
      headline: ls(s.headline, kn.hero.slides[i].headline),
      supporting: ls(s.supporting, kn.hero.slides[i].supporting),
      primary: ls(s.primary, kn.hero.slides[i].primary),
      secondary: ls(s.secondary, kn.hero.slides[i].secondary),
      background: imageRef(heroBg[i]),
    })),

    audienceEyebrow: ls(en.audience.eyebrow, kn.audience.eyebrow),
    audienceHeading: ls(en.audience.heading, kn.audience.heading),
    audienceSupporting: ls(en.audience.supporting, kn.audience.supporting),
    audienceCards: en.audience.cards.map((c, i) => ({
      _key: `aud${i}`,
      title: ls(c.title, kn.audience.cards[i].title),
      body: ls(c.body, kn.audience.cards[i].body),
      cta: ls(c.cta, kn.audience.cards[i].cta),
    })),

    journeyEyebrow: ls(en.journey.eyebrow, kn.journey.eyebrow),
    journeyCaption: ls(en.journey.caption, kn.journey.caption),
    journeyIntro: ls(en.journey.intro, kn.journey.intro),
    journeyFootnote: ls(en.journey.footnote, kn.journey.footnote),
    journeySteps: en.journey.steps.map((s, i) => ({
      _key: `js${i}`,
      number: s.n,
      label: ls(s.label, kn.journey.steps[i].label),
      note: ls(s.note, kn.journey.steps[i].note),
    })),

    servicesEyebrow: ls(en.services.eyebrow, kn.services.eyebrow),
    servicesHeading: ls(en.services.heading, kn.services.heading),
    servicesBody: ls(en.services.body, kn.services.body),
    serviceItems: en.services.items.map((it, i) => ({
      _key: `sv${i}`,
      title: ls(it.title, kn.services.items[i].title),
      blurb: ls(it.blurb, kn.services.items[i].blurb),
      chips: it.chips.map((c, ci) => ({
        _key: `c${ci}`,
        _type: "localeString",
        ...ls(c, kn.services.items[i].chips[ci]),
      })),
      image: imageRef(serviceImg[i]),
    })),

    projectsEyebrow: ls(en.projects.eyebrow, kn.projects.eyebrow),
    projectsHeading: ls(en.projects.heading, kn.projects.heading),
    projectsIntro: ls(en.projects.intro, kn.projects.intro),
    projectItems: en.projects.items.map((p, i) => ({
      _key: `pj${i}`,
      name: ls(p.name, kn.projects.items[i].name),
      tag: ls(p.tag, kn.projects.items[i].tag),
      place: ls(p.place, kn.projects.items[i].place),
      blurb: ls(p.blurb, kn.projects.items[i].blurb),
      image: imageRef(projectImg[i]),
    })),

    whyEyebrow: ls(en.why.eyebrow, kn.why.eyebrow),
    whyHeading: ls(en.why.heading, kn.why.heading),
    whyLead: ls(en.why.lead, kn.why.lead),
    whyBody: ls(en.why.body, kn.why.body),
    whyTagline: ls(en.why.tagline, kn.why.tagline),
    whyImage: imageRef(whyImg),
    whyPillars: en.why.pillars.map((p, i) => ({
      _key: `wp${i}`,
      title: ls(p.title, kn.why.pillars[i].title),
      body: ls(p.body, kn.why.pillars[i].body),
    })),

    processEyebrow: ls(en.process.eyebrow, kn.process.eyebrow),
    processHeading: ls(en.process.heading, kn.process.heading),
    processBody: ls(en.process.body, kn.process.body),
    processSteps: en.process.steps.map((s, i) => ({
      _key: `ps${i}`,
      number: s.n,
      title: ls(s.title, kn.process.steps[i].title),
      body: ls(s.body, kn.process.steps[i].body),
    })),

    faqEyebrow: ls(en.faq.eyebrow, kn.faq.eyebrow),
    faqHeading: ls(en.faq.heading, kn.faq.heading),
    faqIntro: ls(en.faq.intro, kn.faq.intro),
    faqItems: en.faq.items.map((f, i) => ({
      _key: `fq${i}`,
      question: ls(f.q, kn.faq.items[i].q),
      answer: ls(f.a, kn.faq.items[i].a),
    })),

    ctaEyebrow: ls(en.cta.eyebrow, kn.cta.eyebrow),
    ctaHeadline: ls(en.cta.headline, kn.cta.headline),
    ctaBody: ls(en.cta.body, kn.cta.body),
  };

  const settings = {
    _id: "siteSettings",
    _type: "siteSettings",
    logoColor: imageRef(logoColor),
    logoWhite: imageRef(logoWhite),
    seoTitle: ls(
      "Agamana Projects — Your Trusted Project Partner in Karnataka",
      "ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ — ಕರ್ನಾಟಕದಲ್ಲಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಯೋಜನೆ ಪಾಲುದಾರ",
    ),
    seoDescription: ls(
      site.description,
      "ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ ಭೂ ಮಾಲೀಕರಿಗೆ ಮತ್ತು ಡೆವಲಪರ್‌ಗಳಿಗೆ ವಸತಿ ಯೋಜನೆಗಳನ್ನು ಯೋಜಿಸಲು, ನಿರ್ಮಿಸಲು, ಬ್ರಾಂಡ್ ಮಾಡಲು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ತರಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    ),
    email: site.email,
    phones: site.phones.map((p, i) => ({ _key: `ph${i}`, display: p, tel: site.phoneLinks[i] })),
    addressLine1: site.address.line1,
    addressLine2: site.address.line2,
    addressLine3: site.address.line3,
  };

  await client.createOrReplace(homepage);
  await client.createOrReplace(settings);

  console.log("\n✓ Done. Open /admin — Homepage and Site Settings are now filled in.\n");
}

run().catch((err) => {
  console.error("\n✗ Migration failed:", err.message || err);
  process.exit(1);
});
