---
name: add-library
description: Add or update a Svelte UI library entry in src/lib/data/libraries/ (versions, Svelte support, components and docs links, license, AI policy, maintenance). Use when asked to add, update, re-verify or fix a library entry.
---

Follow [docs/playbooks/add-library.md](../../../docs/playbooks/add-library.md) step by step. It is
the canonical procedure; this skill only points at it.

Before you start:

- Work on **one library** per branch. If the task covers several, ask the user to split it, or
  use one subagent per library, each writing only its own `src/lib/data/libraries/<id>.ts`.
- Facts come from npm, the repo's LICENSE and the official docs (or the docs source in a shallow
  clone). Never guess a URL; leave out what you can't verify and tell the user.

When you're done, run `pnpm validate`, `pnpm check:links <id>` and `pnpm changes`, then show the
user the `pnpm changes` summary and the list of sources you used, so they can check them before a
PR is opened. Don't open the PR on your own unless the user asked you to.
