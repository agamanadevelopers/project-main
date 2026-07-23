import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Agamana Projects website.",
};

export default function Page() {
  return (
    <LegalPage title="Terms & Conditions" updated="July 2026">
      <p>
        These Terms govern your use of the {site.legalName} website. By using this site, you agree
        to these Terms.
      </p>
      <h2>Use of this site</h2>
      <p>
        The content on this site is provided for general information about our services. It does
        not constitute a binding offer, a guarantee of outcomes, or professional, legal or
        financial advice.
      </p>
      <h2>Our services</h2>
      <p>
        {site.legalName} acts as a project partner supporting land owners and developers. The scope
        of any engagement is defined in a separate written agreement, which takes precedence over
        anything stated on this website.
      </p>
      <h2>Contact</h2>
      <p>
        Our full terms are being finalised. For clarification, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
