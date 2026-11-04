/**
 * Data schema for every library listed on the site.
 *
 * One file per library lives in `src/lib/data/libraries/<id>.ts` and default-exports
 * `defineLibrary({...})`. Run `pnpm validate` after editing — it checks every rule
 * documented here (and CI runs it on every PR).
 *
 * Ground rules (see CONTRIBUTING.md):
 *  - We are a SECONDARY source. Every fact must be traceable to the library's own
 *    docs/repo, and every library + component entry MUST link to its official docs.
 *  - Write descriptions in your own words. Never copy docs prose, code, or assets.
 *  - Respect each library's license and any stated boundaries around AI/agents.
 */
import type { ComponentId } from './components'

/** Major Svelte versions a library can declare support for. */
export type SvelteMajor = 3 | 4 | 5

/** How the library ships its look & feel. */
export type StylingApproach =
	/** Behaviour + a11y only, you bring every style (e.g. builders/primitives). */
	| 'headless'
	/** Ships styles built on Tailwind CSS (requires Tailwind in your app). */
	| 'tailwind'
	/** Ships its own plain CSS / CSS variables, no Tailwind needed. */
	| 'css'
	/** Components are copied into your project (shadcn-style) rather than imported. */
	| 'copy-paste'

/**
 * Conventional feature tags. Only add a tag when the library's own docs or source back it up,
 * using the definitions in `featureInfo` below. Prefer an existing tag before adding one.
 */
export type FeatureTag =
	| 'typescript'
	| 'ssr'
	| 'accessibility'
	| 'semantic-colors'
	| 'theming'
	| 'dark-mode'
	| 'rtl'
	| 'i18n'
	| 'forms'
	| 'charts'
	| 'data-grid'
	| 'icons'
	| 'design-system'
	| 'runes'
	| 'cli'

/** Label and the bar a library must clear for each feature tag (shown on the site). */
export const featureInfo: Record<FeatureTag, { label: string, description: string }> = {
	'typescript': {
		label: 'Fully typed',
		description: 'Written in TypeScript or ships type definitions, so component props, events and snippets are typed.',
	},
	'ssr': { label: 'SSR', description: 'Docs state the components work with server-side rendering (e.g. in SvelteKit).' },
	'accessibility': {
		label: 'Accessibility',
		description: 'Docs describe keyboard support and WAI-ARIA roles/patterns for the components, not just a general claim.',
	},
	'semantic-colors': {
		label: 'Semantic colors',
		description: 'Components take colors by role (primary, secondary, success, warning, error…) that the theme maps to actual colors.',
	},
	'theming': { label: 'Theming', description: 'Documents a way to change the look globally (tokens, CSS variables, theme files).' },
	'dark-mode': { label: 'Dark mode', description: 'Ships or documents a dark theme / dark variant for its components.' },
	'rtl': { label: 'RTL', description: 'Documents right-to-left layout support.' },
	'i18n': { label: 'i18n', description: 'Documents localization of built-in strings, dates or numbers.' },
	'forms': { label: 'Forms', description: 'Covers form controls broadly, or documents form/validation integration.' },
	'charts': { label: 'Charts', description: 'Ships or documents chart components.' },
	'data-grid': { label: 'Data grid', description: 'Ships a data grid / advanced table with sorting, filtering or virtualization.' },
	'icons': { label: 'Icons', description: 'Ships an icon set or icon component.' },
	'design-system': { label: 'Design system', description: 'Implements a named design system (e.g. Material Design, Carbon).' },
	'runes': { label: 'Runes', description: 'Current release is written with Svelte 5 runes.' },
	'cli': { label: 'CLI', description: 'Ships a CLI for setup or for adding components.' },
}

/**
 * What a dependency you add to your own project is for. Used for filtering, so
 * prefer an existing kind. The first five are "build tooling" (see `toolingKinds`).
 */
export type DependencyKind =
	/** Tailwind CSS. Put the major version in `range`. */
	| 'tailwind'
	/** UnoCSS (or a preset of it). */
	| 'unocss'
	/** Sass / SCSS compiler, needed to build or theme the library's styles. */
	| 'sass'
	/** PostCSS or a PostCSS plugin you must add to your build config. */
	| 'postcss'
	/** A separate CSS framework stylesheet you load yourself (e.g. Bootstrap's CSS). */
	| 'css-framework'
	/** A Vite plugin or Svelte preprocessor you must register. */
	| 'build-plugin'
	/** A meta-framework the library requires (e.g. @sveltejs/kit). */
	| 'framework'
	/** Any other package you install next to the library (e.g. @internationalized/date). */
	| 'peer'

