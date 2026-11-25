/**
 * Project dashboard: one screen that answers "what's here, what's missing, what's stale".
 * Offline and fast (reads the data files only); pair it with `pnpm check:updates` for npm.
 *
 *   pnpm status                    # human summary
 *   pnpm status --markdown         # the same as Markdown (CI job summary, weekly issue)
 *   pnpm status --json             # machine-readable
 *   pnpm status --stale-days 120   # what counts as stale (default 90)
 */
import { allEntries, c, componentIdsOf, daysBetween, isRegistryEntry, loadData, mdTable, parseArgs, previewSet, previewStates, readPackageJson, today } from './lib/shared.js'

const { flags } = parseArgs(process.argv.slice(2), { values: ['stale-days'] })
const staleDays = Number(flags['stale-days'] ?? 90)
const data = await loadData()
const previews = previewSet()
const entries = allEntries(data)

// --- Counts ----------------------------------------------------------------------------------
const byMaintenance = {}
for (const { entry } of entries) {
	const s = data.maintenanceStatus(entry) ?? 'unknown'
	byMaintenance[s] = (byMaintenance[s] ?? 0) + 1
}
const byAi = {}
for (const { entry } of entries) byAi[entry.ai.status] = (byAi[entry.ai.status] ?? 0) + 1

// --- Previews --------------------------------------------------------------------------------
const coverage = entries.map(({ kind, entry }) => {
	const states = previewStates(data, entry, previews)
	return { kind, id: entry.id, states, todo: states.filter(s => s.state === 'todo').map(s => s.id) }
})
const count = state => coverage.reduce((n, r) => n + r.states.filter(s => s.state === state).length, 0)
const previewTotals = { done: count('done'), todo: count('todo'), skipped: count('skipped'), blocked: count('blocked'), nonVisual: count('non-visual') }
const todoEntries = coverage.filter(r => r.todo.length).sort((a, b) => b.todo.length - a.todo.length)

// --- Freshness -------------------------------------------------------------------------------
const age = (date) => (date ? daysBetween(date) : Infinity)
const staleVerified = entries
	.map(({ kind, entry }) => ({ kind, id: entry.id, date: entry.lastVerified, days: age(entry.lastVerified) }))
	.filter(e => e.days > staleDays)
	.sort((a, b) => b.days - a.days)
const staleMaintenance = entries
	.map(({ kind, entry }) => ({ kind, id: entry.id, date: entry.maintenance?.checked, days: age(entry.maintenance?.checked) }))
	.filter(e => e.days > staleDays)
	.sort((a, b) => b.days - a.days)

// --- Preview package pins: previews must run the version the data describes -----------------
const dev = readPackageJson().devDependencies ?? {}
const pinDrift = entries.flatMap(({ kind, entry }) => {
	const pkg = entry.packages[0]
	const spec = dev[pkg]
	const hasPreviews = componentIdsOf(entry).some(id => previews.has(`${entry.id}/${id}`))
	if (!spec || !hasPreviews || spec === entry.version || isRegistryEntry(entry)) return []
	return [{ kind, id: entry.id, package: pkg, installed: spec, recorded: entry.version }]
})

// --- Props coverage --------------------------------------------------------------------------
const propPairs = data.libraries.flatMap(lib => lib.components
	.filter(comp => data.hasCanonicalProps(comp.id))
	.map(comp => ({ lib: lib.id, id: comp.id, has: !!comp.api })))
const propsDone = propPairs.filter(p => p.has).length
const libsWithoutConventions = data.libraries.filter(l => !l.conventions || !Object.keys(l.conventions).length).map(l => l.id)

const report = {
	date: today,
	counts: {
		libraries: data.libraries.length,
		tools: data.tools.length,
		componentIds: data.componentIds.length,
		componentIdsCovered: data.coveredOrToolComponentIds.length,
		byMaintenance,
		byAiStatus: byAi,
	},
	previews: { ...previewTotals, todoEntries: todoEntries.map(r => ({ id: r.id, kind: r.kind, todo: r.todo })) },
	stale: { days: staleDays, lastVerified: staleVerified, maintenanceChecked: staleMaintenance },
	pinDrift,
	props: { mapped: propsDone, total: propPairs.length, librariesWithoutConventions: libsWithoutConventions },
}

if (flags.json) {
	console.log(JSON.stringify(report, null, '\t'))
	process.exit(0)
}

const fmt = obj => Object.entries(obj).map(([k, v]) => `${k} ${v}`).join(', ')
const pct = (a, b) => (b ? `${Math.round((a / b) * 100)}%` : '-')
const eligible = previewTotals.done + previewTotals.todo

