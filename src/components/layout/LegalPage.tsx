import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

/**
 * Self-contained shell for legal / policy pages: a minimal sticky header (logo +
 * back-to-home) so we avoid the homepage's in-page hash nav, the content column,
 * and the shared site footer.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${site.name} — home`}
          >
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full bg-lime font-display text-lg leading-none text-teal-deep"
            >
              A
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-ink">Agamana</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} aria-hidden /> Back to home
          </Link>
        </Container>
      </header>

      <main className="flex-1 bg-paper">
        <Container className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-medium uppercase tracking-eyebrow text-ink-soft">
            Last updated: {updated}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
            {title}
          </h1>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:decoration-lime-deep [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
            {children}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
