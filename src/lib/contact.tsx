"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Ctx = {
  open: boolean;
  openContact: () => void;
  closeContact: () => void;
};

const ContactContext = createContext<Ctx | null>(null);

export function ContactStateProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);
  return (
    <ContactContext.Provider value={{ open, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact(): Ctx {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within ContactStateProvider");
  return ctx;
}
