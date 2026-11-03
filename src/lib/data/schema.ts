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

/** Free-form but conventional feature tags. Prefer an existing tag before adding one. */
export type FeatureTag =
	| 'typescript'
	| 'ssr'
	| 'accessibility'
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
