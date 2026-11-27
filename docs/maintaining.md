# Maintaining the project

A guide for the people (and agents) who keep the data current. Most questions about the
project's state have a command that answers them, so you shouldn't need to read data files to
find out what's missing or stale. All commands are read-only unless they say otherwise.

## Quick answers

| Question | Command |
| --- | --- |
| How is the project doing overall? | `pnpm status` |
| What do we have on a library, tool or component? | `pnpm about <id>` (aliases work: `pnpm about modal`) |
| Which previews are still missing? | `pnpm coverage --todo` |
| Why does this entry lack a preview? | `pnpm coverage --why <id>` |
| Did a library release a new version? Did its Svelte support change? | `pnpm check:updates` |
| Are any docs links broken? | `pnpm check:links` (or `pnpm check:links <id>`) |
| Is the maintenance badge still right? | `pnpm facts <id>` (npm dates, last commit, archived) |
| Do the previews of a library still render? | `pnpm check:previews <id>` (add `--dark`, `--shots <dir>`) |
| Is my change valid? | `pnpm validate` (data rules), then `pnpm verify` before a PR |
| What does this branch or PR change in the data? | `pnpm changes` (or `pnpm changes <ref>`); then the [review playbook](playbooks/review-change.md) |
| I'm adding something new | `pnpm new library\|tool\|preview ...` (see below) |

`status`, `about`, `coverage`, `changes`, `check:updates` and `check:links` take `--json` (for
agents and scripts); `status`, `changes`, `check:updates` and `check:links` also take `--markdown`. `new` takes
`--dry-run`, and `check:previews` takes `--dark` and `--shots <dir>`.

## Reviewing pull requests

Use the [review playbook](playbooks/review-change.md). Each PR's CI job summary has the
`pnpm changes` report (entries, fields before and after, previews), and a warning annotation when
it touches more than one entry. Ask for a split rather than reviewing a large PR as one piece;
sweeping updates are maintainer work from the `data-health` issue.

## Weekly issue triage

Contributions are paced by one label: **`pr-allowed`** means "a PR for this issue is welcome
now". Once a week, go through the open issues that don't have it (the `data-health` issue links
the search):

- **Ready and in scope**: add `pr-allowed`, plus `good first issue` or `help wanted` where it
  fits. Make sure the issue says what "done" looks like, sized for one small PR.
- **Too big**: split it into issues that are each one PR, then label those.
- **Not now, duplicate or out of scope**: close it with a short reason. When many issues come in,
  closing the ones you won't label soon keeps the list short; they can be reopened later.

The "Linked issue" check (`.github/workflows/pr-scope.yml`) fails on PRs that don't link a
`pr-allowed` issue. It skips PRs opened from a branch in this repository (people with write
access), PRs by owners, members and collaborators, and PRs that carry
`pr-allowed` themselves (add it to accept a PR that came without an issue). It re-runs when the
PR is edited or labelled; after you label the *issue*, re-run the check from the PR's Checks tab.
It is not a required check unless you make it one in branch protection.

The weekly health workflow creates the labels this process uses (`pr-allowed`,
`good first issue`, `help wanted`, `site`, `data-health`); the issue templates also set
`library-request`, `data` and `maintainer-request`.

## The weekly routine

The [Data health workflow](../.github/workflows/health.yml) runs every Monday and keeps one open
issue labelled `data-health` up to date. Nothing is changed automatically: the issue is a to-do
list. You can run it by hand from the Actions tab, or run the same commands locally.

How to act on each kind of finding:

| Finding | What to do |
| --- | --- |
| **Update** (`check:updates`): a newer release than the data records | Re-check the entry against the new version with the [library playbook](playbooks/add-library.md): `version`, `svelte.peerRange`, new or removed components, then `lastVerified`. If the entry has previews, bump its devDependency to the same exact version and run `pnpm check:previews <id>`. A patch release rarely changes anything we record, so those are listed as `info`. |
| **Peer range changed** in the newer release | Svelte support may have changed: update `svelte.supported` too. |
| **Data error** (`check:updates`): our `peerRange` differs from npm's for the recorded version, or npm doesn't have the recorded version | A real mistake in the data. Fix it from `npm view <pkg>@<version> peerDependencies`. |
| **Deprecated on npm** | Read the message and the README, then record `maintenance.deprecated` in your own words (see the playbook). |
| **Broken link** (`check:links`) | Find the new page in the official docs (never guess). If the component was removed upstream, remove it from the entry. |
| **Blocked / error link** | Usually bot protection or a hiccup. Open it in a browser before changing anything. |
| **Stale entry** (`status`): `lastVerified` or `maintenance.checked` older than 90 days | Re-check the entry, or at least run `pnpm facts <id>` and refresh `maintenance`. |
| **Version pin drift** (`status`): a preview runs a different version than the data records | Align `package.json` with the entry's `version` (exact, no `^`). |

