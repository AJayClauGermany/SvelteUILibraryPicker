# AGENTS.md

Instructions for AI coding agents (Claude Code, Codex, Cursor, Copilot, Gemini, Aider, …) and
for humans working with them. This is the canonical agent guide; tool-specific files
(`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`) just point here.

## What this project is

A static site that **compares Svelte UI libraries**: Svelte version support, components,
licenses, AI policies, and live previews of each library's **default** styling. Built with
[SveltePress](https://github.com/SveltePress/sveltepress) on SvelteKit 3 + Svelte 5 (runes).

We are a **secondary source**. The official docs are the source of truth. Never present our
data as authoritative, and never replace a library's docs.

## Non-negotiable rules

1. **Always link back.** Every library needs `docs`, `repository` and `license.url`, and
   every component needs a `docs` deep link to its official page. `pnpm validate` enforces it.
2. **Facts from primary sources only.** Get versions and peer ranges from npm
   (`npm view <pkg> version peerDependencies`), and licenses from the repo's LICENSE file.
   Get component lists and URLs from the official docs or the docs source in the library's
   repo. **Never guess a URL.** If you can't verify something, leave it out and say so in
   your PR.
3. **Own words only.** Descriptions and notes are short and written by you. Never copy docs
   prose, API tables, code examples, logos or screenshots.
4. **Respect licenses.** Record the SPDX id exactly as the LICENSE states. Previews only *use* a
   library from npm, the way a normal app would.
5. **Respect AI boundaries.** Before adding anything generated for a library, read its
   `ai.status`:
   - `welcomes` / `no-statement`: fine.
   - `restricted` / `unreviewed`: **facts and links only, no previews or generated content.**
     `pnpm validate` fails on previews for these libraries.
   - If `ai.upstreamContributing` is set and you are contributing to *that library's* repo for
     the user, follow it (e.g. don't write their PR descriptions with AI).
   - When reviewing a library's stance, check its repo and docs for `llms.txt`, MCP servers,
     `AGENTS.md`/`CLAUDE.md`, CONTRIBUTING sections on AI, and the LICENSE. Record what you
     found, with source URLs. Prefer a library's `llms.txt` when you need to read its docs.
6. **Neutral tone.** No rankings and no "best" claims.

## Commands

```sh
pnpm install
pnpm dev        # site + preview app on one dev server (http://localhost:5173)
pnpm validate   # data rules (vitest), fast; run after any data change
pnpm check      # svelte-check / TypeScript
pnpm build      # static site -> dist/ (site, then preview app into dist/preview)
pnpm verify         # validate + check + build; run before opening a PR
```

Node >= 22, pnpm 10.

## Where things live

| Path | What |
| --- | --- |
| `src/lib/data/schema.ts` | Types and rules for library entries (read this first) |
| `src/lib/data/components.ts` | Canonical component taxonomy (ids, categories, aliases) |
| `src/lib/data/libraries/<id>.ts` | One file per library (`export default defineLibrary({...})`) |
| `src/lib/data/validate.test.ts` | The data rules `pnpm validate` enforces |
| `previews/src/<library>/<component>.svelte` | Live previews (default styling only) |
| `previews/` | Standalone Vite app that renders previews in isolation at `/preview/` |
| `src/routes/` | Site pages (SveltePress: `.md` or `.svelte`) |
| `docs/` | Architecture, previews guide, backlog of known gaps |

## Conventions and gotchas

- **SvelteKit 3:** use `#lib/...` imports (not `$lib`) with explicit `.ts` extensions, e.g.
  `import { libraries } from '#lib/data/index.ts'`. There is no `svelte.config.js`; Kit options
  live in `vite.config.ts` under `sveltepress({ svelteKitOptions })`.
- **SveltePress wraps** every `src/routes/**/+page.(svelte|md)` in its PageLayout and the root
  `+layout.svelte` in its GlobalLayout. Don't name route files `+page@*.svelte`, because the
  SveltePress transform empties them. Dynamic pages set their title with
  `#lib/components/PageMeta.svelte`.
- **Previews never go through SvelteKit**, so site CSS can't leak in. Don't import site styles
  into `previews/`.
- Static svelte pages declare metadata with `<script module> export const frontmatter = {...}`.
- Svelte 5 runes only (`$state`, `$derived`, `$props`, `$effect`). Tabs, single quotes, no semicolons.
- Set `lastVerified` to today's date whenever you re-check an entry.

## Playbooks

Step-by-step procedures (plain Markdown, usable by any agent):

- [Add or update a library](docs/playbooks/add-library.md)
- [Add a live preview](docs/playbooks/add-preview.md)

## Pull requests

- Keep PRs focused: one library, one preview set, or one feature.
- Run `pnpm verify` and say in the PR what you verified and how (npm, repo path, docs URL).
- Say in the PR when an AI agent did the work (no blame, it helps reviewers).
