import { defineType, defineField } from "sanity";

/** Singleton: brand, SEO defaults and contact details. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "brand", title: "Brand & Logo", default: true },
    { name: "seo", title: "SEO / Social" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    // Brand
    defineField({
      name: "logoColor",
      title: "Logo — colour (for light backgrounds: navbar)",
      type: "image",
      group: "brand",
      options: { hotspot: true },
    }),
    defineField({
      name: "logoWhite",
      title: "Logo — white (for dark backgrounds: footer)",
      type: "image",
      group: "brand",
      options: { hotspot: true },
    }),
    // SEO
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "localeString",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "localeText",
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Social share image (1200×630)",
      type: "image",
      group: "seo",
      options: { hotspot: true },
    }),
    // Contact
    defineField({ name: "email", title: "Email", type: "string", group: "contact" }),
    defineField({
      name: "phones",
      title: "Phone numbers",
      type: "array",
      group: "contact",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "display", title: "Display (e.g. 7090 644 644)", type: "string" }),
            defineField({ name: "tel", title: "Dial (e.g. +917090644644)", type: "string" }),
          ],
          preview: { select: { title: "display" } },
        },
      ],
    }),
    defineField({ name: "addressLine1", title: "Address line 1", type: "string", group: "contact" }),
    defineField({ name: "addressLine2", title: "Address line 2", type: "string", group: "contact" }),
    defineField({ name: "addressLine3", title: "Address line 3", type: "string", group: "contact" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
