/**
 * Preview coverage: for every library and tool, which listed components have a live preview,
 * which are left out on purpose (and why), and which are still to do.
 *
 *   pnpm coverage                 # one line per entry with gaps; to-do components listed
 *   pnpm coverage --all           # every entry, including complete ones
 *   pnpm coverage --todo          # only entries that can still get previews (alias: --missing)
 *   pnpm coverage --why <id>      # every gap of one entry, with its reason
 *   pnpm coverage --json          # machine-readable, for agents and CI
 *
 * States (see previewStates() in scripts/lib/shared.js):
 *   done, todo, skipped (reason in src/lib/data/preview-skips.ts), blocked (ai.status forbids
 *   previews), non-visual (nothing to show).
 */
import { allEntries, c, loadData, parseArgs, previewSet, previewStates, table } from './lib/shared.js'

const { flags } = parseArgs(process.argv.slice(2), { values: ['why'] })
const data = await loadData()
const previews = previewSet()

const rows = allEntries(data).map(({ kind, entry }) => {
	const states = previewStates(data, entry, previews)
	const by = s => states.filter(x => x.state === s)
	return {
		kind,
		id: entry.id,
		aiStatus: entry.ai?.status,
		total: states.length,
		done: by('done').length,
		todo: by('todo').map(x => x.id),
		skipped: by('skipped').map(x => ({ id: x.id, reason: x.reason })),
		blocked: by('blocked').length,
		nonVisual: by('non-visual').map(x => x.id),
	}
})

if (flags.why) {
	const row = rows.find(r => r.id === flags.why)
	if (!row) {
		console.error(`No library or tool "${flags.why}".`)
		process.exit(1)
	}
	const entry = allEntries(data).find(e => e.entry.id === flags.why).entry
	const states = previewStates(data, entry, previews)
	if (flags.json) console.log(JSON.stringify(states, null, '\t'))
	else console.log(table(states.map(s => [s.id, s.state === 'done' ? c.green(s.state) : s.state === 'todo' ? c.yellow(s.state) : c.dim(s.state), s.reason ?? '']), { header: ['component', 'state', 'reason'] }))
	process.exit(0)
}

const todoOnly = flags.todo || flags.missing
const shown = rows.filter(r => (todoOnly ? r.todo.length > 0 : flags.all || r.done < r.total - r.nonVisual.length))

if (flags.json) {
	console.log(JSON.stringify(shown, null, '\t'))
	process.exit(0)
}

console.log(table(shown.map((r) => {
	let detail = ''
	if (r.blocked) detail = c.dim(`blocked: ai.status is "${r.aiStatus}"`)
	else if (r.todo.length) detail = `${c.yellow('to do:')} ${r.todo.join(', ')}`
	if (r.skipped.length) detail += `${detail ? '  ' : ''}${c.dim(`(${r.skipped.length} skipped on purpose)`)}`
	return [r.kind, r.id, `${r.done}/${r.total}`, detail]
}), { header: ['kind', 'id', 'previews', 'gaps'] }))

const sum = k => rows.reduce((n, r) => n + (Array.isArray(r[k]) ? r[k].length : r[k]), 0)
console.log(`\n${sum('done')} previews; ${c.yellow(`${sum('todo')} to do`)}, ${sum('skipped')} skipped on purpose, ${sum('blocked')} blocked by ai.status, ${sum('nonVisual')} non-visual.`)
console.log(c.dim('Reasons for one entry: pnpm coverage --why <id>. Skip list: src/lib/data/preview-skips.ts.'))
