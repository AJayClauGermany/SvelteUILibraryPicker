---
title: Contributing
---

Contributions from humans and from AI agents are both welcome. The full guide lives in
[CONTRIBUTING.md](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/CONTRIBUTING.md);
agents should also read [AGENTS.md](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/AGENTS.md).

## Quick start

```sh
pnpm install
pnpm dev        # local site
pnpm validate   # data rules (docs links, licenses, AI policy)
pnpm verify         # validate + type check + build
```

## Adding or updating a library

1. Create `src/lib/data/libraries/<id>.ts` (copy an existing file).
2. Fill in every field from the library's **own** docs, repo and npm metadata.
3. Map each component to a canonical id from `src/lib/data/components.ts`, with a link to its
   official docs page.
4. Check the library's stance on AI (`llms.txt`, CONTRIBUTING, AGENTS.md…) and record it with sources.
5. Set `lastVerified` to today and run `pnpm validate`.

## Adding a tool

Tools are single-purpose packages and building blocks, in `src/lib/data/tools/<id>.ts`. For now
each one must map to a component that a tracked library already provides. See the
[tool playbook](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/add-tool.md).

## Adding a preview

Previews live in `previews/src/<library-id>/<component-id>.svelte`. Each one is a **minimal**
example using the library's **default** styling — written by us, not copied from the docs.

- Only allowed when the library's AI policy is `welcomes` or `no-statement` (enforced).
- Install the library as a `devDependency`; import any CSS it requires *inside the preview file*.
- Never add our own styles — the point is to show the library's defaults.

See [docs/previews.md](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/previews.md) and the [preview playbook](https://github.com/AJayClauGermany/SvelteUILibraryPicker/blob/main/docs/playbooks/add-preview.md) for details.
