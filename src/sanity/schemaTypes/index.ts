import type { SchemaTypeDefinition } from "sanity";
import { localeString, localeText } from "./locale";
import { siteSettings } from "./settings";
import { homepage } from "./homepage";

export const schemaTypes: SchemaTypeDefinition[] = [
  localeString,
  localeText,
  siteSettings,
  homepage,
];
