"use client";

import { createContext, useContext } from "react";
import { DEFAULT_SETTINGS, type SiteSettings } from "./settings-defaults";

const SettingsContext = createContext<SiteSettings>(DEFAULT_SETTINGS);

export function SettingsProvider({
  settings,
  children,
}: {
  settings: SiteSettings;
  children: React.ReactNode;
}) {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

/** Logo + contact details (from the CMS, falling back to site.ts defaults). */
export function useSettings(): SiteSettings {
  return useContext(SettingsContext);
}
