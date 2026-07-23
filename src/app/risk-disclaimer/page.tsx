import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Risk Disclaimer",
  description: "Important information about the risks in land development and real estate.",
};

export default function Page() {
  return (
    <LegalPage title="Risk Disclaimer" updated="July 2026">
      <p>
        Any information about land, projects, layouts, timelines or costs shown on this website is
        indicative and provided for general guidance only.
      </p>
      <h2>Land & real-estate risk</h2>
      <p>
        Land development and real estate involve inherent risks. Outcomes depend on statutory
        approvals, market conditions, site factors and other variables outside our control. Nothing
        on this site should be treated as a promise of returns, appreciation or a specific result.
      </p>
      <h2>Do your own due diligence</h2>
      <p>
        Please carry out your own due diligence and seek independent legal, financial and technical
        advice before making any decision relating to land or a project.
      </p>
      <h2>Contact</h2>
      <p>
        For project-specific details, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phones[0]}.
      </p>
    </LegalPage>
  );
}
