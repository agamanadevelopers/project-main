import { site } from "./site";

export type SitePhone = { display: string; tel: string };

/** Logo + contact details the UI needs at runtime (editable in the CMS). */
export type SiteSettings = {
  logoColor: string;
  logoWhite: string;
  email: string;
  phones: SitePhone[];
  address: { line1: string; line2: string; line3: string };
};

/** SEO used server-side for metadata (per locale). */
export type SeoData = {
  title: { en: string; kn: string };
  description: { en: string; kn: string };
  ogImage: string;
};

export const DEFAULT_SETTINGS: SiteSettings = {
  logoColor: "/agamana-logo-color.webp",
  logoWhite: "/agamana-logo-white.webp",
  email: site.email,
  phones: site.phones.map((display, i) => ({ display, tel: site.phoneLinks[i] })),
  address: { line1: site.address.line1, line2: site.address.line2, line3: site.address.line3 },
};

export const DEFAULT_SEO: SeoData = {
  title: {
    en: "Agamana Projects — Your Trusted Project Partner in Karnataka",
    kn: "ಆಗಮನ ಪ್ರಾಜೆಕ್ಟ್ಸ್ — ಕರ್ನಾಟಕದಲ್ಲಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಯೋಜನೆ ಪಾಲುದಾರ",
  },
  description: { en: site.description, kn: site.description },
  ogImage: "/opengraph-image",
};
