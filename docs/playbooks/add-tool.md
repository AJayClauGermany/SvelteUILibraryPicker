---
name: add-tool
description: Add or update a tool entry (a single-purpose Svelte package or a building block for components) with verified facts and links.
---

# Playbook: add or update a tool

Works for any agent or human. Output: one file, `src/lib/data/tools/<id>.ts`.

Tools are packages that are **not** full UI libraries: they cover one kind of component (charts,
data tables, toasts, drawers…) or help you build your own components (positioning, dates, forms).
They're listed at `/tools/` and linked from the component and library pages.

## 1. Check it belongs

- It has public docs, a repo and an npm package.
- It isn't already listed (`ls src/lib/data/tools`).
- **Grounding rule (for now):** it maps to at least one canonical component that a tracked library
  already provides (`pnpm validate` enforces this). Tools for components no library has yet wait
  until we widen the scope; add them to `docs/backlog.md` instead.

## 2. Gather facts from primary sources

Same sources as the [library playbook](add-library.md): npm for `version` and the `svelte` peer
range, the repo's LICENSE file for `license`, and the docs or repo for `docs`/`repository`.

| Field | Notes |
| --- | --- |
| `kind` | `component` (ready-made, styled or styleable), `headless` (state/behaviour, you render the markup) or `utility` (a lower-level helper). See `toolKindInfo` in `schema.ts`. |
| `svelte` | Omit for framework-agnostic packages (e.g. `@floating-ui/dom`) and say so in `notes`. |
| `components` | Canonical ids from `components.ts` that the tool provides or helps build. |
| `usedBy` | Tracked libraries that depend on it or officially document it, each with a source (their `package.json`, a docs page, or a registry file). Check with `npm view <library-pkg> dependencies peerDependencies --json`. `[]` is fine. |
| `ai` | Same rules as libraries (`llms.txt`, MCP, `AGENTS.md`, CONTRIBUTING, LICENSE). |

**Never guess a URL.** If the docs site is unreachable, `git clone --depth 1` the repo and read
the docs source.

## 3. Write the file

Copy an existing tool (e.g. `layerchart.ts`) and follow the `Tool` type in `src/lib/data/schema.ts`.
Description: one sentence, own words, neutral. Set `lastVerified` to today.

## 4. Verify

```sh
pnpm validate && pnpm check
```

In the PR description, list how you verified each fact and anything you couldn't verify.
