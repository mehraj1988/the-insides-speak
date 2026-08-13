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
content/               ← Edit these to update articles/digests/editions
  articles/<slug>.md     One file per original, fully-authored piece
  wire-digests/<id>.md   One file per curated Beyond Borders/Health/Sports card
  editions/<slug>.md     One file per E-Paper edition
public/
  admin/                Decap CMS — the browser-based editing UI, at /admin/
  images/{articles,digests,editions}/   Real photos, committed to the repo
docs/
  cms-setup.md          One-time engineering setup for /admin/ (do this first)
  how-to-publish.md     Day-to-day guide for the two editors, no code involved
src/
  app/                 Routes (App Router). One folder per page.
  components/          Reusable UI (cards, header, forms, etc.)
  content/             Types + build-time loaders that read content/*.md
    articles.ts          Article/ArticleBodyBlock types + pure helpers (client-safe)
    articles-data.ts      Reads content/articles/*.md — server-only
    wire-digests.ts        Reads content/wire-digests/*.md — server-only
    editions.ts             Reads content/editions/*.md — server-only
    team.ts, site.ts, categories.ts   Small, rarely-changed config
  lib/utils.ts         Small helpers (date formatting, etc.)
```

### How content actually gets added

**The two editors use `/admin/`** — a form-based editor (Decap CMS) at `https://mehraj1988.github.io/the-insides-speak/admin/` that logs in with GitHub and commits directly to `content/*.md`, no TypeScript or git required. See **[docs/cms-setup.md](docs/cms-setup.md)** for the (one-time, ~10 minute) setup this needs, and **[docs/how-to-publish.md](docs/how-to-publish.md)** for the editor-facing guide.

**Editing a `content/*.md` file directly** (through GitHub's own web UI, or locally) also works and needs no new tooling — it's the same files the CMS writes, useful as a fallback if `/admin/` is ever unreachable. Each file's frontmatter mirrors the `Article`/`WireDigest`/`Edition` TypeScript types in `src/content/`; `body` is a list of typed blocks (`p`, `h`, `ul`/`ol`, `callout`) rather than one prose blob, so real formatting survives:

```yaml
---
title: Headline
excerpt: One or two sentences shown on cards.
category: echoline # beyond-borders | health | echoline | sports
date: '2026-08-15'
author: Byline
tags: []
featured: false # true pins it to the homepage "Featured" row
heroImage: /images/articles/a-unique-url-friendly-slug.jpg # or omit
imageCredit: Photo by X on Pexels # or omit
body:
  - type: p
    text: Opening paragraph.
  - type: h
    text: A subheading
  - type: ul
    items: [Bullet one, Bullet two]
  - type: callout
    text: A pulled-out stat or quote box.
---
```

The filename (minus `.md`) is the slug — `content/articles/a-unique-url-friendly-slug.md` becomes `/articles/a-unique-url-friendly-slug/`. A malformed or missing required field fails the build loudly (naming the exact file) rather than shipping a broken page — see `src/content/load-markdown.ts`.

Either way, the article/digest/edition then shows up in the relevant listing, filters, and the homepage automatically — no component code changes needed.

### Adding curated wire coverage

Beyond Borders, Health, and most of Sports are citation cards, not full articles — that mirrors the source site, where those sections link out to partner reporting (ProPublica, KFF Health News, Mississippi Today, etc.) rather than hosting it. Add these under `content/wire-digests/` instead of `content/articles/`; see `DigestCard` for how they render (headline, dek, "Cited via [source]", no fabricated internal link).

### About images

Real hero/cover photos live in `public/images/{articles,digests,editions}/` and are uploaded straight from `/admin/`, or added by hand for direct file edits. If an article or digest has no `image`/`heroImage` set, it falls back to generated abstract cover art (an SVG "pulse" pattern tinted to the section's color) from `src/components/article-cover.tsx` — useful for drafts before real art is ready. All image `<img>` tags go through `withBasePath()` in `src/lib/utils.ts` — do **not** hardcode `/images/...` in a component; use that helper, or a bare `/images/...` string in content frontmatter (the loader/render layer handles the prefix).

### Editing team, site config, nav

- **Team bios:** `src/content/team.ts`.
- **Site name, tagline, email, nav links:** `src/content/site.ts`.
- **Section colors/descriptions:** `src/content/categories.ts`.

These three are small and rarely change, so they were left as plain TypeScript rather than moved into the CMS.

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

- **The 12 Echoline pieces** in `content/articles/` are reproduced in full (headings, stat call-outs, prose) with their real hero photos, downloaded into `public/images/articles/`.
- **Beyond Borders, Health, and most of Sports** were never full articles on the source site — clicking one there just opened the credited stock photo, with no real outbound link. `content/wire-digests/` reproduces them honestly as citation cards (headline, dek, source, date) rather than inventing a detail page or a link that didn't exist.
- **A cleanup was made**: several articles' reference lists included "citations" that were actually disguised Google search-query links standing in for sources that don't appear to exist (a classic AI-generation artifact). Only links literally pointing at `google.com/search` were stripped; every other link and all prose was left untouched. Worth a look before this goes to production — `git log` / re-run the extraction if you want the raw version.
- **E-Paper** now points at the two real editions and their real cover art from `/gallery/`.

Re-running the source scrape: theinsidesspeak.com blocks plain `curl`/bot requests on most routes (503s) but not a real headless browser — see the conversation history for the Playwright-based approach, or ask Claude to redo it.
