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
- It maps to at least one canonical component in `components.ts` (`pnpm validate` enforces this;
  only `utility` tools may map to none). The component **doesn't** have to be provided by a tracked
  library: tools that fill gaps (maps, flow diagrams, 3D scenes, scheduling calendars, i18n...) are
  welcome. If no id fits, add a generic one to `components.ts` first, then map any tracked library
  that already documents that component (with verified docs URLs).
- It supports Svelte 5 (or is framework-agnostic with a documented way to use it in Svelte) and
  has had a release in the last ~18 months. Note quiet or prerelease packages in `notes`.

## 2. Gather facts from primary sources

Same sources as the [library playbook](add-library.md): npm for `version` and the `svelte` peer
range, the repo's LICENSE file for `license`, and the docs or repo for `docs`/`repository`.

| Field | Notes |
| --- | --- |
| `kind` | `component` (ready-made, styled or styleable), `headless` (state/behaviour, you render the markup) or `utility` (a lower-level helper). See `toolKindInfo` in `schema.ts`. |
| `svelte` | Omit for framework-agnostic packages (e.g. `@floating-ui/dom`) and say so in `notes`. |
| `components` | Canonical ids from `components.ts` that the tool provides or helps build. |
| `usedBy` | Tracked libraries that depend on it or officially document it, each with a source (their `package.json`, a docs page, or a registry file). Check with `npm view <library-pkg> dependencies peerDependencies --json`. `[]` is fine. If a library's own `dependencies` lists the tool's package, `pnpm validate` requires that library here too. |
| `ai` | Same rules as libraries (`llms.txt`, MCP, `AGENTS.md`, CONTRIBUTING, LICENSE). |

**Never guess a URL.** If the docs site is unreachable, `git clone --depth 1` the repo and read
the docs source.

## 3. Write the file

Copy an existing tool (e.g. `layerchart.ts`) and follow the `Tool` type in `src/lib/data/schema.ts`.
Description: one sentence, own words, neutral. Set `lastVerified` to today, and fill `maintenance` from `node scripts/maintenance-facts.js <id>` (same rules as in [add-library.md](add-library.md)).

## 4. Verify

```sh
pnpm validate && pnpm check
```

In the PR description, list how you verified each fact and anything you couldn't verify.
