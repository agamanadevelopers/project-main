import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Called by a Sanity webhook whenever content is published, so the site (and
 * its metadata, e.g. the social image) refreshes right away instead of waiting
 * for the timed revalidation. Protected by a shared secret in the URL:
 *   https://…/api/revalidate?secret=YOUR_SECRET
 */
export async function POST(req: Request) {
  const secret = new URL(req.url).searchParams.get("secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: "Invalid secret" }, { status: 401 });
  }
  // Revalidate every route that uses the root layout (whole site + metadata).
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true, revalidated: true, now: Date.now() });
}
