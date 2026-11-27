---
name: add-tool
description: Add or update a tool entry in src/lib/data/tools/ (single-purpose Svelte packages such as charts, toasts, maps, editors, or building blocks such as positioning and runes helpers). Use when asked to add, update or re-verify a tool.
---

Follow [docs/playbooks/add-tool.md](../../../docs/playbooks/add-tool.md) step by step. It is the
canonical procedure; this skill only points at it.

- One tool per branch. Start with `pnpm new tool <id> --package <npm>`.
- Facts from npm, the repo and the official docs only. Never guess a URL.

When you're done, run `pnpm validate`, `pnpm check:links <id>` and `pnpm changes`, and show the
user the summary and your sources before a PR is opened.
