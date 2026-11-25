/**
 * Answers "what do we have on X?" without opening data files.
 *
 *   pnpm about melt              # a library: facts, file to edit, every component and its preview state
 *   pnpm about svelte-sonner     # a tool: the same, plus which libraries use it
 *   pnpm about dialog            # a component: every library and tool that has it, docs links, previews
 *   pnpm about modal             # aliases work too (Modal -> dialog)
 *   pnpm about                   # list every id
 *   pnpm about <id> --json       # machine-readable
 */
import { allEntries, c, dataFile, loadData, parseArgs, previewSet, previewStates, readPackageJson, table } from './lib/shared.js'

const { flags, positional } = parseArgs()
const data = await loadData()
const previews = previewSet()
const query = positional[0]?.toLowerCase()
const entries = allEntries(data)
const json = x => console.log(JSON.stringify(x, null, '\t'))

if (!query) {
	console.log(c.bold('Libraries'), data.libraries.map(l => l.id).sort().join(', '))
	console.log(c.bold('\nTools'), data.tools.map(t => t.id).sort().join(', '))
	console.log(c.bold('\nComponents'), [...data.componentIds].sort().join(', '))
	process.exit(0)
}

const stateMark = { 'done': c.green('preview'), 'todo': c.yellow('to do'), 'skipped': c.dim('skipped'), 'blocked': c.dim('blocked'), 'non-visual': c.dim('non-visual') }

function showEntry({ kind, entry }) {
	const states = previewStates(data, entry, previews)
	const installed = readPackageJson().devDependencies?.[entry.packages[0]]
	const status = data.maintenanceStatus(entry)
	const comps = (entry.components ?? []).map((comp) => {
		const id = typeof comp === 'string' ? comp : comp.id
		const s = states.find(x => x.id === id)
		return { id, name: typeof comp === 'string' ? data.components[id]?.name : comp.name, docs: typeof comp === 'string' ? undefined : comp.docs, api: typeof comp !== 'string' && !!comp.api, preview: s.state, reason: s.reason }
	})
	if (flags.json) return json({ kind, file: dataFile(kind, entry.id), installed, maintenanceStatus: status, ...entry, componentSummary: comps })

	const m = entry.maintenance
	console.log(`${c.bold(entry.name)} ${c.dim(`(${kind} ${entry.id})`)}`)
	console.log(entry.description)
	console.log(table([
		['file', dataFile(kind, entry.id)],
		['docs', entry.docs],
		['repository', entry.repository],
		['packages', entry.packages.join(', ')],
		['version', `${entry.version}${installed ? c.dim(` (installed for previews: ${installed})`) : ''}`],
		['svelte', entry.svelte ? `${entry.svelte.supported.join(', ')}${entry.svelte.peerRange ? ` (peer ${entry.svelte.peerRange})` : ''}${entry.svelte.runes ? ', runes' : ''}` : 'framework-agnostic'],
		['license', `${entry.license.spdx}  ${c.dim(entry.license.url)}`],
		['ai.status', entry.ai.status],
		['maintenance', `${status ?? '?'}${m?.lastRelease ? `; last release ${m.lastRelease.version} on ${m.lastRelease.date}` : ''}${m?.archived ? '; archived' : ''}; checked ${m?.checked ?? 'never'}`],
		['lastVerified', entry.lastVerified],
		...(kind === 'library' ? [['styling', entry.styling.join(', ')], ['tools used', data.toolsUsedBy(entry.id).map(t => t.id).join(', ') || '-']] : [['kind', entry.kind], ['used by', entry.usedBy.map(u => u.library).join(', ') || '-']]),
	]))
	const counts = {}
	for (const x of comps) counts[x.preview] = (counts[x.preview] ?? 0) + 1
	console.log(`\n${c.bold(`Components (${comps.length})`)}  ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ')}`)
	console.log(table(comps.map(x => [x.id, x.name ?? '', stateMark[x.preview], x.api ? 'props' : '', x.reason ? c.dim(x.reason) : c.dim(x.docs ?? '')])))
	if (entry.notes?.length) console.log(`\n${c.bold('Notes')}\n${entry.notes.map(n => `- ${n}`).join('\n')}`)
}

function showComponent(id) {
	const meta = data.components[id]
	const libs = data.librariesWith(id).map((lib) => {
		const comp = data.findComponent(lib, id)
		const s = previewStates(data, lib, previews).find(x => x.id === id)
		return { kind: 'library', id: lib.id, name: comp.name, docs: comp.docs, api: !!comp.api, preview: s.state, reason: s.reason }
	})
	const tools = data.toolsFor(id).map((tool) => {
		const s = previewStates(data, tool, previews).find(x => x.id === id)
		return { kind: 'tool', id: tool.id, name: tool.name, docs: tool.docs, api: false, preview: s.state, reason: s.reason }
	})
	if (flags.json) return json({ id, ...meta, canonicalProps: data.hasCanonicalProps(id) ? Object.keys(data.canonicalProps[id]) : [], providers: [...libs, ...tools] })

	console.log(`${c.bold(meta.name)} ${c.dim(`(component ${id}, ${meta.category})`)}`)
	console.log(meta.description)
	if (meta.aliases?.length) console.log(c.dim(`Also called: ${meta.aliases.join(', ')}`))
	if (data.hasCanonicalProps(id)) console.log(c.dim(`Canonical props: ${Object.keys(data.canonicalProps[id]).join(', ')}`))
	const rows = [...libs, ...tools]
	const done = rows.filter(r => r.preview === 'done').length
	console.log(`\n${c.bold(`${libs.length} libraries, ${tools.length} tools`)}; ${done} with a preview`)
	console.log(table(rows.map(r => [r.kind, r.id, r.name, stateMark[r.preview], r.api ? 'props' : '', c.dim(r.docs)])))
	console.log(c.dim(`\nSite page: /components/${id}/`))
}

const entry = entries.find(e => e.entry.id === query)
if (entry) {
	showEntry(entry)
}
else if (data.components[query]) {
	showComponent(query)
}
else {
	// Aliases ("Modal" -> dialog), library and tool names, then substring matches.
	const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '')
	const q = norm(query)
	const byAlias = data.componentIds.filter(id => [data.components[id].name, ...(data.components[id].aliases ?? [])].some(a => norm(a) === q))
	const byName = entries.filter(e => norm(e.entry.name) === q || e.entry.packages.some(p => norm(p) === q))
	if (byAlias.length === 1 && !byName.length) showComponent(byAlias[0])
	else if (byName.length === 1 && !byAlias.length) showEntry(byName[0])
	else {
		const like = [
			...byAlias, ...byName.map(e => e.entry.id),
			...data.componentIds.filter(id => norm(id).includes(q)),
			...entries.map(e => e.entry.id).filter(id => norm(id).includes(q)),
		]
		console.error(`Nothing is called "${query}".${like.length ? ` Did you mean: ${[...new Set(like)].join(', ')}?` : ' Run `pnpm about` to list every id.'}`)
		process.exit(1)
	}
}
