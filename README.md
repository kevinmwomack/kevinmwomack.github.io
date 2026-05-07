# kevinmwomack.github.io

Source for my personal website, hosted on GitHub Pages at
**https://kevinmwomack.github.io**.

## Stack

Plain HTML, CSS, and a touch of JavaScript — no Jekyll, no build step.
Pushes to `main` deploy automatically.

## Structure

```
.
├── index.html          # Home
├── about.html          # About
├── resume.html         # Résumé / CV (also links to PDF)
├── contact.html        # Contact
├── 404.html            # Custom not-found page
├── css/
│   └── styles.css      # Single shared stylesheet
├── js/
│   └── main.js         # Mobile-nav toggle, small enhancements
└── assets/
    ├── images/         # Headshot, page photos, etc.
    ├── documents/      # Résumé PDF and other downloads
    └── icons/          # Favicon and social icons
```

## Editing content

Every page has clearly-marked placeholders in HTML comments
(`<!-- TODO: ... -->`). Search for `TODO` to find every spot that
needs your real content.

## Local preview

From the repo root, run any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
