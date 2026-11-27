# Decisions

Why the project does things the way it does. Each entry is a settled question with its date and
reason, so contributors (and agents) don't have to argue it again. To change one, open an issue
that says what changed since the decision was made. Open work lives in [backlog.md](backlog.md).

## Scope and sources

- **We are a secondary source** (2026-11-03). Every library, tool and component links to its
  official docs; facts come from npm, the repo and the docs only; text is in our own words. Rules 1
  to 3 in [AGENTS.md](../AGENTS.md), enforced in part by `pnpm validate`.
- **No rankings** (2026-11-03). The site helps people shortlist, it doesn't choose for them.
- **Undocumented exports are left out** (2026-11-04). Without a docs page there is no deep link to
  give, e.g. Svelte UX `Kbd`, Sveltestrap `Portal`, M3 Svelte `ChipChooser`, Ark UI `Portal`.
- **Guides and recipes aren't components** (2026-11-04). Skeleton's Code Block, Table of Contents,
  Alerts, Breadcrumbs, Light Switch and Clipboard cookbook pages are docs recipes, not shipped
  components, so they aren't mapped. Revisit only if the taxonomy ever lists recipes.
- **Entries follow the npm release, not the docs branch** (2026-11-04). Carbon Components Svelte
  deploys its docs from `master`, which documents about 25 components that the published version
  doesn't export; the entry lists what the release ships.
- **When docs hosts are blocked, read the docs source** (2026-11-04). URLs may be derived from the
  routing of the docs site in a shallow clone of the repo, and the PR says so. Never guess.
- **`lastVerified` means the whole entry was re-checked** (2026-11-22). A pass that only checks
  props or one field leaves it alone.

## What gets listed

- **shadcn-style registries are libraries** (2026-11-04). They have no npm package of their own, so
  `packages` holds the install CLI (`shadcn-svelte`, `jsrepo`), `version` is the registry's own
  release or repo version, `styling` includes `copy-paste`, and `notes` says how it installs.
- **Old, idle and archived libraries are listed** (2026-11-24), each with a maintenance badge
  (Active, Quiet, Legacy, Deprecated), for reference and migration planning. Being old, idle,
  Svelte 3/4-only or archived is not a reason to leave a library out. A missing LICENSE file or
  missing public docs still is. Notes from that pass: [legacy-libraries.md](legacy-libraries.md).
- **"Deprecated" needs an explicit notice** (2026-11-24): an npm deprecation, an archived repo
  with a notice, or a README that says the project is unmaintained. Being quiet is not enough;
  a "bug fixes only" freeze is Legacy, not Deprecated.
- **Prereleases wait** unless the library's own install docs use them (2026-11-04). YeSvelte
  records its `next` dist-tag for that reason; Svelte UX 2.0 waits for a stable release.
- **Single-purpose packages are tools, not libraries** (2026-11-06). Charts, toasts, drawers, data
  tables, editors and building blocks (positioning, dates, forms) live in `src/lib/data/tools/`.
  Libraries for other frameworks (AgnosticUI, FlyonUI, daisyUI) aren't listed at all.
- **Tools may fill gaps** (2026-11-22). A tool can map to a component no tracked library provides
  (maps, drag and drop...), and general `utility` helpers (runed, svelte-toolbelt) may map to none.

## Previews

- **Previews show default styling only** (2026-11-03): the library's theme exactly as its install
  guide sets it up, a minimal example of our own, and no styles of ours. Headless libraries are
  shown unstyled on purpose. Details in [previews.md](previews.md).
- **Previews are a separate app** (2026-11-03) rendered in iframes, so the site's CSS can't leak
  in. See [architecture.md](architecture.md#why-previews-are-a-separate-app).
- **No previews or generated content for `restricted` or `unreviewed` libraries** (2026-11-03).
  We respect a library's stance on AI; `pnpm validate` enforces it.
- **Preview packages are pinned to the version the entry records** (2026-11-24, checked by `pnpm status`), so a preview
  shows what the data describes.
- **Why a preview is missing lives in one file** (2026-11-24):
  [`src/lib/data/preview-skips.ts`](../src/lib/data/preview-skips.ts), checked by `pnpm validate`.
- **Render checks, not screenshot tests** (2026-11-04). Fonts, third-party assets and animation
  timing make pixel comparisons flaky in CI, and a tolerant comparison may miss real regressions.
  `pnpm check:previews` opens each preview in headless Chromium and fails on errors or empty
  renders. Revisit with a plan for deterministic rendering (bundled fonts, blocked network,
  disabled animations).
- **Type hovers without diagnostics** (2026-11-08). Twoslash runs with `noErrors`, because its
  TypeScript setup doesn't resolve every library's types the way the real build does.

## Props and porting

- **Canonical props only for components where libraries agree** (2026-11-22). Card and table vary
  too much for a short shared list.
- **No value mapping for choice props** (2026-11-22). Saying which variant in one library is "the
  same" as another's is a judgement call, not a fact. Revisit only with a clear rule.

## Contributions

- **Small, human-reviewed PRs** (2026-11-27). One library, tool, preview set, component id, fix or
  page per PR, starting from an issue. AI tools are welcome as tools, but a person reads the diff,
  checks the sources and answers review comments; PRs opened by an agent on its own are closed.
  Sweeping updates are done by maintainers from the weekly `data-health` issue. See
  [CONTRIBUTING.md](../CONTRIBUTING.md).
