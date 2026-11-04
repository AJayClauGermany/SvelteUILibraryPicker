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
| `phone-input` | forms | Flowbite Svelte (Phone Input) |
| `floating-label` | forms | Flowbite Svelte (Floating Label) — currently a note under `input` |
| `input-group` | forms | Sveltestrap (InputGroup), shadcn-svelte (Input Group), Carbon (InputGroup, master only) |
| `close-button` | actions | Flowbite Svelte (Close Button) |
| `rich-text-editor` | forms | Flowbite Svelte (WYSIWYG plugin) |
| `fullscreen` | utilities | SVAR Core (Fullscreen) |
| `hotkeys` | utilities | Ark UI (Hotkeys, preview) |
| `presence` / `transition` | utilities | Ark UI (Presence), Sveltestrap (Fade), M3 Svelte (UI transitions) |
| `highlight` | data-display | Ark UI (Highlight) |
| `format` helpers | utilities | Ark UI (Format Byte / Number / Time / Relative Time) |
| `download-trigger` | utilities | Ark UI |
| `client-only` / `lazy` | utilities | Ark UI (Client Only), Svelte UX (Lazy), Carbon (LazyMount, master only) |
| `json-tree-view` | data-display | Ark UI (preview) — currently a note under `tree-view` |
| `toggletip` | overlays | Carbon (Toggletip) |
| `overlay` | overlays | Svelte UX (Overlay) |
| `animated-value` | data-display | Svelte UX (ScrollingValue, SpringValue, TweenedValue) |
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

Check Svelte 5 support, license and AI stance first: e.g. Svelte Material UI (`@smui/*`),
headless UI ports, and newer Svelte 5 libraries. Open an issue with the "Add a library"
template to discuss.

## Previews

Coverage is tracked in [previews.md](previews.md#current-coverage). Open items:

- **Svelte UX**: blocked on Tailwind 3 until 2.0 is stable (2.0.0-next.26 as of 2026-11-04).
- **shadcn-svelte**: needs generated components; see the roadmap in previews.md.
- Grow the per-library set beyond the eight target components (e.g. select, combobox,
  date-picker, table) where several libraries share them.
- **Screenshot tests** (Playwright) so preview regressions show up in PRs.
- Dark mode toggle for previews, where a library documents a default dark theme.

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
- **Docs hosts and network policy**: in the cloud agent environment most docs hosts (bits-ui.com,
  ark-ui.com, skeleton.dev, flowbite-svelte.com, shadcn-svelte.com, next.melt-ui.com,
  svelte.carbondesignsystem.com, kendell.dev, docs.svar.dev, sveltestrap.js.org,
  svelte-ux.techniq.dev, svelte.dev) were blocked, so the 2026-11-04 URLs were derived from each
  repo's docs source routing in a shallow clone, not fetched live. A spot check from a normal
  browser is welcome.