if (flags.markdown) {
	const out = [
		`## Project status (${today})`,
		'',
		`- **${report.counts.libraries} libraries, ${report.counts.tools} tools**; ${report.counts.componentIdsCovered} of ${report.counts.componentIds} component ids are covered.`,
		`- Maintenance: ${fmt(byMaintenance)}. AI status: ${fmt(byAi)}.`,
		`- **Previews:** ${previewTotals.done} done, ${previewTotals.todo} to do (${pct(previewTotals.done, eligible)} of what can have one), ${previewTotals.skipped} skipped on purpose, ${previewTotals.blocked} blocked by \`ai.status\`.`,
		`- **Props:** ${propsDone} of ${propPairs.length} library components with canonical props have an \`api\` mapping; ${libsWithoutConventions.length} libraries record no conventions.`,
		'',
	]
	if (todoEntries.length) {
		out.push('### Previews to do', '', mdTable(['Entry', 'Kind', 'To do'], todoEntries.map(r => [r.id, r.kind, `${r.todo.length}: ${r.todo.join(', ')}`])), '')
	}
	if (pinDrift.length) {
		out.push('### Preview package pins that differ from the data', '', mdTable(['Entry', 'Package', 'Installed', 'Recorded'], pinDrift.map(p => [p.id, p.package, p.installed, p.recorded])), '')
	}
	if (staleVerified.length) {
		out.push(`### \`lastVerified\` older than ${staleDays} days (${staleVerified.length})`, '', mdTable(['Entry', 'Kind', 'Last verified', 'Days'], staleVerified.map(e => [e.id, e.kind, e.date ?? '-', e.days])), '')
	}
	if (staleMaintenance.length) {
		out.push(`### \`maintenance.checked\` older than ${staleDays} days (${staleMaintenance.length})`, '', mdTable(['Entry', 'Kind', 'Checked', 'Days'], staleMaintenance.map(e => [e.id, e.kind, e.date ?? '-', e.days])), '')
	}
	console.log(out.join('\n'))
	process.exit(0)
}

const h = s => `\n${c.bold(s)}`
console.log(c.bold(`Svelte UI Library Picker: status on ${today}`))

console.log(h('Data'))
console.log(`  ${report.counts.libraries} libraries, ${report.counts.tools} tools, ${report.counts.componentIdsCovered}/${report.counts.componentIds} component ids covered`)
console.log(`  maintenance: ${fmt(byMaintenance)}`)
console.log(`  ai.status:   ${fmt(byAi)}`)

console.log(h('Previews'))
console.log(`  ${c.green(previewTotals.done)} done, ${c.yellow(previewTotals.todo)} to do (${pct(previewTotals.done, eligible)} of what can have one), ${previewTotals.skipped} skipped on purpose, ${previewTotals.blocked} blocked, ${previewTotals.nonVisual} non-visual`)
for (const r of todoEntries.slice(0, 8)) console.log(`  ${c.yellow(String(r.todo.length).padStart(4))}  ${r.id}`)
if (todoEntries.length > 8) console.log(c.dim(`        … ${todoEntries.length - 8} more: pnpm coverage --todo`))

console.log(h('Version pins'))
if (!pinDrift.length) console.log(`  ${c.green('ok')}: every previewed package is installed at the recorded version`)
for (const p of pinDrift) console.log(`  ${c.red('drift')} ${p.id}: ${p.package} installed ${p.installed}, data says ${p.recorded}`)

console.log(h(`Freshness (older than ${staleDays} days)`))
const oldest = list => list.slice(0, 5).map(e => `${e.id} (${e.date ?? 'never'})`).join(', ')
console.log(`  lastVerified:        ${staleVerified.length ? `${c.yellow(staleVerified.length)} entries; oldest: ${oldest(staleVerified)}` : c.green('all fresh')}`)
console.log(`  maintenance.checked: ${staleMaintenance.length ? `${c.yellow(staleMaintenance.length)} entries; oldest: ${oldest(staleMaintenance)}` : c.green('all fresh')}`)

console.log(h('Props'))
console.log(`  ${propsDone}/${propPairs.length} library components with canonical props have an \`api\` mapping (${pct(propsDone, propPairs.length)})`)
console.log(`  ${libsWithoutConventions.length} libraries record no conventions`)

console.log(h('Next'))
console.log(`  pnpm coverage --todo        previews that can still be added`)
console.log(`  pnpm check:updates          newer npm releases than the data records`)
console.log(`  pnpm show <id>              everything about one library, tool or component`)
console.log(`  docs/maintaining.md         which command answers which question`)
