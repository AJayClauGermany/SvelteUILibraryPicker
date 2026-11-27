# Backlog

Open work, grouped by kind. Each bullet is meant to be one issue and one PR. These are leads, not
facts: re-check the official docs before acting on one. Settled questions (what we list, how
previews work, why something is left out) are in [decisions.md](decisions.md). For what is missing
or stale right now, the commands are more current than this file: `pnpm status`,
`pnpm coverage --todo`, `pnpm check:updates` and the weekly `data-health` issue.

When you take an item, open an issue for it (or find the existing one) and remove the bullet in
your PR.

## Component ids to add

Each exists in at least one library but has no canonical id. To fix one: add the id to
`src/lib/data/components.ts`, then map the libraries that have it (with verified docs URLs; most
are already mentioned in the `notes` of a nearby entry). One id per PR.

| Suggested id | Category | Seen in |
| --- | --- | --- |
| `segmented-control` | actions | Ark UI (Segment Group), Skeleton (Segmented Control); currently folded into `toggle-group` |
| `chip` (interactive) | actions | Skeleton (Chips), M3 Svelte (ChipChooser, undocumented); currently folded into `badge` |
| `progress-circular` | feedback | Ark UI, Skeleton, Flowbite (Progressradial); currently a note under `progress` |
| `banner` | feedback | Flowbite Svelte (Banner) |
| `page-header` | layout | Carbon (PageHeader) |
| `description-list` | data-display | Carbon (DescriptionList, StructuredList) |
| `content-switcher` | navigation | Carbon (ContentSwitcher) |
| `step-indicator` | navigation | Flowbite Svelte (Step Indicator); currently a note under `stepper` |
| `kanban` | data-display | Flowbite Svelte (Kanban Board) |
| `masonry` | layout | Flowbite Svelte (Virtual Masonry) |
| `video` | data-display | Flowbite Svelte (Video) |
| `device-mockup` | data-display | Flowbite Svelte (Device Mockups) |
| `floating-label` | forms | Flowbite Svelte (Floating Label); currently a note under `input` |
| `input-group` | forms | Sveltestrap (InputGroup), shadcn-svelte (Input Group), Carbon (InputGroup, master only) |
| `close-button` | actions | Flowbite Svelte (Close Button) |
| `fullscreen` | utilities | SVAR Core (Fullscreen) |
| `presence` | utilities | Ark UI and Zag.js (Presence: delays unmount for exit animations) |
| `highlight` | data-display | Ark UI (Highlight) |
| `format` helpers | utilities | Ark UI (Format Byte / Number / Time / Relative Time) |
| `download-trigger` | utilities | Ark UI |
| `client-only` / `lazy` | utilities | Ark UI (Client Only), Svelte UX (Lazy), Carbon (LazyMount, master only) |
| `json-tree-view` | data-display | Ark UI (preview); currently a note under `tree-view` |
| `toggletip` | overlays | Carbon (Toggletip) |
| `overlay` | overlays | Svelte UX (Overlay) |
| `effects` | utilities | Svelte UX (Shine, Tilt, Gooey) |
| `storage` | utilities | Carbon (LocalStorage, SessionStorage) |
| `spatial-menu` | navigation | Melt (WIP, no usage docs yet) |
| `window` | layout | suggested by newer libraries; needs a survey first |
| `places-autocomplete` | forms | suggested by newer libraries; needs a survey first |
| chat components | (new category?) | shadcn-svelte (Message, Message Scroller, Bubble, Attachment, Marker, Trace, Questionnaire; plus an "AI Elements" docs section), Carbon (ChatLog, ChatButton on master; `@carbon/ai-chat` is a separate package) |

Mapping follow-ups for ids that already exist:

- Flowbite Svelte's WYSIWYG plugin is not mapped to `rich-text-editor` yet.
- coss ui for Svelte has a `split-pane` component with no docs page yet; map it to `resizable`
  when one appears.
- RetroUI Svelte's registry also ships Chart, Data Table, Scroll Area and Sidebar, without docs
  pages yet; map them when pages appear.

## Libraries to consider

Found in the "What's new in Svelte" posts (January 2024 to October 2026) and npm, checked on
2026-11-04 and 2026-11-24.

