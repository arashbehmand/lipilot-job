---
name: phoenix0-design
description: Use this skill to generate well-branded interfaces and assets for Phoenix0 (the AI job-search workspace), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map of this skill

- `README.md` — brand context, content fundamentals, visual foundations, iconography, file index
- `colors_and_type.css` — drop-in foundation: design tokens (paper, ink, ember; Cormorant + Inter), semantic element styles
- `assets/` — `phoenix-logo.png` (master mark), `screenshot-current-session.png` (live workspace reference)
- `ui_kits/marketing/` — pre-login landing page (hero, how it works, features, plans, FAQ, contact)
- `ui_kits/webapp/` — post-login workspace screen
- `preview/` — small specimen cards for the design system tab; not for use in real designs

## How to design "in Phoenix0 voice"

1. Always import `colors_and_type.css` — never reinvent the palette or type stack.
2. Headlines: Cormorant Garamond, weight 300, italic emphasis is **always ember** (`var(--ember)`).
3. Body: Inter 400/500. Avoid 600+ outside of buttons.
4. Page background defaults to `--paper` (warm cream). Use `--surface-dark` only for contact bands and footers.
5. Cards are paper-2 with a single hairline border and 2-3px radius. **No drop shadows.**
6. Ember is an accent — used for one italic word, one icon, one CTA. Never two embered things side by side.
7. Iconography is Lucide at 1.5px stroke. Never emoji.
