import { defineTool } from '../schema'

export default defineTool({
	id: 'tiptap',
	name: 'Tiptap',
	description:
		'A headless rich text editor toolkit built on ProseMirror: a framework-agnostic core plus extensions for formatting, lists, tables, links, images and more.',
	kind: 'headless',
	docs: 'https://tiptap.dev/docs/editor/getting-started/install/svelte',
	repository: 'https://github.com/ueberdosis/tiptap',
	packages: ['@tiptap/core', '@tiptap/pm', '@tiptap/starter-kit'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/ueberdosis/tiptap/blob/main/LICENSE.md',
		notes: 'Covers the open-source packages in the repo. Tiptap Pro extensions come from a private npm registry, need a Tiptap account and in some cases a paid subscription.',
	},
	version: '3.35.0',
	components: ['rich-text-editor'],
	usedBy: [
		{
			library: 'cossui-svelte',
			how: 'Its Rich Editor is built on Tiptap.',
			source: 'https://github.com/cossui-svelte/cossui-svelte/blob/v1.2.0/static/r/rich-editor.json',
		},
		{
			library: 'flowbite-svelte',
			how: 'Its docs present a WYSIWYG editor from the separate @flowbite-svelte-plugins/texteditor package, which is built on @tiptap/core and Tiptap extensions.',
			source: 'https://github.com/themesberg/flowbite-svelte/blob/main/src/routes/docs/plugins/wysiwyg.md',
		},
	],
	ai: {
		status: 'welcomes',
		summary:
			'The repo has AGENTS.md and CLAUDE.md, says fully automated fixes and features are welcome once agents complete set checks, and ships agent skills for consumers and contributors. The docs publish an llms.txt listing Markdown versions of every page.',
		sources: [
			'https://github.com/ueberdosis/tiptap/blob/main/AGENTS.md',
			'https://github.com/ueberdosis/tiptap/blob/main/CONTRIBUTING.md',
			'https://github.com/ueberdosis/tiptap/tree/main/.agents/skills',
			'https://github.com/ueberdosis/tiptap-docs/blob/main/src/app/llms.txt/route.ts',
		],
		upstreamContributing:
			'Disclose any AI-tool use in the pull request description, and tick the PR template box confirming you reviewed and take responsibility for the changes. PRs must link to an issue assigned to you.',
		llmsTxt: 'https://tiptap.dev/docs/llms.txt',
	},
	lastVerified: '2026-11-22',
	notes: [
		'Framework-agnostic: @tiptap/core has no Svelte peer dependency, so no Svelte support data is recorded. Tiptap ships React and Vue bindings but no official Svelte package; its Svelte install guide creates the Editor in onMount and binds it to an element with runes state.',
		'Headless: it renders an editable area only, so toolbars, menus and content styles are yours to build.',
		'svelte-tiptap is a community package with Svelte 5 wrapper components (editor content, bubble and floating menus) around Tiptap 3.',
	],
})
