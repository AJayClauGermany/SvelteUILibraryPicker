---
name: maintain
description: Work through project health findings (the weekly data-health issue, `pnpm status`, newer npm releases, broken links, stale entries, version pin drift). Use when asked what needs doing, what is stale or missing, or to act on the health report.
---

[docs/maintaining.md](../../../docs/maintaining.md) maps each question to a command and each kind
of finding to what to do. Use the commands instead of reading data files:

- `pnpm status`: overview (counts, preview gaps, stale entries, version pins)
- `pnpm check:updates [<id>]`, `pnpm check:links [<id>]`, `pnpm facts <id>`
- `pnpm about <id>`: everything about one library, tool or component

Fix findings **one entry per branch**, using the add-library, add-tool or add-preview skill for
the actual change. If the user asks for a sweep across many entries, suggest one PR per entry (or
a small batch of the same kind of fix agreed in an issue), and list what you'd do first.
