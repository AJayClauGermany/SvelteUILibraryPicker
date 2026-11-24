# Backlog and good first issues

Known gaps from the initial research (2026-11-03), updated 2026-11-04. Each item is a good self-contained task for
a human or an agent. Re-verify against the official docs before acting; these notes are leads,
not facts.

## Component types we don't have yet

The first batch of suggestions (date/time range fields, typography, empty state, code block, split
button, search, password input, editable, signature pad, angle slider, image cropper, floating
panel, tour, marquee, QR code, timeline, table of contents, bottom navigation, footer, stack,
virtual list, icon, timer, locale provider) was added to the taxonomy on 2026-11-04 and mapped
for every library that documents them.

These components still exist in at least one library but have no canonical id. To fix one: add
the id to `src/lib/data/components.ts`, then map every library that has it (with verified docs
URLs; most of these are already mentioned in `notes` of a nearby entry).

| Suggested id | Category | Seen in |
| --- | --- | --- |
| `segmented-control` | actions | Ark UI (Segment Group), Skeleton (Segmented Control) — currently folded into `toggle-group` |
| `chip` (interactive) | actions | Skeleton (Chips), M3 Svelte (ChipChooser, undocumented) — currently folded into `badge` |
| `progress-circular` | feedback | Ark UI, Skeleton, Flowbite (Progressradial) — currently a note under `progress` |
| `banner` | feedback | Flowbite Svelte (Banner), Carbon (PageHeader is different) |
| `page-header` | layout | Carbon (PageHeader) |
| `description-list` | data-display | Carbon (DescriptionList, StructuredList) |
| `content-switcher` | navigation | Carbon (ContentSwitcher) |
| `step-indicator` | navigation | Flowbite Svelte (Step Indicator) — currently a note under `stepper` |
| `kanban` | data-display | Flowbite Svelte (Kanban Board) |
| `masonry` | layout | Flowbite Svelte (Virtual Masonry) |
| `video` | data-display | Flowbite Svelte (Video) |
| `device-mockup` | data-display | Flowbite Svelte (Device Mockups) |
| `floating-label` | forms | Flowbite Svelte (Floating Label) — currently a note under `input` |
| `input-group` | forms | Sveltestrap (InputGroup), shadcn-svelte (Input Group), Carbon (InputGroup, master only) |
| `close-button` | actions | Flowbite Svelte (Close Button) |
| `rich-text-editor` | forms | Flowbite Svelte (WYSIWYG plugin) |
| `fullscreen` | utilities | SVAR Core (Fullscreen) |
| `presence` | utilities | Ark UI and Zag.js (Presence: delays unmount for exit animations). Sveltestrap Fade and M3 Svelte UI transitions are now mapped to `animation` |
| `highlight` | data-display | Ark UI (Highlight) |
| `format` helpers | utilities | Ark UI (Format Byte / Number / Time / Relative Time) |
| `download-trigger` | utilities | Ark UI |
| `client-only` / `lazy` | utilities | Ark UI (Client Only), Svelte UX (Lazy), Carbon (LazyMount, master only) |
| `json-tree-view` | data-display | Ark UI (preview) — currently a note under `tree-view` |
| `toggletip` | overlays | Carbon (Toggletip) |
| `overlay` | overlays | Svelte UX (Overlay) |
| `effects` | utilities | Svelte UX (Shine, Tilt, Gooey) |
| `storage` | utilities | Carbon (LocalStorage, SessionStorage) |
| `spatial-menu` | navigation | Melt (WIP, no usage docs yet) |
| chat components | (new category?) | shadcn-svelte (Message, Message Scroller, Bubble, Attachment, Marker, Trace, Questionnaire; plus an "AI Elements" docs section), Carbon (ChatLog, ChatButton on master; `@carbon/ai-chat` is a separate package) |

Documented as guides or recipes rather than shipped components, so not mapped on purpose:
Skeleton's Code Block (Shiki integration), Table of Contents, Alerts, Breadcrumbs, Light Switch and
Clipboard cookbook pages. Revisit if the taxonomy ever lists recipes.

Exported but undocumented (no deep link possible, so left out): Svelte UX `Kbd`, `SectionDivider`;
Sveltestrap `Portal`, `Jumbotron`, `FormText`, `FormCheck`; M3 Svelte `ChipChooser`,
`DatePickerDocked`; Ark UI `Portal`.

## Libraries to consider adding

