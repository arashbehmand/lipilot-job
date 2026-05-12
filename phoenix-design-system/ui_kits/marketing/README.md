# Marketing UI kit — Phoenix0

The pre-login front matter. A single scrollable landing page that introduces Phoenix0 to first-time visitors, advertises capabilities, lays out plans, and hands the visitor either to sign-in or to a contact form.

## Sections (top → bottom)

1. **Sticky nav** — bird mark + wordmark left; "How it works · What it does · Plans · Contact" + ghost-pill "Sign in" right.
2. **Hero** — full-height. Eyebrow ("Context-aware job applications") · serif H1 with one ember italic ("memory") · 46-char lede · primary pill CTA "Start an application" + ghost "See how it works".
3. **How it works** — 4-column step grid. Faint serif numerals 01–04, serif step title, sans body.
4. **Features** — 6-tile feature grid (`Career consultant`, `Tailored resume`, `Cover letter`, `Application form answers`, `Email & LinkedIn responses`, `Interview prep`). Hairline gap-trick grid, ember icons at 22px.
5. **Screenshot band** — framed shot of the live workspace (`assets/screenshot-current-session.png`) so visitors see what they're getting.
6. **Plans** — three columns, middle one tinted `--paper-2`. Free · Searcher · Career.
7. **FAQ** — borderless table-style, click-to-expand, copper `+` toggle.
8. **Contact** — dark band, name/email + reason + textarea, ember pill submit.
9. **Footer** — dark, wordmark left, single line of copy right.

## Components used
- `nav.top` — sticky top nav
- `.btn-primary` (ink pill) / `.btn-ghost` / `.cta.primary` / `.cta.ghost`
- `.feat-grid` + `.feat` (hairline-gap feature card)
- `.steps` + `.step` (numbered step grid)
- `.plans` + `.plan` (pricing column)
- `.faq-list` + `.faq-item` (expand/collapse FAQ row)

## Open file
`index.html` is self-contained — open it directly. It links `../../colors_and_type.css` for the foundation.
