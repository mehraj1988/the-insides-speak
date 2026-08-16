# CMS setup (one-time, ~5 minutes)

This wires up `/admin/` — the editorial team's "Add Article" form — so it can commit content directly to this repo. It's [Decap CMS](https://decapcms.org/), a free, open-source, git-backed CMS: no database, no monthly bill, no new hosting for the site itself.

The one thing a static site can't do on its own is the login handshake (it needs a secret exchanged server-side). We're using [**DecapBridge**](https://decapbridge.com/), a free hosted service built specifically for this — it's the simplest option: no Cloudflare account, no OAuth App, no server of your own to deploy. The trade-off, so it's an informed choice: DecapBridge holds a token with write access to this repo, and editors log in with a DecapBridge account (email/password, or Google/Microsoft SSO) rather than their own GitHub identity. If that trade-off ever stops feeling right, the self-hosted alternative (your own GitHub OAuth App + a Cloudflare Worker, no third party involved) is documented at the bottom of this file — the rest of the CMS (the collections, fields, editorial workflow) is identical either way, only the `backend:` block in `config.yml` changes.

Do this as whoever owns the `mehraj1988/the-insides-speak` GitHub repo.

## 1. Create a scoped GitHub token

DecapBridge needs a token to read/write this repo on your behalf — give it access to *only* this repo, not your whole account:

1. Go to [github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta) (fine-grained tokens).
2. Click **Generate new token**.
3. **Repository access:** "Only select repositories" → choose `mehraj1988/the-insides-speak`.
4. **Permissions → Repository permissions:**
   - **Contents:** Read and write
   - **Pull requests:** Read and write (needed for the editorial workflow — saves open a PR instead of publishing straight to `main`)
5. Generate the token and copy it somewhere safe — GitHub only shows it once.

## 2. Register the site with DecapBridge

1. Sign up at [decapbridge.com](https://decapbridge.com/) (free).
2. Add a new site: Git provider **GitHub**, repository `mehraj1988/the-insides-speak`.
3. Paste in the token from step 1 when asked.
4. DecapBridge gives you a `backend:` block for `config.yml` — copy it.

## 3. Update config.yml

Open [`public/admin/config.yml`](../public/admin/config.yml) in this repo and replace the placeholder `backend:` block at the top with the exact one DecapBridge just gave you (it'll look similar in shape to what's there now, but the real values matter — use theirs, not the placeholder). Leave everything below `backend:` (the `publish_mode` line, and all three `collections:`) untouched — that part doesn't change.

Commit and push. The next deploy publishes the updated `/admin/`.

## 4. Invite the two editors

From your DecapBridge site dashboard, **Manage collaborators → invite by email**. Each editor gets an email, sets up their own DecapBridge login (password, or Google/Microsoft), and that's it — no GitHub account needed on their end.

(This is also how to revoke access later — remove them as a collaborator in DecapBridge.)

## 5. Do one dry run yourself

Before handing this off:

1. Go to `https://mehraj1988.github.io/the-insides-speak/admin/`.
2. Log in.
3. Create a throwaway article with a hero image, click **Save** (this opens a pull request — that's `publish_mode: editorial_workflow` working as intended, a safety net so a bad entry doesn't go straight to the live site).
4. Check GitHub for the new PR, merge it, and confirm the GitHub Actions deploy runs and the article shows up on the live site.
5. Delete the throwaway article (through the CMS, or by deleting its file and image and pushing).

Once that round-trip works, send the two editors [`docs/how-to-publish.md`](./how-to-publish.md) and you're done.

## Ongoing (not urgent, just don't forget it exists)

- Decap CMS is loaded via CDN (`unpkg.com/decap-cms@^3.0.0`) in `public/admin/index.html`, so it updates itself within that major version automatically — no action needed most of the time.
- There's a known, currently-unpatched moderate-severity XSS advisory in Decap CMS ([CVE-2025-57520](https://github.com/advisories/GHSA-xp8g-32qh-mv28)) that requires an *untrusted* contributor tricking a *trusted* admin into previewing malicious content. With only the two vetted editors as collaborators, there's no untrusted-contributor role in this setup for that to exploit — but keep the collaborator list to people you actually trust, and check [the project's releases](https://github.com/decaporg/decap-cms/releases) occasionally in case a real fix ships.
- The GitHub token from step 1 is scoped to just this repo's contents and PRs, so if it's ever compromised the blast radius is limited to this repo — but if you ever suspect it's leaked, revoke it at [github.com/settings/tokens](https://github.com/settings/tokens) and issue a new one to DecapBridge.
- DecapBridge is a third-party service (by millisecond.studio, the team behind several Decap CMS community tools) — worth glancing at their [privacy policy](https://decapbridge.com/legal/privacy-policy) once, since they're holding a token that can write to this repo. If you'd rather not have any third party in the loop, switch to the self-hosted option below (nothing else about the CMS changes).

## Alternative: self-hosted, no third party (more setup, more control)

If you'd rather not have DecapBridge (or any third party) holding repo access, this does the exact same job with your own GitHub OAuth App and your own free Cloudflare Worker instead — about 10 minutes across two services you own, and editors log in with their real GitHub account so commits show who actually wrote what.

1. **Register a GitHub OAuth App:** [github.com/settings/applications/new](https://github.com/settings/applications/new). Homepage URL `https://mehraj1988.github.io/the-insides-speak/`; leave the callback URL as a placeholder for now. Generate a client secret and copy both the Client ID and Secret.
2. **Deploy [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) to Cloudflare Workers** (free tier, 100k requests/day) — there's a one-click deploy button on that repo, or `npx wrangler deploy` if you're comfortable with a terminal. Set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` (encrypted) as Worker secrets.
3. Edit the OAuth App's callback URL to `<your-worker-url>/callback`.
4. In `config.yml`, use:
   ```yaml
   backend:
     name: github
     repo: mehraj1988/the-insides-speak
     branch: main
     base_url: https://<your-worker-url>.workers.dev
   ```
5. Add editors as GitHub collaborators (**repo → Settings → Collaborators**) instead of DecapBridge invitees.

Everything from step 5 ("do one dry run yourself") above is the same either way.
