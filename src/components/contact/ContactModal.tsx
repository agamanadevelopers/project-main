"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X, MapPin, Phone, Mail, Check, ArrowUpRight } from "lucide-react";
import { useContact } from "@/lib/contact";
import { useT } from "@/lib/i18n";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

type Errors = { name?: string; phone?: string; email?: string };

export function ContactModal() {
  const { open, closeContact } = useContact();
  // Mount fresh each time it opens, so form state resets without an effect.
  if (!open) return null;
  return <ContactDialog onClose={closeContact} />;
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  const t = useT().contact;
  const settings = useSettings();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const uid = useId();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "own-land",
    message: "",
  });

  // Lock scroll + focus the first field on mount.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(id);
    };
  }, []);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = t.required;
    if (!form.phone.trim()) next.phone = t.required;
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.invalidEmail;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // No backend yet: compose an email to the office and show a success state.
    // Replace this block with a POST to your CRM / form endpoint when ready.
    const subject = encodeURIComponent(`New enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "-"}\n` +
        `Interest: ${form.interest === "own-land" ? "I own land" : "I have a project"}\n\n${form.message}`,
    );
    try {
      window.open(`mailto:${settings.email}?subject=${subject}&body=${body}`, "_blank");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 500);
  };

  const inputCls =
    "w-full rounded-2xl border border-line bg-paper px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal focus:ring-2 focus:ring-teal/15";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${uid}-title`}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label={t.close}
        onClick={onClose}
        className="absolute inset-0 bg-teal-deep/60 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease]"
      />

      {/* Panel */}
      <div className="relative grid w-full max-w-4xl overflow-hidden rounded-t-3xl bg-card shadow-2xl motion-safe:animate-[popIn_0.28s_var(--ease-out-soft)] sm:rounded-3xl md:grid-cols-[0.9fr_1.1fr]">
        {/* Info pane */}
        <div className="relative hidden flex-col justify-between gap-8 bg-teal p-8 text-white md:flex">
          <div>
            <h2 id={`${uid}-title`} className="font-display text-3xl font-bold tracking-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-white/70">{t.subtitle}</p>
          </div>

          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-lime" />
              <span className="not-italic leading-relaxed text-white/80">
                {settings.address.line1}
                <br />
                {settings.address.line2}
                <br />
                {settings.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-lime" />
              <span className="flex flex-col gap-1">
                {settings.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="text-white/80 hover:text-lime">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-lime" />
              <a href={`mailto:${settings.email}`} className="text-white/80 hover:text-lime">
                {settings.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Form pane */}
        <div className="relative max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-cream text-ink transition-colors hover:bg-line"
          >
            <X size={20} />
          </button>

          {/* Mobile-only heading */}
          <div className="md:hidden">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{t.title}</h2>
            <p className="mt-2 text-[0.95rem] text-ink-soft">{t.subtitle}</p>
          </div>

          {success ? (
            <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-teal-deep">
                <Check size={30} strokeWidth={2.6} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
                {t.successTitle}
              </h3>
              <p className="mt-3 max-w-sm text-[0.98rem] leading-relaxed text-ink-soft">{t.successBody}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ink-soft">
                <span>{t.orCall}:</span>
                {settings.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="font-semibold text-ink underline decoration-lime decoration-2 underline-offset-4"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-8 rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-paper hover:bg-teal-deep"
              >
                {t.close}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 flex flex-col gap-4 md:mt-0">
              <div>
                <label htmlFor={`${uid}-name`} className="mb-1.5 block text-sm font-medium text-ink">
                  {t.name}
                </label>
                <input
                  ref={firstFieldRef}
                  id={`${uid}-name`}
                  value={form.name}
                  onChange={update("name")}
                  aria-invalid={!!errors.name}
                  className={inputCls}
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-phone`} className="mb-1.5 block text-sm font-medium text-ink">
                    {t.phone}
                  </label>
                  <input
                    id={`${uid}-phone`}
                    value={form.phone}
                    onChange={update("phone")}
                    aria-invalid={!!errors.phone}
                    className={inputCls}
                    inputMode="tel"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor={`${uid}-email`} className="mb-1.5 block text-sm font-medium text-ink">
                    {t.email}
                  </label>
                  <input
                    id={`${uid}-email`}
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={!!errors.email}
                    className={inputCls}
                    inputMode="email"
                    autoComplete="email"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <fieldset>
                <legend className="mb-1.5 text-sm font-medium text-ink">{t.interest}</legend>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { v: "own-land", label: t.interestOwnLand },
                    { v: "have-project", label: t.interestHaveProject },
                  ].map((opt) => (
                    <label
                      key={opt.v}
                      className={cn(
                        "flex cursor-pointer items-center justify-center rounded-2xl border px-3 py-2.5 text-center text-[0.9rem] font-medium transition-colors",
                        form.interest === opt.v
                          ? "border-teal bg-teal text-paper"
                          : "border-line bg-paper text-ink-soft hover:border-teal/40",
                      )}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={opt.v}
                        checked={form.interest === opt.v}
                        onChange={update("interest")}
                        className="sr-only"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor={`${uid}-message`} className="mb-1.5 block text-sm font-medium text-ink">
                  {t.message}
                </label>
                <textarea
                  id={`${uid}-message`}
                  value={form.message}
                  onChange={update("message")}
                  rows={3}
                  placeholder={t.messagePlaceholder}
                  className={cn(inputCls, "resize-none")}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-1 inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-lime px-7 font-semibold text-teal-deep transition-all duration-200 hover:bg-lime-deep hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? t.sending : t.send}
                {!submitting && (
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-deep/10 transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </span>
                )}
              </button>

              {/* Call option (also on mobile where info pane is hidden) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-sm text-ink-soft md:hidden">
                <span>{t.orCall}:</span>
                {settings.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="font-semibold text-ink">
                    {p.display}
                  </a>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
