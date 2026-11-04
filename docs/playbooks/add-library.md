---
name: add-library
description: Add or update a Svelte UI library entry with verified facts, docs links, license and AI policy.
---

# Playbook: add or update a library

Works for any agent or human. Output: one file, `src/lib/data/libraries/<id>.ts`.

## 1. Check it belongs

- It's a Svelte UI component library (or builder/primitive set) with public docs.
- It isn't already listed (`ls src/lib/data/libraries`).

## 2. Gather facts from primary sources

| Field | Source |
| --- | --- |
| `version`, `svelte.peerRange` | `npm view <pkg> version peerDependencies --json` |
| `svelte.supported` | Peer range. If there's none, check the repo's package.json, CI and changelog |
| `svelte.runes` | Read the component source (`$props()` vs `export let`) |
| `license` | The LICENSE file in the repo (SPDX id exactly as stated) |
| `docs`, `repository` | Package `homepage`/`repository` fields and the README |
| `components[].docs` | The docs site, or the docs source routing in the repo (e.g. `docs/content/components/x.md` gives `/docs/components/x`) |
| `dependencies` | `npm view <pkg>@<version> peerDependencies peerDependenciesMeta --json`, plus the install / getting-started and theming docs (Tailwind, UnoCSS, Sass, PostCSS, CSS framework, Vite plugins) |
| `features` | The docs and source, against the definitions in `featureInfo` in `schema.ts` (e.g. `semantic-colors` needs role-based color props the theme maps; `accessibility` needs per-component keyboard/ARIA docs) |
| `ai` | Look for `llms.txt`, MCP servers, `AGENTS.md`/`CLAUDE.md`, CONTRIBUTING sections on AI, and LICENSE terms |

If the docs site is unreachable: `git clone --depth 1 <repo>` into a temp dir and read the docs source.
**Never guess a URL.**

## 3. Write the file

Copy an existing entry (e.g. `bits-ui.ts`) and follow `src/lib/data/schema.ts`:

- `description`: one sentence in your own words.
- `components`: map each documented component to a canonical id in `src/lib/data/components.ts`.
  Use one entry per id, choosing the closest match and noting alternatives in `notes`. If no id
  fits, add a generic one to `components.ts` (kebab-case, right category), or list the
  component in the PR description and `docs/backlog.md`.
- `dependencies`: packages the user adds to *their* project besides `svelte` and `packages`. Don't
  list the library's regular `dependencies` (npm installs those). Each item needs `kind`, `required`
  (does a basic install need it?) and a `source` URL. Use `[]` when nothing else is needed. If
  `styling` includes `tailwind`, list `tailwindcss` as required with its major in `range`.
- `ai.status`:
  - `welcomes`: an explicit pro-AI signal (llms.txt, MCP, agent skills, AI docs).
  - `no-statement`: you checked and found nothing.
  - `restricted`: they limit AI use of their project. Describe exactly what's limited.
  - Rules that only cover contributing to *their* repo go in `ai.upstreamContributing`.
- `lastVerified`: today's date (YYYY-MM-DD).

## 4. Verify

```sh
pnpm validate && pnpm check
```

In the PR description, list how you verified each fact and anything you couldn't verify.
