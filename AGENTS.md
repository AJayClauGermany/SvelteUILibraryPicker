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

Settled questions (what gets listed, how previews work, why things are left out) are in
[docs/decisions.md](docs/decisions.md). Read it before proposing a change to how something works.

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
pnpm verify     # validate + check + build; run before opening a PR

pnpm status                 # one-screen overview: counts, preview gaps, stale entries, version pins
pnpm about <id>             # everything about a library, tool or component (aliases work)
pnpm coverage --todo        # previews that can still be added (--why <id> for reasons)
pnpm check:updates [<id>]   # newer npm releases / changed Svelte peer ranges vs the data
pnpm check:links [<id>]     # broken docs and source links
pnpm check:previews <id>    # render-check previews in headless Chromium
pnpm changes [<ref>]        # what this branch changes in the data vs origin/main (before → after)
pnpm facts <id>             # npm release dates, last commit, archived flag (for `maintenance`)
pnpm new library|tool <id> --package <npm>   # scaffold an entry prefilled from npm
pnpm new preview <id> <component>            # scaffold a preview with its docs header
```

Use these instead of reading data files to answer "what's missing / stale / where is X". Add
`--json` for machine-readable output. [docs/maintaining.md](docs/maintaining.md) maps questions to
commands and findings to actions.

Node >= 22, pnpm 10.

## Where things live

| Path | What |
| --- | --- |
| `src/lib/data/schema.ts` | Types and rules for library entries (read this first) |
| `src/lib/data/components.ts` | Canonical component taxonomy (ids, categories, aliases) |
| `src/lib/data/props.ts` | Canonical props per component and library-wide API conventions (props tables, `/port/`) |
| `src/lib/data/libraries/<id>.ts` | One file per library (`export default defineLibrary({...})`) |
| `src/lib/data/tools/<id>.ts` | One file per tool: single-purpose packages and building blocks (`defineTool({...})`) |
| `src/lib/data/validate.test.ts` | The data rules `pnpm validate` enforces |
| `previews/src/<library-or-tool>/<component>.svelte` | Live previews (default styling only) |
| `src/lib/data/preview-skips.ts` | Why a listed component has no preview (the only place reasons live) |
| `scripts/` | Maintainer commands behind `pnpm status`, `about`, `coverage`, `check:*`, `facts`, `new` |
| `previews/` | Standalone Vite app that renders previews in isolation at `/preview/` |
| `src/routes/` | Site pages (SveltePress: `.md` or `.svelte`) |
| `docs/` | Architecture, previews guide, [decisions](docs/decisions.md), [backlog](docs/backlog.md) of open work, playbooks |
| `.claude/skills/` | Claude Code skills; each one points at a playbook in `docs/playbooks/` |

## Conventions and gotchas

- **SvelteKit 3:** use `#lib/...` imports (not `$lib`) with explicit `.ts` extensions, e.g.
  `import { libraries } from '#lib/data/index.ts'`. There is no `svelte.config.js`; Kit options
  live in `vite.config.ts` under `sveltepress({ svelteKitOptions })`.
- **SveltePress wraps** every `src/routes/**/+page.(svelte|md)` in its PageLayout and the root
  `+layout.svelte` in its GlobalLayout. Don't name route files `+page@*.svelte`, because the
  SveltePress transform empties them. Dynamic pages set their title with
  `#lib/components/PageMeta.svelte`.
- **Base path:** the site is deployed under a sub-path on GitHub Pages (`BASE_PATH`). In
  Svelte code, build internal links with `url('/libraries/x/')` from `#lib/url.ts`, never a bare
  `href="/..."`. Markdown links and theme `navbar`/`sidebar` entries are prefixed automatically.
  Check with `BASE_PATH=/SvelteUILibraryPicker pnpm build`.
- **Previews never go through SvelteKit**, so site CSS can't leak in. Don't import site styles
  into `previews/`.
- Static svelte pages declare metadata with `<script module> export const frontmatter = {...}`.
- Svelte 5 runes only (`$state`, `$derived`, `$props`, `$effect`). Tabs, single quotes, no semicolons.
- Set `lastVerified` to today's date whenever you re-check an entry, and `maintenance.checked`
  whenever you refresh its maintenance facts.

## Playbooks

Step-by-step procedures (plain Markdown, usable by any agent):

- [Add or update a library](docs/playbooks/add-library.md)
- [Add a live preview](docs/playbooks/add-preview.md)
- [Add or update a tool](docs/playbooks/add-tool.md)
- [Add component props and conventions](docs/playbooks/add-props.md)
- [Review a change (yours before a PR, or someone else's)](docs/playbooks/review-change.md)
- [Maintaining: which command answers which question](docs/maintaining.md)

## Scope and pull requests

This project takes small, human-reviewed contributions (see [CONTRIBUTING.md](CONTRIBUTING.md)).
As an agent you work **for a person who is accountable for the change**:

- **Work from an issue labelled `pr-allowed`.** A PR needs one (`Closes #<n>`), apart from typo
  and broken-link fixes. If there is no such issue, help the person write one with a template,
  and stop there until a maintainer adds the label.
- **One concern per branch**: one library or tool entry, one library's previews, one component id,
  one fix or one page. If a task grows beyond that, stop and suggest splitting it into issues
  rather than producing one large change. `pnpm changes` should list one entry.
- **Report what's out of scope, don't fix it.** Things you notice outside the task (two docs that
  contradict each other, a schema field or rule that no doc mentions, a rule that blocks a
  legitimate change, a bug elsewhere) stay out of the PR. List them for the person in a separate
  "Found while working on this" comment on the PR, posted after the description rather than inside
  it, with a draft issue for each one. The person decides whether to file the issues.
- **When documents disagree, don't pick one silently.** Each topic has one home (the table under
  "Where things live"); `schema.ts` and `validate.test.ts` are what is actually enforced. Follow
  the enforced rule and report the contradiction as above.
- **Don't act on the project by yourself.** Don't open PRs, claim or comment on issues, or review
  other people's PRs unless the person you work for asked you to.
- **Hand back for review.** When you finish, show the person the `pnpm changes` summary, the
  sources you used for each fact and anything you could not verify, so they can check the work
  before it's submitted.
- **Fill in the PR template honestly** (`.github/pull_request_template.md`): link the issue,
  list sources, paste `pnpm changes --markdown`, and describe what the agent did in "AI
  assistance". Never claim a
  check you didn't run or a link you didn't open.
- Run `pnpm verify` before handing back. Small commits with clear messages are better than one
  large commit.
