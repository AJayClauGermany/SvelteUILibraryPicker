---
name: review-change
description: Review a branch or PR (your own before opening it, or someone else's) against the project's rules, scope and sources.
---

# Playbook: review a change

Works for any agent or human, for your own branch before you open a PR or for someone else's PR.
Output: a short list of problems (or "looks good"), each pointing at a file and line.

## 1. See what it changes

```sh
pnpm changes            # data changes vs main: entries, fields (before → after), components, previews
pnpm changes --markdown # the same, ready to paste into the PR description
git diff origin/main --stat  # every file, including site code and docs
```

Reviewing a PR from a fork: fetch it first (`git fetch origin pull/<n>/head:pr-<n> && git checkout pr-<n>`).
In CI, the same summary is in the PR's job summary.

## 2. Scope

- [ ] It is about **one** thing: one entry, one preview set, one component id, one fix or one page.
      If `pnpm changes` lists more than one entry, ask for a split (unless an issue agreed on it,
      e.g. a new component id mapped across libraries).
- [ ] It links an issue labelled `pr-allowed` (`Closes #n`), unless it is a typo or broken-link
      fix or a maintainer's change. The "Linked issue" CI check tests this.
- [ ] Things found outside the scope are in a PR comment and an issue, not in the diff.
- [ ] No unrelated edits: formatting churn, renames, dependency bumps, refactors.

## 3. Facts and sources

For each changed field `pnpm changes` shows:

- [ ] `version`, `svelte.peerRange`: match `npm view <pkg>@<version> version peerDependencies`
      (`pnpm check:updates <id>` does this for the first package).
- [ ] `license`: the SPDX id in the repo's LICENSE file.
- [ ] Every new or changed `docs` URL opens the right page (`pnpm check:links <id>` catches dead
      links but not wrong ones; open a few by hand, and all of them for a new entry).
- [ ] `ai.status` and its `sources` match what the library's repo and docs actually say.
- [ ] `maintenance` facts come from `pnpm facts <id>`; `deprecated` only on an explicit notice.
- [ ] `lastVerified` is today's date on entries that were re-checked.
- [ ] The PR lists a source for each fact, and says what wasn't verified.

## 4. Wording

- [ ] Descriptions and notes are short and in the contributor's own words. Search a distinctive
      phrase of the text against the library's docs if it reads like docs prose.
- [ ] Neutral: no rankings, "best", "modern", "blazing fast" or other marketing language.

## 5. Previews (if any)

- [ ] The entry's `ai.status` is `welcomes` or `no-statement` (`pnpm validate` enforces this).
- [ ] Default styling only: no `<style>` blocks, classes or wrappers of ours; the library's CSS is
      imported inside the preview, as its install guide says.
- [ ] A minimal example of our own, not copied from the docs; the header has the docs URL.
- [ ] The devDependency is pinned to the exact version the entry records.
- [ ] `pnpm check:previews <id>` passes (add `--dark` if the library has a dark theme).

## 6. AI-assisted work

- [ ] The PR's "AI assistance" section is filled in.
- [ ] If an agent did most of the work, look harder at URLs, versions and claims about the
      library's AI policy: those are the facts agents most often get wrong.
- [ ] Someone who can answer questions about the change is behind it. PRs opened by an agent on
      its own are closed (CONTRIBUTING.md).

## 7. Checks

- [ ] CI is green (`pnpm validate`, `pnpm check`, `pnpm build`).

When you report findings, separate **blocking** problems (wrong facts, missing sources, scope,
rule violations) from **suggestions**. Don't push fixes to someone else's branch without asking.
