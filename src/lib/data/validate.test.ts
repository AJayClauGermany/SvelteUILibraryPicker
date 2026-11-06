/**
 * Data validation — run with `pnpm validate`.
 *
 * These rules encode the project's promises: every entry links back to official docs,
 * licenses are recorded, and library AI boundaries are respected. If a rule blocks a
 * legitimate change, change the rule in the same PR and explain why.
 */
import { readdirSync } from 'node:fs'
import { basename, join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { previews } from '../previews'
import { componentIds, components } from './components'
import { coveredComponentIds, libraries, tools } from './index'
import { featureInfo } from './schema'

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const today = new Date().toISOString().slice(0, 10)

function isHttpsUrl(value: string | undefined) {
	if (!value) return false
	try {
		return new URL(value).protocol === 'https:'
	}
	catch {
		return false
	}
}

describe('component taxonomy', () => {
	it('uses kebab-case ids', () => {
		for (const id of componentIds) expect(id, id).toMatch(SLUG)
	})
})

describe('libraries', () => {
	const files = readdirSync(join(__dirname, 'libraries')).filter(f => f.endsWith('.ts'))

	it('has at least one library', () => {
		expect(libraries.length).toBeGreaterThan(0)
	})

	it('has unique ids that match their file names', () => {
		const ids = libraries.map(l => l.id)
		expect(new Set(ids).size).toBe(ids.length)
		expect(ids.sort()).toEqual(files.map(f => basename(f, '.ts')).sort())
	})

	for (const lib of libraries) {
		describe(lib.id, () => {
			it('has a valid slug and basic fields', () => {
				expect(lib.id).toMatch(SLUG)
				expect(lib.name.trim()).not.toBe('')
				expect(lib.description.trim()).not.toBe('')
				expect(lib.description.length, 'keep descriptions to one short sentence').toBeLessThanOrEqual(200)
				expect(lib.packages.length).toBeGreaterThan(0)
				expect(lib.version.trim()).not.toBe('')
			})

			it('links to official docs, repo and license (https)', () => {
				expect(isHttpsUrl(lib.docs), `docs: ${lib.docs}`).toBe(true)
				expect(isHttpsUrl(lib.repository), `repository: ${lib.repository}`).toBe(true)
				expect(isHttpsUrl(lib.license.url), `license.url: ${lib.license.url}`).toBe(true)
				expect(lib.license.spdx.trim()).not.toBe('')
			})

			it('declares Svelte support', () => {
				expect(lib.svelte.supported.length).toBeGreaterThan(0)
			})

			it('has a valid lastVerified date', () => {
				expect(lib.lastVerified).toMatch(ISO_DATE)
				expect(lib.lastVerified <= today, 'lastVerified is in the future').toBe(true)
			})

			it('backs its AI policy with sources (unless unreviewed)', () => {
				expect(lib.ai.summary.trim()).not.toBe('')
				if (lib.ai.status !== 'unreviewed')
					expect(lib.ai.sources.length, 'add at least one source URL').toBeGreaterThan(0)
				for (const src of lib.ai.sources) expect(isHttpsUrl(src), src).toBe(true)
				if (lib.ai.llmsTxt) expect(isHttpsUrl(lib.ai.llmsTxt)).toBe(true)
			})

			it('lists project dependencies with a source and consistent styling', () => {
				const seen = new Set<string>()
				for (const d of lib.dependencies) {
					expect(d.package.trim(), 'dependency package name').not.toBe('')
					expect(seen.has(d.package), `duplicate dependency "${d.package}"`).toBe(false)
					seen.add(d.package)
					expect(lib.packages, `"${d.package}" is already one of the library's packages`).not.toContain(d.package)
					expect(d.package, 'svelte itself is implied').not.toBe('svelte')
					expect(isHttpsUrl(d.source), `${d.package} source: ${d.source}`).toBe(true)
				}
				// Tailwind-styled libraries must say which Tailwind they need, and vice versa.
				const needsTailwind = lib.dependencies.some(d => d.kind === 'tailwind' && d.required)
				expect(needsTailwind, 'styling "tailwind" needs a required tailwind dependency (and the reverse)')
					.toBe(lib.styling.includes('tailwind'))
			})

			it('uses known feature tags once each', () => {
				for (const f of lib.features) expect(f in featureInfo, `unknown feature "${f}"`).toBe(true)
				expect(new Set(lib.features).size, 'duplicate feature tag').toBe(lib.features.length)
			})

			it('maps components to canonical ids, each with a docs link', () => {
				const seen = new Set<string>()
				for (const c of lib.components) {
					expect(c.id in components, `unknown component id "${c.id}" — add it to components.ts`).toBe(true)
					expect(seen.has(c.id), `duplicate component id "${c.id}"`).toBe(false)
					seen.add(c.id)
					expect(isHttpsUrl(c.docs), `${c.id} docs: ${c.docs}`).toBe(true)
				}
			})
		})
	}
})

describe('tools', () => {
	const files = readdirSync(join(__dirname, 'tools')).filter(f => f.endsWith('.ts'))

	it('has unique ids that match their file names', () => {
		const ids = tools.map(t => t.id)
		expect(new Set(ids).size).toBe(ids.length)
		expect(ids.sort()).toEqual(files.map(f => basename(f, '.ts')).sort())
	})

	for (const tool of tools) {
		describe(tool.id, () => {
			it('has a valid slug and basic fields', () => {
				expect(tool.id).toMatch(SLUG)
				expect(tool.name.trim()).not.toBe('')
				expect(tool.description.trim()).not.toBe('')
				expect(tool.description.length, 'keep descriptions to one short sentence').toBeLessThanOrEqual(200)
				expect(tool.packages.length).toBeGreaterThan(0)
				expect(tool.version.trim()).not.toBe('')
				if (tool.svelte) expect(tool.svelte.supported.length).toBeGreaterThan(0)
			})

			it('links to official docs, repo and license (https)', () => {
				expect(isHttpsUrl(tool.docs), `docs: ${tool.docs}`).toBe(true)
				expect(isHttpsUrl(tool.repository), `repository: ${tool.repository}`).toBe(true)
				expect(isHttpsUrl(tool.license.url), `license.url: ${tool.license.url}`).toBe(true)
				expect(tool.license.spdx.trim()).not.toBe('')
			})

			it('has a valid lastVerified date', () => {
				expect(tool.lastVerified).toMatch(ISO_DATE)
				expect(tool.lastVerified <= today, 'lastVerified is in the future').toBe(true)
			})

			it('backs its AI policy with sources (unless unreviewed)', () => {
				expect(tool.ai.summary.trim()).not.toBe('')
				if (tool.ai.status !== 'unreviewed')
					expect(tool.ai.sources.length, 'add at least one source URL').toBeGreaterThan(0)
				for (const src of tool.ai.sources) expect(isHttpsUrl(src), src).toBe(true)
				if (tool.ai.llmsTxt) expect(isHttpsUrl(tool.ai.llmsTxt)).toBe(true)
			})

			// Grounding: tools only cover components that tracked UI libraries already provide.
			it('maps to components that at least one tracked library provides', () => {
				expect(tool.components.length, 'list at least one canonical component').toBeGreaterThan(0)
				expect(new Set(tool.components).size, 'duplicate component id').toBe(tool.components.length)
				for (const id of tool.components) {
					expect(id in components, `unknown component id "${id}"`).toBe(true)
					expect(coveredComponentIds, `no tracked library provides "${id}"`).toContain(id)
				}
			})

			it('names tracked libraries in usedBy, each with a source', () => {
				const seen = new Set<string>()
				for (const u of tool.usedBy) {
					expect(libraries.some(l => l.id === u.library), `unknown library "${u.library}"`).toBe(true)
					expect(seen.has(u.library), `duplicate usedBy "${u.library}"`).toBe(false)
					seen.add(u.library)
					expect(u.how.trim()).not.toBe('')
					expect(isHttpsUrl(u.source), `${u.library} source: ${u.source}`).toBe(true)
				}
			})
		})
	}
})

describe('previews', () => {
	it('registry is readable', () => {
		expect(Array.isArray(previews)).toBe(true)
	})

	for (const p of previews) {
		it(`${p.library}/${p.component}`, () => {
			const lib = libraries.find(l => l.id === p.library)
			expect(lib, `no library "${p.library}"`).toBeDefined()
			expect(
				lib!.components.some(c => c.id === p.component),
				`"${p.library}" has no "${p.component}" component entry`,
			).toBe(true)
			// Respect library boundaries: no previews for libraries that restrict AI use
			// or whose stance nobody has checked yet. See CONTRIBUTING.md#ai-policy.
			expect(
				['welcomes', 'no-statement'],
				`previews are not allowed while ai.status is "${lib!.ai.status}"`,
			).toContain(lib!.ai.status)
		})
	}
})
