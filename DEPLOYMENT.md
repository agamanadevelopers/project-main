# Deploying Agamana Projects to Vercel

The site is a standard Next.js 16 app — Vercel auto-detects everything, so there's
no build configuration to write. Two ways to deploy:

## Option A — GitHub import (recommended, gives auto-deploy)

This connects the GitHub repo to Vercel so **every push to `main` deploys
automatically**.

1. Go to <https://vercel.com/new>.
2. Sign in (use **Continue with GitHub** as `agamanadevelopers`).
3. If prompted, install the **Vercel GitHub app** and grant it access to the
   `agamanadevelopers/project-main` repository.
4. Under "Import Git Repository", pick **project-main** → **Import**.
5. Framework preset: **Next.js** (auto-detected). Leave Build Command, Output and
   Install Command as the defaults.
6. Environment Variables: none required today (see below).
7. Click **Deploy**. First build takes ~1–2 minutes.

You'll get a URL like `https://project-main-xxxx.vercel.app`. Add a custom domain
later under **Project → Settings → Domains**.

## Option B — Vercel CLI (one-off deploy from your machine)

```bash
npm i -g vercel          # or: npx vercel
vercel login             # browser / email sign-in
vercel                   # preview deploy
vercel --prod            # production deploy
```

CLI deploys are not linked to GitHub auto-deploy — for continuous deployment use
Option A.

## Environment variables

None are required for the current build. When you wire the contact form to a real
endpoint (see below), add whatever keys that service needs in
**Project → Settings → Environment Variables**, then redeploy.

## Post-deploy checklist

Do these once the site is live so SEO and the contact flow are correct:

- [ ] **Set the real domain** — update `url` in `src/lib/site.ts` to your final
      domain (e.g. `https://www.agamanaprojects.com`). This drives the canonical
      URL, `sitemap.xml`, `robots.txt` and Open Graph URLs. Commit & push.
- [ ] **Custom domain** — add it in Vercel → Settings → Domains and point DNS.
- [ ] **Wire the contact form** — `src/components/contact/ContactModal.tsx`
      currently composes a `mailto:` and shows a success state. Point `onSubmit`
      at a real endpoint (Formspree, a Next.js route handler, or your CRM).
- [ ] **Real photography** — replace the Unsplash placeholders in
      `src/lib/images.ts` with Agamana drone / site / layout / branding photos.
- [ ] **Contact details** — confirm office address and phone numbers in
      `src/lib/site.ts` are final.
- [ ] **Verify** — check `/`, `/robots.txt`, `/sitemap.xml` and the OG image at
      `/opengraph-image` on the live domain; run Lighthouse.

## Local commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (all routes static)
npm run start   # serve the production build
npm run lint
```
