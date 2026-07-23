import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Agamana Projects collects, uses and protects your information.",
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This Privacy Policy explains how {site.legalName} collects and uses the information you
        share with us — for example, when you submit an enquiry through our contact form or reach
        out by phone or email.
      </p>
      <h2>What we collect</h2>
      <p>
        We collect only the details you choose to provide — such as your name, phone number, email
        and a short description of your land or project. We use this information solely to respond
        to your enquiry and to discuss how we can help.
      </p>
      <h2>How we use it</h2>
      <p>
        Your information is used to contact you about your enquiry and our services. We do not sell
        or rent your personal information to third parties.
      </p>
      <h2>Contact</h2>
      <p>
        This policy is being finalised. For any questions about your data in the meantime, contact
        us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phones[0]}.
      </p>
    </LegalPage>
  );
}
