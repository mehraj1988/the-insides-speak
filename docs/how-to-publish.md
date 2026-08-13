# How to publish — a guide for editors

No coding, no GitHub knowledge, no terminal. If this is your first time, someone needs to have finished the one-time setup in `cms-setup.md` and added you as a collaborator first — if `/admin/` won't let you log in, that's probably why.

## Logging in

1. Go to **https://mehraj1988.github.io/the-insides-speak/admin/**
2. Click **Login with GitHub**, and authorize if asked.
3. You'll land on a dashboard with three sections in the left sidebar: **Articles**, **Wire Digest Cards**, and **E-Paper Editions**.

## Adding a new article (The Thinking Pulse / Echoline)

Use this for a full, original piece — it gets its own page on the site.

1. Click **Articles → New Articles**.
2. Fill in:
   - **Title** — the headline.
   - **Excerpt** — one or two sentences. This is what shows on the preview card, so make it stand alone.
   - **Section** — usually "Echoline"; pick something else only if the piece genuinely belongs elsewhere.
   - **Date**, **Author / byline**.
   - **Featured on homepage** — toggle on to pin it to the homepage's "Featured" row (keep this to 2–3 articles at a time so it stays meaningful).
   - **Hero image** — click to upload a photo from your computer. It's added to the article automatically.
   - **Image credit** — e.g. "Photo by Jane Doe on Pexels." Leave blank if not applicable.
3. **Body** — click **Add Body** and pick a block type each time:
   - **Paragraph** — normal text.
   - **Subheading** — a section break within the article.
   - **Bulleted list** / **Numbered list**.
   - **Pulled-out stat / quote box** — for a stat callout or a highlighted quote, set apart visually from the surrounding text.

   Add as many blocks as the piece needs, in the order they should appear. Reorder by dragging, or delete with the trash icon on a block.
4. Click **Save** (top right).

## Adding a wire digest card (Beyond Borders / Health / most of Sports)

Use this when you're citing coverage from another outlet (ProPublica, KFF Health News, Mississippi Today, etc.) rather than publishing an original piece — this shows a headline, a one-line summary, and who reported it, without claiming it as our own reporting.

1. Click **Wire Digest Cards → New Wire Digest Cards**.
2. Fill in **Headline**, **Dek** (one or two sentences), **Source** (the outlet's name, e.g. "ProPublica"), **Date**, **Section**, and a **Photo** if you have one credited to use.
3. Click **Save**.

## Adding an E-Paper edition

1. Click **E-Paper Editions → New E-Paper Editions**.
2. Fill in the **Label** (e.g. "September – November 2026"), **Date** (any date within the period is fine — it just determines which edition shows as "Latest"), the **PDF link** (Google Drive or wherever it's hosted), and a **Cover image**.
3. Click **Save**.

## What happens after you click Save

Save doesn't put it on the live site immediately — it opens a **pull request** on GitHub, which you can think of as a draft with a safety check attached. This exists so one typo or a mismatched field can't take down the whole site by itself.

To actually publish:

1. Look at the sidebar — there's a workflow view showing your entry's status (Draft → In Review → Ready). You can move it through these from inside the CMS, or:
2. Open the repo on GitHub ([github.com/mehraj1988/the-insides-speak/pulls](https://github.com/mehraj1988/the-insides-speak/pulls)) and find the pull request the CMS created. It shows exactly what changed.
3. Click **Merge pull request**.
4. The site rebuilds automatically (takes about a minute) — refresh the live site and it's there.

If you want a second set of eyes before something goes out — the other editor, for instance — this PR is the natural place to ask; leave a comment on it before merging.

## Editing or removing something later

Go back into `/admin/`, open the entry from the relevant list, make changes, and Save (or use the **Delete entry** option). Same pull-request-then-merge flow applies.

## If something looks broken

- **Can't log in / "Login with GitHub" does nothing:** the one-time setup (`cms-setup.md`) may not be finished, or your GitHub account may not have been added as a collaborator yet.
- **An image won't upload:** check the file isn't enormous (a few MB is plenty for a web photo; resize first if it's a raw camera file).
- **The site didn't update after merging:** check the **Actions** tab on GitHub — if the build failed, it'll show a red ✕ with details. This usually means a required field was left empty; the CMS's own required-field markers should catch most of these before you even get to Save.
- Genuinely stuck: the site's content also lives in plain files under `content/` in the repo, editable directly through GitHub's own web interface (the pencil icon on any file) as a fallback if `/admin/` itself is ever unavailable — same underlying files, no special tools needed, just more manual.
