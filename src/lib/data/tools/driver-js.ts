import { defineTool } from '../schema'

export default defineTool({
	id: 'driver-js',
	name: 'Driver.js',
	description:
		'A dependency-free JavaScript library for product tours and element highlights, which dims the page and points a popover at each step.',
	kind: 'component',
	docs: 'https://driverjs.com/docs/installation',
	repository: 'https://github.com/nilbuild/driver.js',
	packages: ['driver.js'],
	license: {
		spdx: 'MIT',
		url: 'https://github.com/nilbuild/driver.js/blob/master/license',
	},
	version: '1.14.0',
	components: ['tour'],
	usedBy: [],
	ai: {
		status: 'welcomes',
		summary:
			'The docs site publishes an llms.txt and an llms-full.txt and serves every guide as Markdown for agents. No AGENTS.md, CLAUDE.md or AI section in the README contributing notes was found.',
		sources: [
			'https://github.com/nilbuild/driver.js/blob/master/apps/docs/src/pages/llms.txt.ts',
			'https://github.com/nilbuild/driver.js/blob/master/readme.md',
		],
		llmsTxt: 'https://driverjs.com/llms.txt',
	},
	maintenance: {
		lastRelease: { version: '1.14.0', date: '2026-11-13' },
		lastCommit: '2026-11-14',
		checked: '2026-11-24',
		sources: ['https://www.npmjs.com/package/driver.js', 'https://github.com/nilbuild/driver.js'],
	},
	lastVerified: '2026-11-22',
	notes: [
		'Framework-agnostic: it works on plain DOM elements and has no Svelte peer dependency, so no Svelte support data is recorded. The docs have a React and Vue guide but none for Svelte; in Svelte you would create the driver in onMount or an effect.',
		'Besides tours and single-element highlights, current releases add hints, onboarding checklists and a headless entry point for rendering your own tour UI, each with its own stylesheet.',
		'Older releases on npm (e.g. 1.3.1) list kamranahmedse/driver.js as their repository; current releases list nilbuild/driver.js under the same package name.',
	],
})
