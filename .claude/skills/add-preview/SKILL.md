---
name: add-preview
description: Add live previews (previews/src/<library>/<component>.svelte) that show a library's or tool's default styling. Use when asked to add, fix or fill in previews, or to work on `pnpm coverage --todo`.
---

Follow [docs/playbooks/add-preview.md](../../../docs/playbooks/add-preview.md) step by step.
Background (what "default" means per library, light/dark, copy-paste libraries) is in
[docs/previews.md](../../../docs/previews.md).

Stop before writing anything if the entry's `ai.status` is `restricted` or `unreviewed`
(`pnpm about <id>` shows it): those libraries get facts and links only.

- One library's previews per branch. `pnpm coverage --why <id>` lists what is done, to do or
  skipped (and why).
- Default styling only, a minimal example of your own, no styles of ours.
- If a component can't get a preview, add the reason to `src/lib/data/preview-skips.ts`.

When you're done, run `pnpm check:previews <id>` (and `--dark`), `pnpm validate` and
`pnpm changes`, and tell the user which previews you added and which you skipped.
