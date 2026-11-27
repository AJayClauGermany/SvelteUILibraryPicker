---
name: add-props
description: Record canonical component props (`api` on library components) and library-wide conventions used by the props tables and the /port/ page. Use when asked to add or fix props, conventions or porting data.
---

Follow [docs/playbooks/add-props.md](../../../docs/playbooks/add-props.md) step by step. The
canonical props and conventions are defined in `src/lib/data/props.ts`.

- One library per branch. Read the component source or API docs of the exact version the entry
  records; use `null` for "no equivalent", and leave a prop out when you can't verify it.

When you're done, run `pnpm validate` and `pnpm changes`, and show the user the summary.
