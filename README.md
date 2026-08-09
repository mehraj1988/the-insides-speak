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
    articles.ts         The Thinking Pulse / Sports articles
    editions.ts          E-Paper monthly editions
    team.ts               The Team bios
    site.ts                Nav links, tagline, email, social links
    categories.ts          Section names & accent colors
  lib/utils.ts         Small helpers (date formatting, etc.)
```

There's no CMS and no database on purpose — the whole site is data-driven from the plain TypeScript files in `src/content/`. Editing content means editing those arrays; the homepage, listing pages, filters, and individual article pages all update automatically. No new component code is needed to add an article, a team member, or an E-Paper edition.

### Adding an article

Open `src/content/articles.ts` and append an object to the `articles` array:

```ts
{
  slug: "a-unique-url-friendly-slug",
  title: "Headline",
  excerpt: "One or two sentences shown on cards.",
  category: "beyond-borders", // "beyond-borders" | "health" | "echoline" | "sports"
  date: "2026-08-15",
  author: "Byline",
  tags: ["tag-one", "tag-two"],
  featured: false, // true pins it to the homepage "Featured" row
  body: ["Paragraph one.", "Paragraph two.", "..."],
}
```

The article gets its own page at `/articles/<slug>/`, shows up in `/articles/`, the relevant section page, the homepage, and generates its own cover art automatically (no image upload needed — see below).

### About the cover art

Article cards use generated abstract cover art (an SVG "pulse" pattern tinted to the section's color) instead of stock photography. That's a deliberate choice for a starter build: it needs no image licensing, no uploads, and it makes the four sections instantly recognizable by color. Swap in real photography later by editing `src/components/article-cover.tsx` and `article-card.tsx`.

### Editing sections, team, editions, nav

- **E-Paper editions:** `src/content/editions.ts` — add the newest edition to the top of the array with a link to the hosted PDF.
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

Every article, bio, and edition link in this build is **placeholder copy** written for this draft — it mirrors the sections and tone of the original site (Beyond Borders, Health, Echoline, Sports) but is not the original site's reporting. Swap it for live content, and add proper source credit for any syndicated/wire pieces, before this goes public on the real domain.
