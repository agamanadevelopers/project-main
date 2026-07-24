"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset, apiVersion } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

/**
 * Sanity Studio, embedded at /admin. Homepage and Site Settings are single
 * documents (singletons), so editors just click one item to edit.
 */
export default defineConfig({
  name: "agamana",
  title: "Agamana Projects",
  basePath: "/admin",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Homepage")
              .id("homepage")
              .child(S.document().schemaType("homepage").documentId("homepage")),
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
