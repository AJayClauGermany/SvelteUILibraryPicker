---
title: Contributing
---

This site is a curated, secondary source, so we favour **small, focused contributions from people
who check their own work**. The full guide is
[CONTRIBUTING.md](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/CONTRIBUTING.md).

## How it works

1. **Start from an issue.** Pick an open one or open one with a template. Typo and broken-link
   fixes can skip this.
2. **One concern per PR**: one library or tool entry, one library's previews, one component type,
   one fix or one page.
3. **Link a source for every fact** you add or change: npm, the library's repo, or its official
   docs. If you can't verify something, leave it out and say so.
4. **Run the checks**: `pnpm verify` must pass, and `pnpm changes` shows what your branch does to
   the data.

```sh
pnpm install
pnpm dev        # local site
pnpm verify     # data rules, type check, build
pnpm changes    # what your branch changes in the data
```

## Using AI tools

You may use AI tools, but you are the author: read every line, open every link you submit, say in
the PR what the tool did, and answer review comments yourself. PRs opened by an agent on its own
are closed. Agents should read
[AGENTS.md](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/AGENTS.md).

## Step-by-step playbooks

Written for people and agents alike:

- [Add or update a library](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/add-library.md)
- [Add or update a tool](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/add-tool.md)
- [Add a live preview](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/add-preview.md)
- [Add component props](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/add-props.md)
- [Review a change](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/review-change.md)

Previews show each library's **default** styling only, and are never added for libraries whose AI
policy is `restricted` or `unreviewed` (see [Licenses & AI policy](/guide/licenses-and-ai/)).