**Waiting for a stable release or public docs:**

| Library | Package | Why it waits |
| --- | --- | --- |
| Quaff (Material Design 3) | `@quaffui/quaff` 1.0.0-beta35 | prerelease |
| FluentUI Svelte | `fluentui-svelte` 0.6.0 | README says the docs site is still being built |
| MUKADE UI | `mukade-ui` 1.2.0 | docs site source not public, per-component URLs unverifiable |
| Uniface Element | `@ticatec/uniface-element` 5.1.1 | no docs site; repo behind npm |
| fox ui | `@foxui/core` 0.9.1 | README calls it a public alpha |
| Trioxide | `@obelusfi/trioxide` 0.4.12 | work in progress, no LICENSE file |
| Svelte Polaris | `svelte-polaris` 0.0.7 | 0.0.x and idle |
| lomer-ui | `lomer-ui` 0.0.22 | 0.0.x; describes itself as not a component library |
| Svelteit | | alpha only |
| svelte-fui | | alpha, no docs site |
| mielui | `@mielui/svelte` 0.4.0 | found via npm, not researched yet |

**To review as a library:** `svelte-widgets` (svelte-widgets.janosh.dev, MIT, Svelte ^5.48.0), the
successor of `svelte-multiselect` with 30+ components.

**Not addable as they stand:** apple-svelte, Tark UI and Ionic Svelte (no LICENSE file), Atom
Forge UI (custom non-SPDX "Patron License"), Material Svelte by flenze (repo not found), Material
Svelte `material-svelte` (docs site down), daisy-svelte (docs site gone).

## Tools to consider

- A Svelte 5 motion library (spring and layout animations beyond `svelte/motion`).
- `@humanspeak/svelte-markdown` as a second markdown option (more recent releases than
  svelte-exmarkdown).
- A Shiki-based code-block package with real docs. None found on 2026-11-23 (`svelte-shiki` is from
  2020; `@shikijs/magic-move` is an animation package).
- Considered and waiting: `bigger-picture` (lightbox; README withdrew Svelte usage pending
  Svelte 5 checks), `canvas-confetti` (framework-agnostic).

## Entries to re-check

- **Svelte UX 2.0** (Svelte 5, runes, Tailwind 4) is in prerelease (`next` dist-tag). Update the
  entry and add previews when it's released, then drop its line in `preview-skips.ts`.
- **Carbon Components Svelte**: re-map the components its `master` docs already show (Card,
  SidePanel, Splitter, StarRating, Stepper, TagInput, Kbd, ConfirmModal, EmptyState, InlineEdit,
  TableOfContents, LayoutDirection, Countdown, Prose, Layer, ThemeZone, AILabel, ChatLog,
  ChatButton, CopyText, CssGrid, InputGroup, TooltipGroup, LazyMount) when 0.114.0 ships.
- **Kahi UI** is Deprecated because its README calls it unsupported and on indefinite hiatus. npm
  has no deprecation flag and the repo is not archived, so revisit if the notice changes.
- **Neodrag**: update when 3.0 is stable.
- **Quiet tools**, drop them if they stay idle: `@zerodevx/svelte-toast` (no release since
  2024-09, runs in legacy mode on Svelte 5), `svelte-echarts` (README-only docs, echarts peer still
  ^5 while ECharts is on 6.x, no release since 2025-04), svelte-i18n (last release 2024-10),
  PhotoSwipe (last release 2024-05, v6 in development), svelte-codemirror-editor (last release
  2025-10).
- **Versions to watch**: RetroUI Svelte's `package.json` says 0.8.0 while its latest tag is 0.9.3
  (recorded); neobrutalism-svelte has no tags, so its private version 0.0.1 is recorded.
- **Links to confirm from a normal browser**: the iconify.design docs URL and any llms.txt there;
  whether `https://svhe.onrender.com/llms.txt` is served; whether `kamranahmedse/driver.js`
  redirects to `nilbuild/driver.js`; shadcn-svelte-extras' `llms.txt` links to an older URL layout.
