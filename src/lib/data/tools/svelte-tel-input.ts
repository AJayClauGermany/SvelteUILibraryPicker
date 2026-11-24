import { defineTool } from '../schema'

export default defineTool({
	id: 'svelte-tel-input',
	name: 'svelte-tel-input',
	description:
		'An unstyled Svelte 5 phone number input built on libphonenumber-js: it parses, formats and validates as you type and stores the value in E.164; you build the country picker from its country data.',
	kind: 'headless',
	// Linked from the repo README as the documentation site (docs source: apps/docs-site).
	docs: 'https://svelte-tel-input.vercel.app/',
	repository: 'https://github.com/gyurielf/svelte-tel-input',
	packages: ['svelte-tel-input'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/gyurielf/svelte-tel-input/blob/main/LICENSE.md',
	},
	svelte: {
		supported: [5],
		peerRange: '^5.0.0',
		runes: true,
	},
	version: '4.3.4',
	components: ['phone-input'],
	usedBy: [
		{
			library: 'shadcn-svelte-extras',
			how: 'Its Phone Input component wraps the TelInput component and uses the package’s country list and flag sprites; the phone-input registry item lists svelte-tel-input as a devDependency, so adding the component installs it in your project.',
			source: 'https://github.com/ieedan/shadcn-svelte-extras/blob/main/src/lib/components/ui/phone-input/phone-input.svelte',
		},
	],
	ai: {
		status: 'no-statement',
		summary:
			'The docs site publishes an llms.txt summarising the API for LLMs. No MCP server, AGENTS.md/CLAUDE.md or contributing guide with an AI section was found in the repository; the MIT LICENSE has no AI clause.',
		sources: [
			'https://svelte-tel-input.vercel.app/llms.txt',
			'https://github.com/gyurielf/svelte-tel-input',
			'https://github.com/gyurielf/svelte-tel-input/blob/main/LICENSE.md',
		],
		llmsTxt: 'https://svelte-tel-input.vercel.app/llms.txt',
	},
	lastVerified: '2026-11-24',
	notes: [
		'Ships no visual styles; an optional flags.css sprite sheet is included for building a country selector.',
		'Phone number parsing and validation come from libphonenumber-js, a regular dependency.',
		'Flowbite Svelte has its own Phone Input page but does not depend on this package.',
	],
})
