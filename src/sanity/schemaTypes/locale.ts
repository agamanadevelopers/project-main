import { defineType, defineField } from "sanity";

/** Short translatable text (one line). Editors fill English + Kannada. */
export const localeString = defineType({
  name: "localeString",
  title: "Text (EN / ಕನ್ನಡ)",
  type: "object",
  options: { columns: 2 },
  fields: [
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "kn", title: "ಕನ್ನಡ (Kannada)", type: "string" }),
  ],
});

/** Longer translatable text (paragraph). */
export const localeText = defineType({
  name: "localeText",
  title: "Paragraph (EN / ಕನ್ನಡ)",
  type: "object",
  options: { columns: 2 },
  fields: [
    defineField({ name: "en", title: "English", type: "text", rows: 3 }),
    defineField({ name: "kn", title: "ಕನ್ನಡ (Kannada)", type: "text", rows: 3 }),
  ],
});
