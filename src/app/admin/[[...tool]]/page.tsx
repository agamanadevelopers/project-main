/**
 * Sanity Studio route — the admin dashboard, mounted at /admin.
 * Editors log in with their Sanity account (managed, secure).
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function AdminStudioPage() {
  return <NextStudio config={config} />;
}
