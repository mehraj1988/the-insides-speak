# The Insides Speak — website rebuild

A from-scratch, dynamic rebuild of [theinsidesspeak.com](https://www.theinsidesspeak.com/), built with Next.js so the team can review it as a free GitHub Pages staging site before deciding whether to point the real domain at it.

- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, statically exported — no server required.
- **Hosting (now):** GitHub Pages, auto-deployed on every push to `main`.
- **Hosting (later):** the same build works unmodified behind a custom domain — see [Going live on the real domain](#going-live-on-the-real-domain).

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build, outputs static files to ./out
npm run lint    # eslint
```

## Project structure

```
src/
  app/                 Routes (App Router). One folder per page.
  components/          Reusable UI (cards, header, forms, etc.)
  content/             ← Edit these files to update site content
    articles.ts         Original, fully-authored pieces (The Thinking Pulse / Echoline)
    wire-digests.ts      Curated Beyond Borders / Health / Sports citation cards
    editions.ts          E-Paper editions
    team.ts               The Team bios
    site.ts                Nav links, tagline, email, social links
    categories.ts          Section names & accent colors
  lib/utils.ts         Small helpers (date formatting, etc.)
```

There's no CMS and no database on purpose — the whole site is data-driven from the plain TypeScript files in `src/content/`. Editing content means editing those arrays; the homepage, listing pages, filters, and individual article pages all update automatically. No new component code is needed to add an article, a team member, or an E-Paper edition.

### Adding an article

Open `src/content/articles.ts` and append an object to the `articles` array. `body` is a list of typed blocks so real formatting (subheadings, stat call-outs, lists) survives, not just flat paragraphs:

```ts
{
  slug: "a-unique-url-friendly-slug",
  title: "Headline",
  excerpt: "One or two sentences shown on cards.",
  category: "echoline", // "beyond-borders" | "health" | "echoline" | "sports"
  date: "2026-08-15",
  author: "Byline",
  tags: [],
  featured: false, // true pins it to the homepage "Featured" row
  heroImage: "/images/articles/your-slug.jpg", // or null to fall back to generated cover art
  imageCredit: "Photo by X on Pexels", // or null
  body: [
    { type: "p", text: "Opening paragraph." },
    { type: "h", text: "A subheading" },
    { type: "p", text: "More prose." },
    { type: "ul", items: ["Bullet one", "Bullet two"] },
    { type: "callout", text: "A pulled-out stat or quote box." },
  ],
}
```

The article gets its own page at `/articles/<slug>/`, and shows up in `/articles/`, the relevant section page, and the homepage automatically.

### Adding curated wire coverage

Beyond Borders, Health, and most of Sports are citation cards, not full articles — that mirrors the source site, where those sections link out to partner reporting (ProPublica, KFF Health News, Mississippi Today, etc.) rather than hosting it. Add these to `src/content/wire-digests.ts` instead of `articles.ts`; see `DigestCard` for how they render (headline, dek, "Cited via [source]", no fabricated internal link).

### About images

Real hero/cover photos live in `public/images/{articles,digests,editions}/`. If an article or digest has no `image`/`heroImage` set, it falls back to generated abstract cover art (an SVG "pulse" pattern tinted to the section's color) from `src/components/article-cover.tsx` — useful for drafts before real art is ready.

### Editing sections, team, editions, nav

- **E-Paper editions:** `src/content/editions.ts` — add the newest edition to the top of the array with a link to the hosted PDF and a cover image.
- **Team bios:** `src/content/team.ts`.
- **Site name, tagline, email, nav links:** `src/content/site.ts`.
- **Section colors/descriptions:** `src/content/categories.ts`.

### The "Write To Us" form

The contact form (`src/components/contact-form.tsx`) has no backend to post to on GitHub Pages, so out of the box it opens the visitor's email client with the message pre-filled. To make it submit silently instead:

1. Create a free form at [Formspree](https://formspree.io) (or any similar static-form service) and grab your endpoint URL.
2. Add it as `NEXT_PUBLIC_FORM_ENDPOINT` — either in a local `.env.local` file, or as a **repository variable/secret** plus a matching `env:` line in `.github/workflows/deploy.yml`'s build step, so it's baked in at build time.

## Deploying to GitHub Pages

Already wired up — `.github/workflows/deploy.yml` builds and deploys on every push to `main` using GitHub's official Pages Actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`). One-time setup after the first push:

1. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Push to `main` (or re-run the workflow from the **Actions** tab).
3. The site publishes to `https://<your-username>.github.io/<repo-name>/`.

The build automatically detects whether it's a project page (`/repo-name/`) or a user/org page and sets the base path accordingly — nothing to configure by hand.

## Going live on the real domain

When the design is approved:

1. **Keep it on GitHub Pages with the custom domain** (simplest): add a `CNAME` file with `theinsidesspeak.com` under **Settings → Pages → Custom domain**, and point the domain's DNS at GitHub Pages (an `A`/`ALIAS` record to GitHub's IPs, or a `CNAME` record for a subdomain). GitHub issues the SSL certificate automatically. No code changes needed.
2. **Or move to a host with server features** (e.g. Vercel) if the team later wants a real backend — server-rendered pages, a newsletter API, a CMS, etc. Remove `output: "export"` from `next.config.ts` and the app runs as a normal Next.js server; everything else in this repo is unaffected.

## Notes on the current content

Content is mirrored from the live theinsidesspeak.com as of this writing:

- **The 12 Echoline pieces** in `articles.ts` are reproduced in full (headings, stat call-outs, prose) with their real hero photos, downloaded into `public/images/articles/`.
- **Beyond Borders, Health, and most of Sports** were never full articles on the source site — clicking one there just opened the credited stock photo, with no real outbound link. `wire-digests.ts` reproduces them honestly as citation cards (headline, dek, source, date) rather than inventing a detail page or a link that didn't exist.
- **A cleanup was made**: several articles' reference lists included "citations" that were actually disguised Google search-query links standing in for sources that don't appear to exist (a classic AI-generation artifact). Only links literally pointing at `google.com/search` were stripped; every other link and all prose was left untouched. Worth a look before this goes to production — `git log` / re-run the extraction if you want the raw version.
- **E-Paper** now points at the two real editions and their real cover art from `/gallery/`.

Re-running the source scrape: theinsidesspeak.com blocks plain `curl`/bot requests on most routes (503s) but not a real headless browser — see the conversation history for the Playwright-based approach, or ask Claude to redo it.
