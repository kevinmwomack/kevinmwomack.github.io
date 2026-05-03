# Project memory — kevinmwomack.github.io

> Notes for the next agent who opens this folder. Read this first.
> This file is for project context; it is not linked from the public site.

## What this project is

Kevin Womack's personal professional website, hosted on **GitHub Pages**
at https://kevinmwomack.github.io (User Pages convention — repo name
matches `<username>.github.io`, served from the root of the default
branch, deploys automatically on push).

## Current state (last updated by previous agent session)

- **Branch**: `initial-site-scaffold` (1 commit ahead of `main`)
- **Status**: scaffold complete; awaiting Kevin's content
- **Pushed to remote?** Likely yes — Kevin was asked to run
  `git push -u origin initial-site-scaffold` from his terminal.
  (The previous agent's sandbox couldn't reach GitHub directly.)
  Verify with `git log origin/initial-site-scaffold..HEAD` — if empty,
  the branch is up to date on the remote.

## Stack & decisions already made (don't re-litigate)

- **No Jekyll, no framework** — plain HTML, CSS, and a small
  `js/main.js` for the mobile nav toggle and footer year. Push to
  `main` deploys automatically; no GitHub Action needed.
- **Multi-page** site: `index.html`, `about.html`, `resume.html`,
  `contact.html`, `404.html`. Shared header/footer are duplicated
  in each file (acceptable trade-off for 4 pages).
- **Design direction**: warm & personable (Jenny Lihan-inspired) —
  see https://jennylihan.com — with a red accent system. Kevin's
  favorite color is red.
- **Type**: Fraunces (serif) for headings, Inter (sans) for body,
  loaded from Google Fonts.
- **Color tokens** live at the top of `css/styles.css` under
  `:root`. Brand red: `#C8102E`. To re-skin, edit those tokens
  rather than search-and-replacing.
- **Résumé**: HTML page (`resume.html`) plus a Download-PDF button
  pointing at `assets/documents/kevin-womack-resume.pdf`. PDF not
  yet uploaded.
- **Contact**: static cards (no form). Email, LinkedIn, GitHub,
  Instagram. Personal email is `kevinwomack@outlook.com`.
  Microblogging platform skipped per Kevin's instructions.
- **Accessibility baseline**: skip link, `aria-current` on active
  nav, keyboard focus rings, `prefers-reduced-motion` honored.
- **Responsive**: hamburger menu kicks in below 720px.

## File map

```
.
├── CLAUDE.md            # this file
├── README.md            # public-facing readme
├── index.html           # Home (hero w/ headshot placeholder)
├── about.html           # About (bio + sticky aside)
├── resume.html          # Résumé (HTML + PDF download button)
├── contact.html         # Contact cards
├── 404.html             # custom not-found
├── css/styles.css       # single shared stylesheet
├── js/main.js           # mobile-nav + footer year
└── assets/
    ├── images/.gitkeep      # ← drop headshot.jpg here
    ├── documents/.gitkeep   # ← drop kevin-womack-resume.pdf here
    └── icons/favicon.svg    # placeholder red "K"
```

## What Kevin needs to do (the punch-list)

Search every HTML file for `TODO` — those comments mark every spot
that needs real content. Specifically:

1. **Headshot** — save as `assets/images/headshot.jpg`, then in
   `index.html` swap the `<div class="hero__photo" data-placeholder>`
   for `<img class="hero__photo" src="assets/images/headshot.jpg"
   alt="Portrait of Kevin Womack" />`.
2. **Résumé PDF** — save as
   `assets/documents/kevin-womack-resume.pdf`. The Download button
   already points there.
3. **LinkedIn username** — search for
   `<!-- TODO: linkedin username -->` (appears in every page footer
   and the contact card). Replace with the slug.
4. **Body copy** on each page — the `<!-- TODO: ... -->` comments
   describe what each spot expects (headline, intro paragraph,
   bullet points, etc.).
5. **Page descriptions** — the `<meta name="description">` tag at
   the top of each page also has a TODO.
6. **OG image** (optional) — for nicer link previews, drop a
   1200×630 image at `assets/images/og-card.png` and uncomment the
   `<meta property="og:image">` line in `index.html`.

## Going live

When Kevin's content is in:

```bash
git add -A                      # or specific files
git commit -m "Add real content"
git push                        # to initial-site-scaffold
# Then on GitHub:
#  - Open a PR: initial-site-scaffold → main
#  - Merge it
# Pages auto-deploys to https://kevinmwomack.github.io within seconds.
```

**Local preview** (any time):

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Open / future questions

- **Custom domain** (e.g. kevinwomack.com) — not yet set up. If
  Kevin wants this later: GitHub Settings → Pages → Custom domain;
  configure DNS (CNAME for subdomain, A/ALIAS for apex). Add a
  `CNAME` file at the repo root with the domain name only.
- **Content additions Kevin mentioned for later**: blog/writing
  section, project portfolio cards on the home page, embedded
  teaching videos. None scaffolded yet — easy to add when ready.
- **Microblogging link** (Twitter/X/Bluesky/Mastodon) — Kevin
  declined for now; can be added later via the social-list block
  in the footer.

## Sandbox quirk to be aware of

The Cowork sandbox filesystem couldn't `unlink()` files inside
`.git/` during the initial commit. Workaround used: rename
`.git/index.lock` → `.git/index.lock.bak`. Result: a handful of
inert `tmp_obj_*` files and `*.lock.bak` files remain inside
`.git/objects/` and `.git/`. They are harmless (git ignores them),
but Kevin can vacuum them from his own terminal anytime:

```bash
git gc --prune=now
# or:
rm -f .git/index.lock* .git/objects/*/tmp_obj_* .git/objects/maintenance.lock
```

## Teammate sites used as reference

- https://tylerburleigh.com — academic / multi-page / embedded résumé
- https://jennylihan.com — warm & personable / single-page-scroll /
  PDF résumé (← closest to Kevin's chosen direction)
- https://toshaligoel.github.io — most minimal / multi-page / PDF
  résumé in nav
