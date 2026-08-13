# CMS setup (one-time, ~10 minutes)

This wires up `/admin/` — the editorial team's "Add Article" form — so it can log in with GitHub and commit content directly to this repo. It's [Decap CMS](https://decapcms.org/), a free, open-source, git-backed CMS: no database, no monthly bill, no new hosting. The only thing missing out of the box is the login handshake, which needs a small piece GitHub itself doesn't provide for a plain static site — steps 1–3 below set that up, once, ever.

Do this as whoever owns the `mehraj1988/the-insides-speak` GitHub repo and is willing to create one free Cloudflare account.

## 1. Register a GitHub OAuth App

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App** (direct link: [github.com/settings/applications/new](https://github.com/settings/applications/new)).
2. Fill in:
   - **Application name:** `The Insides Speak CMS` (anything works)
   - **Homepage URL:** `https://mehraj1988.github.io/the-insides-speak/`
   - **Authorization callback URL:** you'll fill this in after step 2 — it needs your Cloudflare Worker's URL first. Put a placeholder like `https://example.com/callback` for now; you'll edit it in a minute.
3. Click **Register application**.
4. Click **Generate a new client secret**. Copy both the **Client ID** and the **Client Secret** somewhere safe — you'll paste them into Cloudflare next, and the secret is only shown once.

## 2. Deploy the auth proxy to Cloudflare Workers (free)

This is the missing piece: GitHub's login flow needs a client secret exchanged server-side, and a static site has no server. [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) is a small, actively-maintained open-source script (compatible with Decap CMS, not just its own namesake project) that does only this one job, hosted for free on Cloudflare's Workers free tier (100,000 requests/day — this team will use a handful a month).

1. Create a free Cloudflare account at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) if you don't have one.
2. Go to the [sveltia-cms-auth repo](https://github.com/sveltia/sveltia-cms-auth) and follow its deploy instructions (there's a one-click "Deploy to Cloudflare Workers" button, or clone it and run `npx wrangler deploy` if you're comfortable with a terminal).
3. In the Cloudflare dashboard, open your new Worker → **Settings → Variables and Secrets**, and add:
   - `GITHUB_CLIENT_ID` — from step 1
   - `GITHUB_CLIENT_SECRET` — from step 1 (mark it as **Encrypt**)
4. Note your Worker's URL — it'll look like `https://sveltia-cms-auth.<your-subdomain>.workers.dev`.

## 3. Connect the two

1. Back in the GitHub OAuth App (step 1), edit the **Authorization callback URL** to `<your-worker-url>/callback` — e.g. `https://sveltia-cms-auth.yoursubdomain.workers.dev/callback`. Save.
2. Open [`public/admin/config.yml`](../public/admin/config.yml) in this repo and replace the placeholder:
   ```yaml
   backend:
     name: github
     repo: mehraj1988/the-insides-speak
     branch: main
     base_url: https://REPLACE-WITH-YOUR-WORKER-URL.workers.dev
   ```
   with your real Worker URL (no `/callback` on this one — just the base URL).
3. Commit and push. The next deploy will publish the updated `/admin/`.

## 4. Add the editors as repo collaborators

Decap CMS logs editors in with their own GitHub account, so each of the two editors needs push access to the repo:

**GitHub → repo → Settings → Collaborators → Add people**, and invite each editor's GitHub username or email. They accept the invite once; after that, `/admin/` recognizes them.

(This is also how to revoke access later — remove them as a collaborator.)

## 5. Do one dry run yourself

Before handing this off:

1. Go to `https://mehraj1988.github.io/the-insides-speak/admin/`.
2. Click **Login with GitHub**, authorize the app.
3. Create a throwaway article with a hero image, click **Save** (this opens a pull request — that's `publish_mode: editorial_workflow` working as intended, a safety net so a bad entry doesn't go straight to the live site).
4. Check GitHub for the new PR, merge it, and confirm the GitHub Actions deploy runs and the article shows up on the live site.
5. Delete the throwaway article (through the CMS, or by deleting its file and image and pushing).

Once that round-trip works, send the two editors [`docs/how-to-publish.md`](./how-to-publish.md) and you're done.

## Ongoing (not urgent, just don't forget it exists)

- Decap CMS is loaded via CDN (`unpkg.com/decap-cms@^3.0.0`) in `public/admin/index.html`, so it updates itself within that major version automatically — no action needed most of the time.
- There's a known, currently-unpatched moderate-severity XSS advisory in Decap CMS ([CVE-2025-57520](https://github.com/advisories/GHSA-xp8g-32qh-mv28)) that requires an *untrusted* contributor tricking a *trusted* admin into previewing malicious content. With only the two vetted editors as collaborators, there's no untrusted-contributor role in this setup for that to exploit — but keep the collaborator list to people you actually trust, and check [the project's releases](https://github.com/decaporg/decap-cms/releases) occasionally in case a real fix ships.
- If the GitHub OAuth client secret is ever exposed, regenerate it in the OAuth App settings and update the Cloudflare Worker's secret to match.