- **License without an SPDX id**: `svelte-select` is recorded as `LicenseRef-svelte-select` (the
  text reads like the Copyfree Open Innovation License, unconfirmed). Decide how the site shows these.

## Previews

`pnpm coverage --todo` lists every preview that can still be added; this section is only for what
the command can't tell you.

- **svelte-headlessui (CaptainCodeman)** is store/action based and should run in the preview app.
- **More shared components**: grow per-library sets where several libraries share a component
  (select, combobox, date picker, table).
- **Tools without previews**: vaul-svelte (the installed Svelte 5 prerelease differs from the
  recorded 0.3.2), Floating UI's dropdown menu, hover card, combobox, context menu and menubar.
- **Type hovers** are thin for libraries whose types don't resolve in twoslash's own TypeScript
  setup (or that ship none): options are per-library `compilerOptions`/`paths` for twoslash, or
  hand-written `customTypes`.
- **Props in type hovers**: the props tables could link to, or be checked against, the hovers.
- **Upstream workarounds to drop** when upstream fixes them: the resolver in
  `previews/vite.config.ts` for svelte-5-ui-lib's directory import (`from '..'`); the
  `@sveltepress/theme-default` patch (see [architecture.md](architecture.md#sveltepress-quirks-to-know)).

## Component props

- **Components without canonical props yet**: list, breadcrumb, navigation menu, sidebar, menubar,
  context menu, hover card, command palette, calendar, file upload, tags input, PIN input, rating,
  color picker, tree view, carousel, stepper, skeleton. The overlay and form ones would follow the
  patterns already in `props.ts`. One component per PR.
- **Possible upstream bugs** noticed while reading source (worth an issue upstream, not data here):
  Sveltestrap 7.1.0 `Input type="select"` renders nothing with `multiple`; Bootstrap Svelte's
  Tooltip doc comment says `placement` defaults to `'right'` but the source sets no default.

## Judgement calls worth a second look

From the 2026-11-04 pass, when most docs hosts were blocked and facts were checked against npm and
each repo's docs source:

- `@tailwindcss/vite` is recorded as optional for Skeleton, shadcn-svelte and Sivir UI, and not
  listed for Flowbite, Konsta or Kampsy, because their install guides set Tailwind up through
  `sv add tailwindcss` rather than naming the plugin.
- Konsta's Tailwind range (`4`) comes from its 5.0.0 changelog; the install docs don't state a major.
- M3 Svelte: `vite-plugin-functions-mixins` is an optional peer on npm but recorded as required,
  because the quick start always registers it and the components use its mixins.
- Svelte Material UI: `sass` comes in through `smui-theme`, so it's listed as optional.
- `semantic-colors` is borderline for Flowbite Svelte (only primary/secondary are theme roles).
  Kampsy UI was left out because its role variants map to fixed palette tokens per component.
- `accessibility` is borderline for Melt and Lily, and was not added for Flowbite, Konsta, SVAR,
  Sveltestrap, Svelte UX, Sivir UI or Svelte Material UI under the per-component bar.
- Several GitHub README anchors were derived from heading text, and the docs URLs for bits-ui,
  Ark UI, Skeleton, Flowbite Svelte, shadcn-svelte, Melt, Carbon, M3 Svelte, SVAR, Sveltestrap and
  Svelte UX were derived from docs source routing. A spot check from a normal browser is welcome.
- Link styles to know when checking: Ark UI uses `/svelte/docs/...` URLs (the site may open in
  another framework until the visitor switches); SVAR links go to live samples; M3 Svelte links to
  anchored demo cards (cards without controls link to the docs home); Sveltestrap points several
  form controls at its one `Input` page; svelte-mui and Vitamin Svelte docs are client-rendered
  (any path returns 200) and ui-svelte's are a Storybook, so their links were checked against
  route lists in source.
- Library quirks seen while adding previews (2026-11-25), possibly worth an upstream issue:
  YeSvelte's Alert and Toast hard-code a white background in dark mode; Framework7 9.3.0's
  datepicker throws without a `value`, its gauge defaults to black text in dark mode, and
  `framework7-svelte` imports `skeleton-elements` without declaring it; STDF's built-in texts
  default to Simplified Chinese unless wrapped in its ConfigProvider.