Source: the "What's new in Svelte" posts from January 2024 to October 2026 (read from the
`sveltejs/svelte.dev` repo) plus well-known older kits, checked against npm and each repo on
2026-11-04. Added in that pass: Svelte Material UI, Zag.js, Konsta UI, Kampsy UI, Bootstrap Svelte,
Sivir UI and Lily. Still open:

**shadcn-svelte registries (no npm package).** These install through the `shadcn-svelte` or
`jsrepo` CLI. Decision (2026-11-04): add each one as a normal library entry. Record the CLI package
in `packages` (e.g. `shadcn-svelte`, `jsrepo`), the registry's own release or repo version in
`version`, `styling: ['copy-paste', 'tailwind']`, and say in `notes` that it is installed from a
shadcn-svelte (or jsrepo) registry, the same way entries already note that a library needs Tailwind
or Bootstrap CSS. All four candidates (coss ui for Svelte, shadcn-svelte-extras, RetroUI Svelte,
neobrutalism-svelte) were added on 2026-11-22 this way. Follow-ups from that pass:

- RetroUI Svelte's registry also ships Chart, Data Table, Scroll Area and Sidebar, but they have no
  docs pages yet, so they aren't mapped. Its `package.json` says 0.8.0 while the latest tag is 0.9.3
  (recorded).
- neobrutalism-svelte has no tags or releases; the private `package.json` version (0.0.1) is recorded.
- coss ui for Svelte has a `split-pane` component with no docs page yet; map it to `resizable` when
  one appears.
- shadcn-svelte-extras' `llms.txt` links to an older URL layout.

**Wait for a stable release or public docs:**

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
| mielui | `@mielui/svelte` 0.4.0 | found via npm, not researched yet |
| svelte-headlessui (CaptainCodeman) | `svelte-headlessui` 0.0.46 | 0.0.x, idle since 2025-01 |

**Probably not, unless something changes:** apple-svelte (idle, no LICENSE file), Origin UI Svelte
(idle since 2025-06), Tark UI (no LICENSE file), SvelteUI (Svelte 3/4 only), Atom Forge UI
(custom non-SPDX "Patron License"), Material Svelte by flenze (repo not found).

