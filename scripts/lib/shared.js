/**
 * Shared helpers for the maintainer scripts in `scripts/`.
 *
 * Every script reads the data the same way the site does: `loadData()` imports
 * `src/lib/data/index.ts` (and the preview skip list) through Vite, so TypeScript files and
 * `import.meta.glob` work without a build. Nothing here writes to data files.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const root = fileURLToPath(new URL('../..', import.meta.url))

/** Libraries, tools, taxonomy and preview skips, loaded from the TypeScript sources. */
export async function loadData() {
	const { runnerImport } = await import('vite')
	const opts = { root, configFile: false, logLevel: 'silent' }
	const [{ module: data }, { module: skips }] = await Promise.all([
		runnerImport('/src/lib/data/index.ts', opts),
		runnerImport('/src/lib/data/preview-skips.ts', opts),
	])
	return { ...data, previewSkips: skips.previewSkips, nonVisualComponents: skips.nonVisualComponents }
}

/** `[{ kind: 'library' | 'tool', entry }]` for every library and tool. */
export function allEntries(data) {
	return [
		...data.libraries.map(entry => ({ kind: 'library', entry })),
		...data.tools.map(entry => ({ kind: 'tool', entry })),
	]
}

export function componentIdsOf(entry) {
	return (entry.components ?? []).map(c => (typeof c === 'string' ? c : c.id))
}

/** Relative path of the data file for an entry. */
export function dataFile(kind, id) {
	return `src/lib/data/${kind === 'library' ? 'libraries' : 'tools'}/${id}.ts`
}

/** Set of `<entry-id>/<component-id>` that have a preview file. */
export function previewSet() {
	const src = join(root, 'previews/src')
	const out = new Set()
	for (const dir of readdirSync(src, { withFileTypes: true })) {
		if (!dir.isDirectory()) continue
		for (const f of readdirSync(join(src, dir.name)))
			if (f.endsWith('.svelte')) out.add(`${dir.name}/${f.slice(0, -'.svelte'.length)}`)
	}
	return out
}

/** CLIs that install copy-paste registries (shadcn-style) rather than being the library itself. */
export const REGISTRY_CLIS = new Set(['shadcn-svelte', 'jsrepo'])

/**
 * Copy-paste registries (shadcn-style) record the registry's own version, while their first
 * package is an install CLI or the primitive library they build on (another entry's package).
 * npm facts about that package say nothing about the registry, so version checks skip these.
 * Libraries that publish their own npm package (Sivir UI, Lily) are not registries here.
 */
export function isRegistryEntry(entry, data) {
	if (!(entry.styling ?? []).includes('copy-paste')) return false
	const pkg = entry.packages[0]
	if (REGISTRY_CLIS.has(pkg)) return pkg !== entry.id
	return [...data.libraries, ...data.tools].some(e => e.id !== entry.id && e.packages[0] === pkg)
}

export const BLOCKED_AI = new Set(['restricted', 'unreviewed'])

/**
 * Preview state of every component an entry lists:
 *  - `done`: has a preview file
 *  - `blocked`: the entry's ai.status forbids previews
 *  - `non-visual`: renders nothing on its own (see nonVisualComponents)
 *  - `skipped`: left out on purpose, with a reason (see src/lib/data/preview-skips.ts)
 *  - `todo`: none of the above, so it can still get a preview
 */
export function previewStates(data, entry, previews = previewSet()) {
	const skips = data.previewSkips[entry.id] ?? {}
	const blocked = BLOCKED_AI.has(entry.ai?.status)
	return componentIdsOf(entry).map((id) => {
		if (previews.has(`${entry.id}/${id}`)) return { id, state: 'done' }
		if (blocked) return { id, state: 'blocked', reason: `ai.status is "${entry.ai.status}"` }
		if (data.nonVisualComponents.includes(id)) return { id, state: 'non-visual' }
		const reason = skips[id] ?? skips['*']
		if (reason) return { id, state: 'skipped', reason }
		return { id, state: 'todo' }
	})
}

/** Today as YYYY-MM-DD (UTC, the same as the data rules use). */
export const today = new Date().toISOString().slice(0, 10)

export function daysBetween(from, to = today) {
	return Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000)
}

export function readPackageJson() {
	return JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
}

export function fileExists(rel) {
	return existsSync(join(root, rel))
}

/** Minimal flag parser: `--name value`, `--flag`, and positional args. */
export function parseArgs(argv = process.argv.slice(2), { values = [] } = {}) {
	const flags = {}
	const positional = []
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i]
		if (!a.startsWith('--')) {
			positional.push(a)
			continue
		}
		const [name, inline] = a.slice(2).split('=', 2)
		if (inline !== undefined) flags[name] = inline
		else if (values.includes(name)) flags[name] = argv[++i]
		else flags[name] = true
	}
	return { flags, positional }
}

const useColor = process.stdout.isTTY && !process.env.NO_COLOR
const paint = code => s => (useColor ? `\x1B[${code}m${s}\x1B[0m` : String(s))
export const c = { bold: paint(1), dim: paint(2), red: paint(31), green: paint(32), yellow: paint(33), cyan: paint(36) }

/** Plain-text table with padded columns. */
export function table(rows, { header } = {}) {
	const all = header ? [header, ...rows] : rows
	if (!all.length) return ''
	// eslint-disable-next-line no-control-regex
	const width = s => String(s).replace(/\x1B\[\d+m/g, '').length
	const widths = all[0].map((_, i) => Math.max(...all.map(r => width(r[i] ?? ''))))
	const line = r => r.map((cell, i) => String(cell ?? '') + ' '.repeat(widths[i] - width(cell ?? ''))).join('  ').trimEnd()
	const out = all.map(line)
	if (header) out.splice(1, 0, widths.map(w => '-'.repeat(w)).join('  '))
	return out.join('\n')
}

/** Markdown table. */
export function mdTable(header, rows) {
	const esc = s => String(s ?? '').replace(/\|/g, '\\|')
	return [`| ${header.map(esc).join(' | ')} |`, `| ${header.map(() => '---').join(' | ')} |`, ...rows.map(r => `| ${r.map(esc).join(' | ')} |`)].join('\n')
}

/** Runs `fn` over `items` with at most `limit` in flight. */
export async function mapLimit(items, limit, fn) {
	const out = Array.from({ length: items.length })
	let next = 0
	await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
		while (next < items.length) {
			const i = next++
			out[i] = await fn(items[i], i)
		}
	}))
	return out
}

/**
 * Exits once everything written to stdout has been flushed. A plain process.exit() right after
 * console.log() cuts piped output off at 64 KiB, so scripts `await exit()` instead.
 */
export async function exit(code = 0) {
	await new Promise(resolve => process.stdout.write('', resolve))
	process.exit(code)
}
