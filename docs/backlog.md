# Backlog and good first issues

Known gaps from the initial research (2026-11-03). Each item is a good self-contained task for
a human or an agent. Re-verify against the official docs before acting; these notes are leads,
not facts.

## Component types we don't have yet

These components exist in at least one library but have no canonical id, so they are not listed.
To fix one: add the id to `src/lib/data/components.ts`, then map every library that has it (with
verified docs URLs).

| Suggested id | Category | Seen in |
| --- | --- | --- |
| `date-range-field` | date-time | Bits UI |
| `time-range-field` | date-time | Bits UI |
| `typography` | data-display | shadcn-svelte, Flowbite Svelte, Carbon |
| `empty-state` | feedback | shadcn-svelte, Carbon |
| `code-block` | data-display | shadcn-svelte, Carbon (CodeSnippet) |
| `split-button` | actions | Carbon (ComboButton), M3 Svelte |
| `search` | forms | Carbon |
| `password-input` | forms | Ark UI |
| `editable` / `inline-edit` | forms | Ark UI, Carbon |
| `signature-pad` | forms | Ark UI |
| `angle-slider` | forms | Ark UI |
| `image-cropper` | forms | Ark UI |
| `floating-panel` | overlays | Skeleton, Ark UI |
| `tour` | overlays | Flowbite Svelte, Ark UI |
| `marquee` | data-display | Skeleton, Ark UI |
| `qr-code` | data-display | Skeleton, Ark UI |
| `timeline` | data-display | Flowbite Svelte |
| `table-of-contents` | navigation | Ark UI, Svelte UX, Carbon |
| `bottom-navigation` | navigation | Flowbite Svelte |
| `footer` | layout | Flowbite Svelte |
| `stack` | layout | Svelte UX, Carbon |
| `virtual-list` | data-display | Flowbite Svelte, Carbon, Svelte UX (InfiniteScroll) |
| `icon` | data-display | Svelte UX, M3 Svelte, Sveltestrap, SVAR |
| `timer` / `relative-time` | date-time | Ark UI, Carbon |
| `locale-provider` | utilities | Skeleton, Ark UI, SVAR |
| `spatial-menu` | navigation | Melt (WIP) |
| chat components | (new category?) | shadcn-svelte, Carbon |

## Libraries to consider adding

Check Svelte 5 support, license and AI stance first: e.g. Svelte Material UI (`@smui/*`),
headless UI ports, and newer Svelte 5 libraries. Open an issue with the "Add a library"
template to discuss.

## Previews

- Tailwind-based libraries need the Tailwind setup described in [previews.md](previews.md#roadmap).
- Headless libraries (Melt, Ark UI) can get previews today, with no CSS needed.
- Styled libraries that ship plain CSS (Sveltestrap with Bootstrap CSS, M3 Svelte, SVAR) can
  get previews today.

## Data notes to double-check

- **Ark UI** docs URLs use the `/svelte/docs/...` form from its llms.txt. The site may open in
  another framework until the visitor switches to Svelte.
- **SVAR** component links go to official live samples, because the API docs site wasn't
  verifiable from the repo.
- **M3 Svelte** links go to anchored demo cards on its single-page docs.
- **Sveltestrap** uses one `Input` component for many form controls, and several entries point
  to that page.
- **Svelte UX 2.0** (Svelte 5, runes) is in prerelease. Update the entry when it's released.
