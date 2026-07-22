/**
 * Image catalogue.
 *
 * These are curated Unsplash aerial / land / survey / nature photographs used
 * as high-quality placeholders. Replace `src` values with real Agamana drone
 * shots, layout renders and site-visit photography before launch — the shape
 * stays identical, so nothing else needs to change.
 */

export type Img = {
  src: string;
  alt: string;
  /** Approximate intrinsic ratio for layout stability (w / h). */
  w: number;
  h: number;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: {
    src: unsplash("1500382017468-9049fed747ef", 2000),
    alt: "Aerial view of open farmland divided into plots ready for development",
    w: 2000,
    h: 1333,
  },
  statement: {
    src: unsplash("1470071459604-3b5ec3a7fe05", 1600),
    alt: "Sunlight over rolling green land at the edge of a growing town",
    w: 1600,
    h: 1067,
  },
  ownLand: {
    src: unsplash("1501785888041-af3ef285b470", 1200),
    alt: "Untouched parcel of land beside a river, seen from above",
    w: 1200,
    h: 800,
  },
  haveProject: {
    src: unsplash("1503387762-592deb58ef4e", 1200),
    alt: "Layout plans and drawings spread out during project planning",
    w: 1200,
    h: 800,
  },
  why: {
    src: unsplash("1523712999610-f77fbcfc3843", 1400),
    alt: "Green terraced land shaped for a new residential layout",
    w: 1400,
    h: 933,
  },
  road: {
    src: unsplash("1449824913935-59a10b8d2000", 1400),
    alt: "New road cutting through open countryside toward a development site",
    w: 1400,
    h: 933,
  },
  projects: [
    {
      src: unsplash("1441974231531-c6227db76b6e", 1200),
      alt: "Tapovana — wooded residential plots framed by tall trees",
      w: 1200,
      h: 800,
    },
    {
      src: unsplash("1470252649378-9c29740c9fa8", 1200),
      alt: "Tribhuvana — open plotted development at golden hour",
      w: 1200,
      h: 800,
    },
    {
      src: unsplash("1518495973542-4542c06a5843", 1200),
      alt: "Nandanavana — greenery-led layout with landscaped avenues",
      w: 1200,
      h: 800,
    },
  ],
} as const;
