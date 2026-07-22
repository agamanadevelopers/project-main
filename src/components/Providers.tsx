"use client";

import { LanguageProvider } from "@/lib/i18n";
import { ContactStateProvider } from "@/lib/contact";
import { ContactModal } from "@/components/contact/ContactModal";

/** App-wide client providers: language + contact popup. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ContactStateProvider>
        {children}
        <ContactModal />
      </ContactStateProvider>
    </LanguageProvider>
  );
}
