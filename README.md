# Svelte UI Library Picker

Compare Svelte UI libraries side by side: **Svelte version support, components, licenses, AI
policies, and live previews of each library's default styling**. Every entry links back to
the library's official documentation.

Inspired by [UI Libs](https://ui-libs.vercel.app) for Vue. This is an independent community
project, not affiliated with any library listed.

> **We are a secondary source.** This site helps you shortlist. The official docs are always the
> source of truth, so every library and every component links straight to them.

## Features

- **Libraries:** filter by Svelte major (3/4/5), styling approach, and license.
- **Components:** every library's components mapped onto one shared list, so a *Dialog* lines up
  with a *Modal*.
- **Compare:** pick libraries and see which components each provides, with docs links in every
  cell. Click a component to see live previews side by side.
- **Live previews:** each preview renders in an isolated iframe with only that library's CSS,
  so you see its true default look.
- **Licenses and AI policy:** recorded per library with sources, and our contribution rules
  follow them.

## Quick start

```sh
pnpm install
pnpm dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Site and preview app on one dev server |
| `pnpm validate` | Data rules: docs links, licenses, AI policy, taxonomy |
| `pnpm check` | `svelte-check` / TypeScript |
| `pnpm build` | Static output in `dist/` (deployable to any static host) |
| `pnpm verify` | All of the above |

Requires Node 22+ and pnpm 10.

## Tech

[SveltePress](https://github.com/SveltePress/sveltepress) (default theme) on SvelteKit 3,
Svelte 5 (runes), Vite 8 and `adapter-static`. Previews are a separate tiny Vite + Svelte app
in `previews/`; see [docs/architecture.md](docs/architecture.md).

## Contributing

Humans and AI agents are both welcome.

- Humans: start with [CONTRIBUTING.md](CONTRIBUTING.md).
- Agents: read [AGENTS.md](AGENTS.md). Claude Code, Gemini CLI and Copilot have small pointer
  files (`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`).
- Known gaps and good first issues: [docs/backlog.md](docs/backlog.md).

## License

The code in this repository is MIT licensed ([LICENSE](LICENSE)). Library names belong to their
owners, and each library stays under its own license, linked on its page.
