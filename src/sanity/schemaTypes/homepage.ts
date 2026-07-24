import { defineType, defineField, defineArrayMember } from "sanity";

// Small helpers to keep the (large) schema readable.
const lstr = (name: string, title: string, group?: string) =>
  defineField({ name, title, type: "localeString", group });
const ltext = (name: string, title: string, group?: string) =>
  defineField({ name, title, type: "localeText", group });

/** Singleton: all homepage content, grouped by section. */
export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "audience", title: "Who We Work With" },
    { name: "journey", title: "Journey" },
    { name: "services", title: "How We Help" },
    { name: "projects", title: "Projects" },
    { name: "why", title: "Why Agamana" },
    { name: "process", title: "Process" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "Closing CTA" },
  ],
  fields: [
    // ---- Hero ----
    defineField({
      name: "heroSlides",
      title: "Hero slides",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            lstr("eyebrow", "Eyebrow"),
            ltext("headline", "Headline (use line breaks for stacked lines)"),
            ltext("supporting", "Supporting text"),
            lstr("primary", "Primary button label"),
            lstr("secondary", "Secondary button label"),
            defineField({
              name: "background",
              title: "Background image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "eyebrow.en", media: "background" },
            prepare: ({ title, media }) => ({ title: title || "Slide", media }),
          },
        }),
      ],
    }),

    // ---- Who We Work With ----
    lstr("audienceEyebrow", "Eyebrow", "audience"),
    lstr("audienceHeading", "Heading", "audience"),
    ltext("audienceSupporting", "Supporting text", "audience"),
    defineField({
      name: "audienceCards",
      title: "Cards",
      type: "array",
      group: "audience",
      of: [
        defineArrayMember({
          type: "object",
          fields: [lstr("title", "Title"), ltext("body", "Body"), lstr("cta", "Button label")],
          preview: { select: { title: "title.en" } },
        }),
      ],
    }),

    // ---- Journey ----
    lstr("journeyEyebrow", "Eyebrow", "journey"),
    lstr("journeyCaption", "Heading", "journey"),
    ltext("journeyIntro", "Intro", "journey"),
    lstr("journeyFootnote", "Footnote", "journey"),
    defineField({
      name: "journeySteps",
      title: "Steps",
      type: "array",
      group: "journey",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number (e.g. 01)", type: "string" }),
            lstr("label", "Label"),
            lstr("note", "Note"),
          ],
          preview: { select: { title: "label.en", subtitle: "number" } },
        }),
      ],
    }),

    // ---- How We Help ----
    lstr("servicesEyebrow", "Eyebrow", "services"),
    lstr("servicesHeading", "Heading", "services"),
    ltext("servicesBody", "Body", "services"),
    defineField({
      name: "serviceItems",
      title: "Service cards",
      type: "array",
      group: "services",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            lstr("title", "Title"),
            ltext("blurb", "Description"),
            defineField({
              name: "chips",
              title: "Capability chips",
              type: "array",
              of: [defineArrayMember({ type: "localeString" })],
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: { select: { title: "title.en", media: "image" } },
        }),
      ],
    }),

    // ---- Projects ----
    lstr("projectsEyebrow", "Eyebrow", "projects"),
    lstr("projectsHeading", "Heading", "projects"),
    ltext("projectsIntro", "Intro", "projects"),
    defineField({
      name: "projectItems",
      title: "Projects",
      type: "array",
      group: "projects",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            lstr("name", "Name"),
            lstr("tag", "Tag"),
            lstr("place", "Place"),
            ltext("blurb", "Description"),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: { select: { title: "name.en", media: "image" } },
        }),
      ],
    }),

    // ---- Why Agamana ----
    lstr("whyEyebrow", "Eyebrow", "why"),
    lstr("whyHeading", "Heading", "why"),
    ltext("whyLead", "Lead", "why"),
    ltext("whyBody", "Body", "why"),
    lstr("whyTagline", "Tagline (on the lime card)", "why"),
    defineField({
      name: "whyImage",
      title: "Image",
      type: "image",
      group: "why",
      options: { hotspot: true },
    }),
    defineField({
      name: "whyPillars",
      title: "Feature cards",
      type: "array",
      group: "why",
      of: [
        defineArrayMember({
          type: "object",
          fields: [lstr("title", "Title"), ltext("body", "Body")],
          preview: { select: { title: "title.en" } },
        }),
      ],
    }),

    // ---- Process ----
    lstr("processEyebrow", "Eyebrow", "process"),
    lstr("processHeading", "Heading", "process"),
    ltext("processBody", "Body", "process"),
    defineField({
      name: "processSteps",
      title: "Steps",
      type: "array",
      group: "process",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number (e.g. 01)", type: "string" }),
            lstr("title", "Title"),
            ltext("body", "Body"),
          ],
          preview: { select: { title: "title.en", subtitle: "number" } },
        }),
      ],
    }),

    // ---- FAQ ----
    lstr("faqEyebrow", "Eyebrow", "faq"),
    lstr("faqHeading", "Heading", "faq"),
    ltext("faqIntro", "Intro", "faq"),
    defineField({
      name: "faqItems",
      title: "Questions",
      type: "array",
      group: "faq",
      of: [
        defineArrayMember({
          type: "object",
          fields: [lstr("question", "Question"), ltext("answer", "Answer")],
          preview: { select: { title: "question.en" } },
        }),
      ],
    }),

    // ---- Closing CTA ----
    lstr("ctaEyebrow", "Eyebrow", "cta"),
    lstr("ctaHeadline", "Headline", "cta"),
    ltext("ctaBody", "Body", "cta"),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
});
