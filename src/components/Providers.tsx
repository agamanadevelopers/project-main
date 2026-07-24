"use client";

import { LanguageProvider, type Locale } from "@/lib/i18n";
import { SettingsProvider } from "@/lib/settings";
import { ContactStateProvider } from "@/lib/contact";
import { ContactModal } from "@/components/contact/ContactModal";
import type { ContentDict } from "@/lib/content";
import type { SiteSettings } from "@/lib/settings-defaults";

/** App-wide client providers: content (CMS), language, settings, contact popup. */
export function Providers({
  content,
  settings,
  children,
}: {
  content: Record<Locale, ContentDict>;
  settings: SiteSettings;
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider content={content}>
      <SettingsProvider settings={settings}>
        <ContactStateProvider>
          {children}
          <ContactModal />
        </ContactStateProvider>
      </SettingsProvider>
    </LanguageProvider>
  );
}