/** Kinds that change your build setup; these drive the "Build tooling" filter. */
export const toolingKinds = ['tailwind', 'unocss', 'sass', 'postcss', 'css-framework', 'build-plugin'] as const satisfies readonly DependencyKind[]

export const dependencyKindLabels: Record<DependencyKind, string> = {
	'tailwind': 'Tailwind CSS',
	'unocss': 'UnoCSS',
	'sass': 'Sass',
	'postcss': 'PostCSS',
	'css-framework': 'CSS framework',
	'build-plugin': 'Build plugin',
	'framework': 'Framework',
	'peer': 'Peer package',
}

/**
 * A package you add to YOUR project to use the library, besides `svelte` and the library's
 * own `packages`. Don't list the library's regular `dependencies`, which npm installs for you.
 */
export interface ProjectDependency {
	/** npm package name, e.g. `tailwindcss`, `sass`, `@internationalized/date`. */
	package: string
	kind: DependencyKind
	/** Version range, verbatim from peerDependencies or the install docs. */
	range?: string
	/** `true` if a basic install needs it; `false` if only some components or theming do. */
	required: boolean
	/** Short note in your own words (e.g. "only for the date components"). */
	notes?: string
	/** REQUIRED: where you verified it (install docs page, or package.json on GitHub/npm). */
	source: string
}

/**
 * What a library's maintainers have said about AI tools / agents using their
 * project (docs, code, assets). This gates what agents may contribute here.
 *
 * - `welcomes`     — maintainers explicitly support AI use (e.g. publish llms.txt, MCP server, AI docs).
 * - `no-statement` — we checked the repo + docs and found no stated policy.
 * - `restricted`   — maintainers ask that AI not be used for some/all purposes.
 *                    Agents MUST NOT add previews or generated content for it; humans only.
 * - `unreviewed`   — nobody has checked yet. Treat like `restricted` for generated content.
 */
export type AiPolicyStatus = 'welcomes' | 'no-statement' | 'restricted' | 'unreviewed'

export interface AiPolicy {
	status: AiPolicyStatus
	/** One or two sentences, in your own words, describing what you found. */
	summary: string
	/** Links that back up the status (llms.txt, CONTRIBUTING, AI policy page...). */
	sources: string[]
	/**
	 * Rules for contributing to the library's OWN repository (e.g. "no AI-written PR
	 * descriptions"). Doesn't affect this site's content, but agents that file
	 * issues/PRs upstream on a user's behalf must follow it.
	 */
	upstreamContributing?: string
	/** URL of the library's llms.txt (or equivalent) if it publishes one. */
	llmsTxt?: string
}

export interface LicenseInfo {
	/** SPDX identifier, e.g. `MIT`, `Apache-2.0`, `Apache-2.0 OR GPL-3.0-only`. */
	spdx: string
	/** Link to the LICENSE file in the library's repository. */
	url: string
	/** Anything notable (e.g. "docs site content is licensed separately"). */
	notes?: string
}

export interface LibraryComponent {
	/** Canonical id from `components.ts` — this is what makes cross-library comparison work. */
	id: ComponentId
	/** The library's own name for it (e.g. "AlertDialog", "Modal", "Sheet"). */
	name: string
	/** REQUIRED: deep link to this component's official documentation page. */
	docs: string
	/** Optional short note in your own words (e.g. "builder only", "experimental"). */
	notes?: string
}

export interface Library {
	/** URL-safe slug, must match the file name. */
	id: string
	name: string
	/** One sentence, own words. */
	description: string
	/** Official documentation home. REQUIRED — we always link back. */
	docs: string
	/** Source repository. */
	repository: string
	/** npm package(s) a user installs. The first one is treated as the primary package. */
	packages: string[]
	license: LicenseInfo
	svelte: {
		/** Major Svelte versions supported by the CURRENT release. */
		supported: SvelteMajor[]
		/** The `svelte` peerDependency range of the version recorded below, verbatim. */
		peerRange?: string
		/** Whether the current release is written with / designed for runes. */
		runes?: boolean
	}
	/** Version of the primary package these facts were verified against. */
	version: string
	styling: StylingApproach[]
	/**
	 * Packages you add to your own project (Tailwind, Sass, peer packages...). Use `[]` when
	 * nothing beyond `svelte` and `packages` is needed.
	 */
	dependencies: ProjectDependency[]
	features: FeatureTag[]
	components: LibraryComponent[]
	ai: AiPolicy
	/** ISO date (YYYY-MM-DD) the entry was last checked against the source. */
	lastVerified: string
	/** Optional extra caveats shown on the library page. */
	notes?: string[]
}

/** Identity helper that gives editors autocomplete + type checking. */
export function defineLibrary(library: Library): Library {
	return library
}
