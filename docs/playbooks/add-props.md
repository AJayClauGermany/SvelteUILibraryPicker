---
name: add-props
description: Record how a library spells the shared (canonical) props of a component, and its library-wide API conventions, for the props tables and the Port page.
---

# Playbook: add component props and conventions

Works for any agent or human. Output: edits to one `src/lib/data/libraries/<id>.ts`.

The site lines up the props most libraries share under one canonical name (`src/lib/data/props.ts`),
so you can see what to rename when you move code between libraries (component pages, `#props`)
and get a two-library view at `/port/`.

## 1. Know the vocabulary

- `canonicalProps` in `props.ts` lists the components we compare props for and, per component,
  the shared props (`onclick`, `disabled`, `variant`... for a button). Names follow Svelte 5 and
  HTML where possible.
- `conventionInfo` in `props.ts` lists library-wide habits (events, binding, ref, class,
  rest props, render delegation, composition).
- `ComponentApi`, `PropMapping` and `Convention` in `schema.ts` are the shapes you fill in.

## 2. Read the API from primary sources

Use the docs API reference, or the component source/types at the version in the entry's `version`
(`$props()` destructuring, `.d.ts`, `types.ts`, a component API JSON). Docs hosts are often blocked
for agents: `git clone --depth 1 --branch <tag>` the repo, or `npm pack <pkg>@<version>` and read
the published types. **Never guess.**

## 3. Fill `api` on each component that has canonical props

```ts
{ id: 'dialog', name: 'Dialog', docs: `${d}/dialog`, api: {
	style: 'compound', // props | compound | builder | machine | css
	parts: ['Dialog.Root', 'Dialog.Trigger', 'Dialog.Content', 'Dialog.Title'], // verbatim, nesting order
	source: 'https://github.com/<owner>/<repo>/blob/<ref>/<path>',
	props: {
		open: { name: 'open', on: 'Dialog.Root', bindable: true, default: 'false' },
		title: { name: 'Dialog.Title', notes: 'A part, not a prop.' },
		size: null, // checked: no equivalent
	},
} },
```

- Map **every** canonical prop of the component: a mapping, or `null` for "no equivalent".
  Leave a prop out only if you couldn't check it (it shows as "not recorded").
- `name` is the library's spelling, verbatim: `onclick`, `on:click` (Svelte 4 events),
  `slot="title"`, a part name, or a builder option.
- `on` is the part or builder that takes it, when it isn't the first entry in `parts`.
- `values` for choice props: the exact allowed values. `default` only if the docs/types state it.
- Native attributes forwarded through rest props count only if the docs or source show the forwarding.

## 4. Fill `conventions` on the library

One short `value` per convention you can verify, plus a `source`. Omit the rest.

## 5. Verify

```sh
pnpm validate && pnpm check
```

`pnpm validate` rejects unknown canonical props, `api` on components without canonical props,
and missing sources. To add a component or prop to the vocabulary, edit `props.ts` in the same PR
and say why; keep each list to props that several libraries share.
