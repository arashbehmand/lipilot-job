# Phoenix0 Design System

Minimal, functional design system for **Phoenix0** — _job searcher's friend_. Helps job seekers know hiring companies and use AI to send context-aware applications.

## Direction

**White background · IBM Plex · logo orange + blue.** Confident type, real accents, no editorial paper. The system commits to the colors that already exist in the bird-and-briefcase mark and gives them room to work.

- **Surface** white (`#FFFFFF`), with a near-black ink (`#0A0A0A`) for text. Hairlines at `#E6E6E6`. Full dark scheme included.
- **Orange** `#F26522` — the phoenix. Primary CTA color, focus rings, the `0` in the wordmark.
- **Blue** `#2563EB` — the briefcase. Links, informational tints, secondary accent.
- **IBM Plex Sans** for headlines and UI (300/400/500/600/700).
- **IBM Plex Serif** is reserved for **generated artifacts** — résumés, cover letters, drafted documents. It's the "this is a finished thing you'd actually print" voice.
- **IBM Plex Mono** for technical labels, eyebrows, terminal-flavored captions.

## Sources

| Source | Where it lives |
|---|---|
| Phoenix0 webapp codebase | `https://github.com/arashbehmand/phoenix-job-assistant-webapp` |
| Live current product | `https://phoenix0.online` |
| Logo | `assets/phoenix-logo.png` |
| Live workspace screenshot | `assets/screenshot-current-session.png` |

The current SvelteKit + DaisyUI app uses `primary: #f97316` (Tailwind orange) and `secondary: #3b82f6` (Tailwind blue). This system keeps the same color identity but replaces the DaisyUI utility flatness with white surfaces, IBM Plex type, hairlines, and restrained shadows.

There is **no marketing surface today** — the product opens straight to `/login`. `ui_kits/marketing/` is the proposed pre-login front matter.

## Index

```
README.md                  ← you are here
SKILL.md                   ← Agent Skills entrypoint
colors_and_type.css        ← drop-in foundation: vars, type, semantic classes

assets/
  phoenix-logo.png            ← bird + briefcase
  screenshot-current-session.png
preview/                   ← Design System tab cards (registered)
ui_kits/
  marketing/index.html        ← pre-login landing (hero, capabilities, pricing, FAQ, contact)
  webapp/index.html           ← workspace screen (will be rebuilt against attached source)
```

## Content fundamentals

- **Voice**: confident, direct, slightly literary. Short sentences. Avoids buzzwords. Uses the second person sparingly — most copy is matter-of-fact about what the product does.
- **Casing**: sentence case for everything except the wordmark `phoenix0`. Headlines never use Title Case.
- **No emoji.** Ever.
- **One italic per heading** is fine, but italic-as-emphasis is not the visual workhorse — bold and color do that.
- **Examples**: "Apply like you mean it." · "Pay for the memory, not the AI." · "We read every message — usually within a day."

## Visual foundations

- **Layout**: white canvas, generous whitespace, max content width 1180px. Sections separated by full-width 1px hairlines, never by background-color shifts (except the dark contact band).
- **Background**: white (`--bg`). `--bg-2` for one alternate band per page (the capabilities section, typically). A faint dot/grid backdrop is OK in the hero, masked with a radial gradient — never as page-wide noise.
- **Cards**: 1px `var(--line)` border, `--r-3` (6px) radius, no drop shadow by default. Featured/promoted cards get `var(--orange)` border. Shadows only on the screenshot frame and modals.
- **Buttons**: orange primary at `--r-3` (6px), 11–14px vertical padding, 22–26px horizontal. Hover deepens orange + 1px translateY. Press is opacity dip, no transform.
- **Hover**: `180ms cubic-bezier(0.22,1,0.36,1)`. 1px translateY only on primary CTAs and elevation-bearing things; everything else is a color/border shift.
- **Borders & rules**: hairlines do all the structural work. 2px solid ink only on top of step columns ("how it works"). Never colored borders except for focus and the featured-plan card.
- **Iconography**: Lucide at 1.5–1.8px stroke, currentColor, 16–22px sizes. No emoji.
- **Imagery**: real product screenshots framed in a thin-bordered card. No stock photography in this kit.
- **Animation**: subtle. Hover transitions, expand/collapse, no parallax, no on-scroll reveals.
- **Dark mode**: provided via `prefers-color-scheme`. Surfaces shift to `#0A0A0A` / `#141414`, orange brightens to `#FF8A3D`, blue brightens to `#5B9FFF`.

## Iconography

Inline SVG using **Lucide** as the source vocabulary (1.5–1.8px stroke, 24×24 viewBox, currentColor fill: none). Used sized 16–22px in UI, up to 36px in feature tiles where they sit in a tinted square. The marketing landing uses ~10 inline icons; we draw them by hand from the Lucide vocabulary rather than CDN-link to keep the page self-contained.

**Never** emoji. **Never** the existing DaisyUI/Tailwind icon defaults.

## Caveats

- The **webapp UI kit (`ui_kits/webapp/`)** is the original v1 mock and will need rebuilding once the user drops the SvelteKit source into the project.
- **Marketing copy and pricing are placeholders** — names, prices, plan features should be replaced with real product decisions.
