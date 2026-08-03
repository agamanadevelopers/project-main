import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24 pt-28 sm:pt-32">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
