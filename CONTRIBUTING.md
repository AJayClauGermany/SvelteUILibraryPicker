# Contributing

Thanks for helping. Contributions from people and from AI agents are equally welcome. Agents
(and people driving them) should also read [AGENTS.md](AGENTS.md).

## Principles

1. **Secondary source.** We link to official docs and never replace them. Every library and
   component entry must have an official docs link.
2. **Verified facts only.** Take facts from npm, the library's repo, or its docs. If you can't
   verify something, leave it out.
3. **Own words.** Don't copy docs prose, code examples, or brand assets.
4. **Licenses.** Record each library's license accurately and follow it.
5. **AI boundaries.** Each library has an `ai.status`. For `restricted` or `unreviewed`
   libraries we accept facts and links only, with no previews or generated content.
   `pnpm validate` enforces this.
6. **Neutral.** No rankings or "best" claims.

## Setup

```sh
pnpm install
pnpm dev
```

Before opening a PR, run `pnpm verify` (validate, type check, build).

## Common contributions

### Fix or update data

Edit `src/lib/data/libraries/<id>.ts`, set `lastVerified` to today, and run `pnpm validate`.
In the PR, link the source that proves the change.

### Add a library

Follow [docs/playbooks/add-library.md](docs/playbooks/add-library.md). One library per PR, please.

### Add a tool

Follow [docs/playbooks/add-tool.md](docs/playbooks/add-tool.md). Tools are single-purpose
packages (charts, data tables, toasts…) and building blocks for your own components.

### Add a live preview

Follow [docs/playbooks/add-preview.md](docs/playbooks/add-preview.md). Background is in
[docs/previews.md](docs/previews.md).

### Add a component type

Add a generic, kebab-case id to `src/lib/data/components.ts` in the right category, with aliases
other libraries use. Then map libraries to it.

### Site features

Pages are in `src/routes/` (Markdown or Svelte) and shared UI is in `src/lib/components/`. See
[docs/architecture.md](docs/architecture.md). For anything big, open an issue first.

## Using AI agents

- It's fine to use agents for any part of this repo, within the rules above.
- Say in your PR when an agent did the work, and what you checked yourself.
- Agents must not invent facts or URLs. "Unverified, left out" is a good outcome.
- If you contribute *upstream* to a library, follow that library's own rules (recorded as
  `ai.upstreamContributing` on its entry).

## Library maintainers

If you maintain a listed library and want something corrected, changed, or removed (including
previews or AI-related handling), open an issue using the "Maintainer request" template. These
get priority.

## Code of conduct

Be kind and assume good faith. We follow the
[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
