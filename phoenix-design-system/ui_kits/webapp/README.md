# Webapp UI kit — Phoenix0 workspace

Editorial-minimal recreation of the live Phoenix0 workspace screen (the screenshot in `assets/screenshot-current-session.png` is the source of truth). Replaces the current "vibe-coded" UI with the foundation system in `colors_and_type.css`.

## Screen
**Workspace** (`index.html`) — the post-login view. A sidebar with nav + session picker, and a main column that lists the inputs feeding this application and the generated artifacts derived from them.

## Components on this page
- **Sidebar** — bird mark + wordmark · primary nav (Workspace / Job monitoring / Pipelines / Settings) · session picker dropdown + New/Open/Archive cluster · footer with email + sign-out.
- **Topbar** — page title, ghost-pill sign-out.
- **Session header** — serif H2 with the role title, Rename + Delete-session pills, "Loaded: 6 resources" meta line.
- **Section** — serif h3, eyebrow hint, hairline rule below.
- **Resource row** — chevron · name + version + "From default" indigo pill · kind tag · status dot · view/upload icon buttons.
- **Artifact row** — same structure, but a circular ember "generate" button replaces the upload icon. Expands to show the draft body.
- **Draft preview** — paper-3 surface, serif body type at 16/1.7, fade-out at the bottom, "Used X · Y · Z" provenance line, Copy / Export / Edit actions.
- **Toast** — ink pill bottom-right, ember accent on the generated noun.

## Interactions wired
- Click any chevron with a body → expands/collapses the row.
- Click any generate button → fires a toast naming the artifact + input count.
- Click `+` on `additional_context` → inline input, blur with content marks the resource Loaded.

## Open file
Open `index.html` directly. It links `../../colors_and_type.css` and `../../assets/phoenix-logo.png`.