## Preview gaps

Every component a library or tool lists is in one of five states, shown by `pnpm coverage` and
`pnpm about <id>`:

- **done**: `previews/src/<id>/<component>.svelte` exists.
- **to do**: nothing stops it; this is real work waiting.
- **skipped**: left out on purpose. The reason is in
  [`src/lib/data/preview-skips.ts`](../src/lib/data/preview-skips.ts), the only place reasons are
  kept. Delete a line when its reason stops being true (e.g. a library ships Svelte 5 support);
  the component then shows up as to do.
- **blocked**: the entry's `ai.status` is `restricted` or `unreviewed`, so no previews at all.
- **non-visual**: renders nothing on its own (portal, focus trap...).

`pnpm validate` keeps the skip list honest: it fails when a skip names a component the entry
doesn't list, or one that already has a preview.

## Starting new work

`pnpm new` writes a starting file, so you never begin from a blank page or a copy of another
entry:

```sh
pnpm new library my-kit --package my-kit       # src/lib/data/libraries/my-kit.ts
pnpm new tool my-chart --package my-chart      # src/lib/data/tools/my-chart.ts
pnpm new preview bits-ui slider                # previews/src/bits-ui/slider.svelte
```

Library and tool files are prefilled from npm (version, peer range, license id, repository,
release date). Everything that needs reading the docs is a `TODO` string, and `pnpm validate`
fails until no `TODO` is left. Preview files get the header comment with the component's docs URL
and the imports every other preview of that library shares; the command also prints the install
and check commands you need next. Add `--dry-run` to see the file first.

## What runs where

| When | What | Where |
| --- | --- | --- |
| Every PR and push to `main` | `pnpm validate`, `pnpm check`, `pnpm build`, and `pnpm status` in the job summary | [ci.yml](../.github/workflows/ci.yml) |
| Every PR | `pnpm changes` in the job summary, with a warning when it touches more than one entry | [ci.yml](../.github/workflows/ci.yml) |
| Every push to `main` | Build and deploy to GitHub Pages | [deploy.yml](../.github/workflows/deploy.yml) |
| Every PR (opened, edited, labelled) | Links an issue labelled `pr-allowed`, unless a maintainer opened it | [pr-scope.yml](../.github/workflows/pr-scope.yml) |
| Mondays, or by hand | `check:updates`, `check:links`, `status` into the `data-health` issue, a link to the issues waiting for triage, and the process labels | [health.yml](../.github/workflows/health.yml) |

## Where to change what

| To change | Edit |
| --- | --- |
| Facts about one library or tool | `src/lib/data/libraries/<id>.ts` or `src/lib/data/tools/<id>.ts` (`pnpm about <id>` prints the path) |
| The list of component types | `src/lib/data/components.ts` |
| Canonical props and porting conventions | `src/lib/data/props.ts` ([props playbook](playbooks/add-props.md)) |
| What fields an entry has, and their rules | `src/lib/data/schema.ts` (types) and `src/lib/data/validate.test.ts` (rules) |
| A live preview | `previews/src/<id>/<component>.svelte` ([preview playbook](playbooks/add-preview.md)) |
| Why a preview is missing | `src/lib/data/preview-skips.ts` |
| Light/dark switches for previews | `previews/theme.svelte.ts` |
| Site pages and layout | `src/routes/`, `src/lib/components/` ([architecture](architecture.md)) |
| The maintainer commands | `scripts/` (shared helpers in `scripts/lib/`) |

## Limits worth knowing

- `check:links` can't see a wrong `#fragment`, and docs sites that render client-side answer 200 for
  any path; [backlog.md](backlog.md) lists the entries where that applies.
- `check:updates` only looks at each entry's first package. Copy-paste registries (shadcn-style)
  are skipped because their version is the registry's own; use `pnpm facts <id>`, which reads repo
  tags.
- None of the commands decide anything for you. They point at what to re-check; the facts still
  come from the official docs, npm and the repository.
