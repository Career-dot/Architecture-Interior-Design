# Plinth Studio — Architecture &amp; Interior Design Template

A six-page HTML/CSS/JS template for an architecture and interior design
studio, built on Bootstrap 5.3 with a distinct hairline "construction
drawing" visual language. No build step required — open `index.html` in
a browser and it works.

## File structure

```
plinth-studio/
├── index.html              Homepage
├── about.html              Studio, values, timeline, team
├── services.html           Service list, process, FAQ
├── portfolio.html          Filterable project grid
├── project-detail.html     Single project template
├── contact.html            Enquiry form + studio details
│   ├── css/
│   │   └── style.css       All design tokens + component styles
│   ├── js/
│   │   └── script.js       Nav scroll state, portfolio filter, form validation
│   └── images/
│       ├── README.md       Placeholder → real-photo swap guide
│       ├── hero/
│       ├── about/
│       ├── team/
│       ├── projects/
│       └── gallery/
└── docs/
    ├── style-guide.html     Living style guide (colour, type, spacing, icons)
    └── style-guide.css      Layout styles for the guide only
```

## Getting started

1. Unzip and open `index.html` directly in a browser — no server or
   build step needed. Pages currently load placeholder photography from
   `picsum.photos` so everything renders immediately.
2. Before launch, replace the placeholder images per
   `assets/images/README.md`.
3. Review `docs/style-guide.html` for the full design system (colour
   palette, type scale, spacing scale, iconography, and live component
   samples) before making layout changes, so new work stays consistent.

## Dependencies (loaded via CDN, no install step)

- [Bootstrap 5.3.3](https://getbootstrap.com/) — grid, nav, forms, accordion, JS bundle
- [Google Fonts](https://fonts.google.com/) — Fraunces (display), Work Sans (body), IBM Plex Mono (labels/annotations)

If you need the site to work fully offline, download these and update
the `<link>`/`<script>` tags in each HTML file's `<head>`/footer to point
at local copies instead of the CDN URLs.

## Editing conventions

- **Design tokens** live once, at the top of `assets/css/style.css`
  (`:root { --color-..., --font-..., --radius, ... }`). Change a token
  there rather than overriding colours/fonts inline in a page.
- **Icons** are inline SVG, not an icon font — see the Iconography
  section of the style guide for the stroke/size/colour rules before
  adding a new one.
- **Every page repeats the same `<header>`, `<aside class="blueprint-ruler">`,
  and `<footer>`** — if you add a new page, copy one of the existing
  pages as a starting point rather than building `<head>`/nav from
  scratch, so the sheet number in the ruler and footer stays consistent.
- JavaScript in `script.js` is progressive enhancement only — every page
  works with it removed; it only handles nav scroll state, the mobile
  menu auto-collapse, the back-to-top button, the portfolio filter, and
  client-side form validation feedback.

## Browser support

Evergreen Chrome, Firefox, Safari, Edge. No IE11 support (Bootstrap 5
itself drops it).