**Skipped on purpose:** archived or Svelte 3/4-only kits (svelte-5-ui-lib, STWUI, Attractions,
rgossiaux svelte-headlessui, Smelte, fluent-svelte, svelte-atoms, Grail UI, radix-svelte, the
legacy `@melt-ui/svelte`), non-Svelte libraries (AgnosticUI, FlyonUI, daisyUI), single-purpose
components (Formsnap, svelte-sonner, PaneForge, vaul-svelte, select-kit, data grids) and chart/3D
libraries (LayerChart, Threlte). Single-purpose packages now live in the [Tools](#tools) section
instead.

## Tools

The Tools section (`src/lib/data/tools/`, added 2026-11-06). On 2026-11-22 the grounding rule was
widened: tools may map to components no tracked library provides (new ids `map`, `drag-and-drop`,
`rich-text-editor`), and general `utility` helpers (runed, svelte-toolbelt) may map to none. Next steps:

- 2026-11-24: 15 more gap ids (`code-editor`, `phone-input`, `emoji-picker`, `lightbox`, `confetti`,
  `node-editor`, `scene-3d`, `animated-value`, `markdown`, `event-calendar`, `gantt`, `i18n`, `hotkeys`,
  `gestures`, `animation`) and 20 tools for them or as second options (Svelte Flow, Threlte, Event
  Calendar, SVAR Gantt, emoji-picker-element, svelte-codemirror-editor, svelte-tel-input, NumberFlow,
  svelte-confetti, svelte-gestures, Paraglide JS, svelte-i18n, AutoAnimate, svelte-exmarkdown,
  PhotoSwipe, @svelte-put/shortcut, svelte-awesome-color-picker, svelte-range-slider-pips,
  phosphor-svelte, svelte-tiptap). Libraries that document these components were mapped too.
  Follow-ups from that pass:
  - Previews were added for 18 of the 20 new tools (2026-11-24). No preview for `@svelte-put/shortcut`
    (`restricted`: its docs site blocks AI agents) or Paraglide JS (needs its compiler step).
    svelte-codemirror-editor and svelte-awesome-color-picker render light-only (their dark themes are
    app-written CSS or an optional theme package). emoji-picker-element reads its emoji data from the
    local `emoji-picker-element-data` package instead of its default CDN, so previews stay offline.
    `@event-calendar/core` depends on `svelte` directly (not as a peer), so the root `svelte` was raised
    to 5.59.1 to keep a single copy; keep them in step when either is bumped.
  - A Svelte 5 motion library (spring/layout animations beyond `svelte/motion`) is still open.
  - Second options considered: `bigger-picture` (lightbox; README withdrew Svelte usage pending
    Svelte 5 checks), `@humanspeak/svelte-markdown` (markdown; more recent releases than
    svelte-exmarkdown, worth adding as a second option), `canvas-confetti` (framework-agnostic).
  - Quiet packages to re-check: svelte-i18n (last release 2024-10), PhotoSwipe (last release 2024-05,
    v6 in development), svelte-codemirror-editor (last release 2025-10).
  - Several entries link the repo README as docs because there is no docs site (Event Calendar,
    svelte-gestures, svelte-tiptap, svelte-codemirror-editor, emoji-picker-element, phosphor-svelte).
  - github.com pages returned 403 through the research sandbox's proxy, so github.com blob URLs were
    checked through clones and raw.githubusercontent.com instead.
- Second options where one was picked: `svelte-tiptap` (Svelte bindings for Tiptap). Added 2026-11-23:
  `svelte-maplibre` (map) and `svelte-echarts` (chart; README-only docs, echarts peer still ^5 while
  ECharts is on 6.x, no release since 2025-04; drop it if it stays idle).
- `svelte-multiselect` was skipped (2026-11-23): its repo was renamed to `janosh/svelte-widgets` and the
  package restarted as `svelte-widgets` (1.x, MultiSelect is one of 30+ components). The old
  `janosh.github.io/svelte-multiselect` docs URL now returns 404 and npm `svelte-multiselect` stopped at
  11.8.0 (2026-07). `svelte-widgets` (svelte-widgets.janosh.dev, MIT, Svelte ^5.48.0) is broad enough to
  be reviewed as a library rather than a tool.
- A Shiki-based code-block package with real docs (Lily's Code Block and Skeleton's Shiki guide use Shiki).
  None found on 2026-11-23: `svelte-shiki` is from 2020, and `@shikijs/magic-move` is an animation
  package, not a code block.
- Licenses without an SPDX id: `svelte-select` is recorded as `LicenseRef-svelte-select` (the text
  reads like the Copyfree Open Innovation License, unconfirmed). Decide how the site shows these.
- Re-check: Neodrag when 3.0 is stable; the iconify.design docs URL and any llms.txt there (blocked
  here); that `https://svhe.onrender.com/llms.txt` is served; whether `kamranahmedse/driver.js`
  redirects to `nilbuild/driver.js`.
- `@zerodevx/svelte-toast` has had no release since 2024-09 and runs in legacy mode on Svelte 5;
  drop it if it stays idle.
- Previews for tools were added on 2026-11-23 (see [previews.md](previews.md#tools)). Left out: mode-watcher
  (it would fight the preview app's own theme switch), Formsnap and
  Superforms (need a SvelteKit form action), vaul-svelte (the installed Svelte 5 prerelease differs from the
  recorded 0.3.2), and the non-visual helpers. Floating UI only has tooltip and popover; it also lists
  dropdown menu, hover card, select, combobox, context menu and menubar.

## Component props

Added 2026-11-22: canonical props for 28 components (`src/lib/data/props.ts`), `api` on those
components for every library that lists them, library-wide `conventions`, props tables on component
pages and the `/port/` page. Next steps:

- Still without canonical props: card, table, list, breadcrumb, navigation menu, sidebar, menubar,
  context menu, hover card, command palette, calendar, file upload, tags input, PIN input, rating,
  color picker, tree view, carousel, stepper, skeleton. Card and table vary too much for a short list;
  the overlay and form ones would follow the patterns already in `props.ts`.
- Value mapping for choice props (e.g. a variant in one library to the closest one in another) is
  left out on purpose: it is a judgement call, not a fact. Revisit only with a clear rule.
- `lastVerified` was bumped only where a whole entry was re-checked; some entries kept the older
  date because only props were checked.
- Possible upstream bugs noticed while reading source (worth an issue upstream, not data here):
  Sveltestrap 7.1.0 `Input type="select"` renders nothing with `multiple`; Bootstrap Svelte's
  Tooltip doc comment says `placement` defaults to `'right'` but the source sets no default.
- New component ids suggested by the new libraries: `chat`/composer, `window`, `input-group` (now in several libraries), `segmented-control`,
  `places-autocomplete`.

## Previews

Coverage is tracked in [previews.md](previews.md#current-coverage). Open items:

- **Svelte UX**: blocked on Tailwind 3 until 2.0 is stable (2.0.0-next.26 as of 2026-11-04).
- **shadcn-svelte**: needs generated components; see the roadmap in previews.md.
- Grow the per-library set beyond the eight target components (e.g. select, combobox,
  date-picker, table) where several libraries share them.
- **Type hovers in preview code** (twoslash, added 2026-11-08) are thin for some libraries:
  twoslash type-checks in its own TypeScript setup, so where a library's types don't resolve
  there (or the library ships none), components hover as `any`. Options: per-library
  `compilerOptions`/`paths` for twoslash, or hand-written `customTypes` for libraries without
  TypeScript. Diagnostics are off (`noErrors`) for the same reason.
- **Props in type hovers**: the props tables (see [Component props](#component-props)) could link
  to, or be checked against, the twoslash hovers above.
- **Screenshot tests** (Playwright) are deferred on purpose. The open question is how useful they
  are when run deterministically in CI: fonts, third-party CDN assets and animation timing make
  pixel comparisons flaky, and a tolerant comparison may miss real regressions. For now previews
  are checked by opening each one in a headless browser and asserting that it renders without
  console errors (see the scripts used in the 2026-11-04 pass). Revisit once there is a plan for
  deterministic rendering (bundled fonts, blocked network, disabled animations).

## Data notes to double-check

- **Ark UI** docs URLs use the `/svelte/docs/...` form from its llms.txt. The site may open in
  another framework until the visitor switches to Svelte.
- **SVAR** component links go to official live samples, because the API docs site wasn't
  verifiable from the repo.
- **M3 Svelte** links go to anchored demo cards on its single-page docs.
- **Sveltestrap** uses one `Input` component for many form controls, and several entries point
  to that page.
- **Svelte UX 2.0** (Svelte 5, runes, Tailwind 4) is still in prerelease (`next` dist-tag,
  2.0.0-next.26). Update the entry and add previews when it's released.
- **Carbon Components Svelte** deploys its docs site from `master`, which documents about 25
  components that the published 0.113.1 does not export (Card, SidePanel, Splitter, StarRating,
  Stepper, TagInput, Kbd, ConfirmModal, EmptyState, InlineEdit, TableOfContents, LayoutDirection,
  Countdown, Prose, Layer, ThemeZone, AILabel, ChatLog, ChatButton, CopyText, CssGrid, InputGroup,
  TooltipGroup, LazyMount). The entry follows the npm release; re-map these when 0.114.0 ships.
- **M3 Svelte** demo cards without controls (Bottom Sheet, Snackbar, Time Picker, Layer) have no
  anchor, so those entries link to the docs home.
- **Dependencies and feature tags (2026-11-04 pass).** Most docs hosts were blocked, so
  `dependencies` sources and the new `semantic-colors` tag were checked against npm and each repo's
  docs source; several GitHub README anchors were derived from heading text. Judgment calls worth a
  second look:
  - `@tailwindcss/vite` is recorded as optional for Skeleton, shadcn-svelte and Sivir UI, and not
    listed for Flowbite, Konsta or Kampsy, because the install guides set Tailwind up through
    `sv add tailwindcss` rather than naming the plugin.
  - Konsta's Tailwind range (`4`) comes from its 5.0.0 changelog; the install docs don't state a major.
  - M3 Svelte: `vite-plugin-functions-mixins` is an optional peer on npm but recorded as required,
    because the quick start always registers it and the components use its mixins.
  - Svelte Material UI: `sass` comes in through `smui-theme`, so it's listed as optional.
  - `semantic-colors` is borderline for Flowbite Svelte (only primary/secondary are theme roles;
    status colors are palette names). Kampsy UI was left out because its role variants map to fixed
    palette tokens per component, not to theme tokens.
  - `accessibility` was removed from Skeleton (its own pages make general claims and link to Zag.js
    for keyboard/ARIA details). It's borderline for Melt and Lily. Not added for Flowbite, Konsta,
    SVAR, Sveltestrap, Svelte UX, Sivir UI or Svelte Material UI under the per-component bar.
- **Docs hosts and network policy**: in the cloud agent environment most docs hosts (bits-ui.com,
  ark-ui.com, skeleton.dev, flowbite-svelte.com, shadcn-svelte.com, next.melt-ui.com,
  svelte.carbondesignsystem.com, kendell.dev, docs.svar.dev, sveltestrap.js.org,
  svelte-ux.techniq.dev, svelte.dev) were blocked, so the 2026-11-04 URLs were derived from each
  repo's docs source routing in a shallow clone, not fetched live. A spot check from a normal
  browser is welcome.
