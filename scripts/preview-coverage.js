/**
 * Preview coverage report: which components each library and tool lists, and which of those
 * have a live preview in `previews/src/<id>/<component>.svelte`.
 *
 *   node scripts/preview-coverage.js            # one line per entry: count and missing ids
 *   node scripts/preview-coverage.js --json     # machine-readable, for agents
 *   node scripts/preview-coverage.js --missing  # only entries that can still get previews
 *
 * Entries whose `ai.status` is `restricted` or `unreviewed` are listed as "blocked" (no previews
 * allowed, see AGENTS.md). Non-visual components (see NON_VISUAL) are not counted as gaps.
 */
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { runnerImport } from 'vite'

const root = fileURLToPath(new URL('..', import.meta.url))
const { module: data } = await runnerImport('/src/lib/data/index.ts', { root, configFile: false, logLevel: 'silent' })

/** Ids that are left out on purpose: they render nothing visible on their own. */
const NON_VISUAL = new Set(['portal', 'locale-provider', 'focus-trap', 'client-only'])
const BLOCKED = new Set(['restricted', 'unreviewed'])

const entries = [
	...data.libraries.map(l => ({ kind: 'library', entry: l })),
	...(data.tools ?? []).map(t => ({ kind: 'tool', entry: t })),
]

const rows = entries.map(({ kind, entry }) => {
	const ids = (entry.components ?? []).map(c => (typeof c === 'string' ? c : c.id))
	const has = ids.filter(id => existsSync(`${root}/previews/src/${entry.id}/${id}.svelte`))
	const missing = ids.filter(id => !has.includes(id) && !NON_VISUAL.has(id))
	return { kind, id: entry.id, status: entry.ai?.status, blocked: BLOCKED.has(entry.ai?.status), total: ids.length, previews: has.length, missing }
})

const args = new Set(process.argv.slice(2))
const shown = args.has('--missing') ? rows.filter(r => !r.blocked && r.missing.length) : rows
if (args.has('--json')) {
	console.log(JSON.stringify(shown, null, '\t'))
}
else {
	for (const r of shown) {
		const tag = r.blocked ? ` [blocked: ai.status=${r.status}]` : ''
		console.log(`${r.kind.padEnd(7)} ${r.id.padEnd(28)} ${String(r.previews).padStart(3)}/${String(r.total).padEnd(3)}${tag}${r.missing.length ? `  missing: ${r.missing.join(', ')}` : ''}`)
	}
}
