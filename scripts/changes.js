/**
 * What a change does to the data, in reviewable terms: entries added or removed, fields that
 * changed (with old and new values), components mapped or dropped, previews and preview skips,
 * and taxonomy ids. Compares your working tree (committed or not) with the merge base of a ref.
 * Read-only.
 *
 *   pnpm changes                 # vs origin/main (falls back to main)
 *   pnpm changes <ref>           # vs another branch, tag or commit
 *   pnpm changes --markdown      # for a PR description or the CI job summary
 *   pnpm changes --json          # machine-readable
 *
 * In GitHub Actions it also prints a warning when a change touches more than one entry, since
 * we review one library, tool or preview set per PR (CONTRIBUTING.md).
 */
import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { allEntries, c, componentIdsOf, exit, loadData, mdTable, parseArgs, previewSet, root } from './lib/shared.js'

const { flags, positional } = parseArgs()
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
const tryGit = (...args) => {
	try {
		return git(...args)
	}
	catch {
		return undefined
	}
}

const ref = positional[0] ?? (tryGit('rev-parse', '--verify', '--quiet', 'origin/main') ? 'origin/main' : 'main')
const base = tryGit('merge-base', 'HEAD', ref)
if (!base) {
	console.error(`Can't find a merge base with "${ref}". Fetch it first (git fetch origin main) or pass another ref.`)
	await exit(1)
}

// --- Load both sides ---------------------------------------------------------------------------
// The base side is the data folder of the merge base, extracted to a temp dir and loaded the same
// way as the working tree (data files only use relative imports).
async function loadBase() {
	const dir = mkdtempSync(join(tmpdir(), 'ulp-changes-'))
	try {
		const tar = execFileSync('git', ['archive', base, 'src/lib/data'], { cwd: root, maxBuffer: 1 << 28 })
		execFileSync('tar', ['-x', '-C', dir], { input: tar })
		const { runnerImport } = await import('vite')
		const opts = { root: dir, configFile: false, logLevel: 'silent' }
		const [{ module: data }, skips] = await Promise.all([
			runnerImport('/src/lib/data/index.ts', opts),
			runnerImport('/src/lib/data/preview-skips.ts', opts).catch(() => ({ module: {} })),
		])
		return { ...data, previewSkips: skips.module.previewSkips ?? {} }
	}
	finally {
		rmSync(dir, { recursive: true, force: true })
	}
}

function basePreviews() {
	const out = new Set()
	for (const f of (tryGit('ls-tree', '-r', '--name-only', base, '--', 'previews/src') ?? '').split('\n')) {
		const m = f.match(/^previews\/src\/([^/]+)\/([^/]+)\.svelte$/)
		if (m) out.add(`${m[1]}/${m[2]}`)
	}
	return out
}

const [before, after] = await Promise.all([loadBase(), loadData()])
const previewsBefore = basePreviews()
const previewsAfter = previewSet()

// --- Compare -----------------------------------------------------------------------------------
const key = ({ kind, entry }) => `${kind}:${entry.id}`
const mapOf = data => new Map(allEntries(data).map(e => [key(e), e]))
const oldEntries = mapOf(before)
const newEntries = mapOf(after)

const text = v => (v === undefined ? '(none)' : typeof v === 'string' ? v : JSON.stringify(v))
const show = (v, max = 80) => {
	const s = text(v)
	return s.length > max ? `${s.slice(0, max - 1)}…` : s
}
/** Before/after for one field. Long values start where they differ, so the change is visible. */
function showPair(a, b, max = 80) {
	const [x, y] = [text(a), text(b)]
	if (x.length <= max && y.length <= max) return [x, y]
	let p = 0
	while (p < x.length && x[p] === y[p]) p++
	const from = Math.max(0, p - 20)
	const cut = s => `${from ? '…' : ''}${s.slice(from, from + max)}${s.length > from + max ? '…' : ''}`
	return [cut(x), cut(y)]
}
/** `a/x`, `a/y`, `b/z` → `a (2): x, y` and `b (1): z`, so long lists stay readable. */
function byEntry(keys, fmt) {
	const groups = new Map()
	for (const k of keys) {
		const [id, comp] = k.split('/')
		groups.set(id, [...(groups.get(id) ?? []), comp])
	}
	return [...groups].map(([id, comps]) => `${fmt(id)} (${comps.length}): ${comps.join(', ')}`)
}
const cap = (items, n = 20) => (items.length > n ? [...items.slice(0, n), `and ${items.length - n} more`] : items)
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b)

/** Field-level differences, flattened one level for the objects reviewers care about. */
function fieldChanges(a, b) {
	const out = []
	const nested = new Set(['svelte', 'license', 'ai', 'maintenance'])
	const skip = new Set(['components', 'conventions'])
	for (const field of new Set([...Object.keys(a), ...Object.keys(b)])) {
		if (skip.has(field) || same(a[field], b[field])) continue
		if (nested.has(field) && a[field] && b[field]) {
			for (const sub of new Set([...Object.keys(a[field]), ...Object.keys(b[field])]))
				if (!same(a[field][sub], b[field][sub])) out.push({ field: `${field}.${sub}`, from: a[field][sub], to: b[field][sub] })
		}
		else {
			out.push({ field, from: a[field], to: b[field] })
		}
	}
	if (!same(a.conventions, b.conventions)) out.push({ field: 'conventions', from: '…', to: '…' })
	return out
}

/** Library components are objects; tool components are plain ids. */
function componentChanges(a, b) {
	const byId = e => new Map((e.components ?? []).map(comp => (typeof comp === 'string' ? [comp, { id: comp }] : [comp.id, comp])))
	const was = byId(a)
	const now = byId(b)
	const added = [...now.keys()].filter(id => !was.has(id))
	const removed = [...was.keys()].filter(id => !now.has(id))
	const docs = []
	const api = []
	const other = []
	for (const [id, comp] of now) {
		const old = was.get(id)
		if (!old || same(old, comp)) continue
		if (old.docs !== comp.docs) docs.push({ id, from: old.docs, to: comp.docs })
		if (!same(old.api, comp.api)) api.push(id)
		const { docs: _d1, api: _a1, ...restOld } = old
		const { docs: _d2, api: _a2, ...restNew } = comp
		if (!same(restOld, restNew)) other.push(id)
	}
	return { added, removed, docs, api, other }
}

const added = [...newEntries.keys()].filter(k => !oldEntries.has(k)).map(k => newEntries.get(k))
const removed = [...oldEntries.keys()].filter(k => !newEntries.has(k)).map(k => oldEntries.get(k))
const changed = []
for (const [k, now] of newEntries) {
	const was = oldEntries.get(k)
	if (!was || same(was.entry, now.entry)) continue
	const fields = fieldChanges(was.entry, now.entry)
	const components = componentChanges(was.entry, now.entry)
	changed.push({ kind: now.kind, id: now.entry.id, fields, components })
}

const setDiff = (a, b) => [...b].filter(x => !a.has(x)).sort()
const previews = { added: setDiff(previewsBefore, previewsAfter), removed: setDiff(previewsAfter, previewsBefore) }

const skipKeys = s => new Set(Object.entries(s).flatMap(([id, m]) => Object.keys(m).map(comp => `${id}/${comp}`)))
const skips = { added: setDiff(skipKeys(before.previewSkips), skipKeys(after.previewSkips)), removed: setDiff(skipKeys(after.previewSkips), skipKeys(before.previewSkips)) }

const taxonomy = {
	added: setDiff(new Set(before.componentIds), new Set(after.componentIds)),
	removed: setDiff(new Set(after.componentIds), new Set(before.componentIds)),
}
const propsChanged = (after.propComponentIds ?? []).filter(id => !same(before.canonicalProps?.[id], after.canonicalProps?.[id]))

// Files outside the data and previews, grouped by top-level area.
const files = (tryGit('diff', '--name-only', base) ?? '').split('\n').filter(Boolean)
const untracked = (tryGit('ls-files', '--others', '--exclude-standard') ?? '').split('\n').filter(Boolean)
const otherAreas = {}
for (const f of new Set([...files, ...untracked])) {
	if (f.startsWith('src/lib/data/libraries/') || f.startsWith('src/lib/data/tools/') || /^previews\/src\/[^/]+\/[^/]+\.svelte$/.test(f)) continue
	const area = f.startsWith('src/lib/data/') ? 'src/lib/data (rules, taxonomy)' : f.split('/').slice(0, f.startsWith('src/') || f.startsWith('.github/') ? 2 : 1).join('/')
	otherAreas[area] = (otherAreas[area] ?? 0) + 1
}

// Entries touched by data or previews: the unit we ask PRs to keep to one of.
const touched = new Set([
	...added.map(e => e.entry.id),
	...removed.map(e => e.entry.id),
	...changed.map(e => e.id),
	...previews.added.map(p => p.split('/')[0]),
	...previews.removed.map(p => p.split('/')[0]),
])

const result = {
	ref,
	base,
	touchedEntries: [...touched].sort(),
	added: added.map(({ kind, entry }) => ({ kind, id: entry.id, name: entry.name, version: entry.version, components: componentIdsOf(entry).length, ai: entry.ai.status })),
	removed: removed.map(({ kind, entry }) => ({ kind, id: entry.id, name: entry.name })),
	changed,
	previews,
	previewSkips: skips,
	taxonomy,
	canonicalPropsChanged: propsChanged,
	otherFiles: otherAreas,
}

// --- Output ------------------------------------------------------------------------------------
if (process.env.GITHUB_ACTIONS && touched.size > 1)
	console.error(`::warning title=More than one entry::This change touches ${touched.size} entries (${[...touched].join(', ')}). We review one library, tool or preview set per PR; see CONTRIBUTING.md.`)

if (flags.json) {
	console.log(JSON.stringify(result, null, 2))
	await exit()
}

const md = !!flags.markdown
const out = []
const h = s => out.push(md ? `### ${s}\n` : c.bold(s))
const list = items => items.forEach(i => out.push(md ? `- ${i}` : `  ${i}`))
const code = s => (md ? `\`${s}\`` : c.cyan(s))
const gap = () => out.push('')

out.push(md ? `## Data changes\n\nCompared with ${code(ref)} (merge base ${code(base.slice(0, 7))}). Generated by \`pnpm changes\`.\n` : `${c.bold('Data changes')} ${c.dim(`vs ${ref} (merge base ${base.slice(0, 7)})`)}\n`)

const nothing = !added.length && !removed.length && !changed.length && !previews.added.length && !previews.removed.length
	&& !skips.added.length && !skips.removed.length && !taxonomy.added.length && !taxonomy.removed.length && !propsChanged.length
if (nothing) out.push('No changes to libraries, tools, previews or the taxonomy.\n')

if (touched.size) {
	out.push(`Entries touched (${touched.size}): ${cap([...touched].sort().map(code)).join(', ')}${touched.size > 1 ? '. We prefer one per PR.' : ''}`)
	gap()
}

if (added.length) {
	h('Added')
	if (md) out.push(mdTable(['Kind', 'Id', 'Name', 'Version', 'Components', 'ai.status'], result.added.map(e => [e.kind, e.id, e.name, e.version, e.components, e.ai])))
	else list(result.added.map(e => `${e.kind} ${code(e.id)} ${e.name} ${e.version}, ${e.components} components, ai: ${e.ai}`))
	gap()
}
if (removed.length) {
	h('Removed')
	list(result.removed.map(e => `${e.kind} ${code(e.id)} ${e.name}`))
	gap()
}
for (const e of changed) {
	h(`Changed: ${e.kind} ${e.id}`)
	if (e.fields.length) {
		const rows = e.fields.map(f => [f.field, ...showPair(f.from, f.to)])
		if (md) out.push(mdTable(['Field', 'Before', 'After'], rows), '')
		else list(rows.map(([f, a, b]) => `${f}: ${c.dim(a)} → ${b}`))
	}
	const cc = e.components
	const lines = []
	if (cc.added.length) lines.push(`components added: ${cc.added.map(code).join(', ')}`)
	if (cc.removed.length) lines.push(`components removed: ${cc.removed.map(code).join(', ')}`)
	for (const d of cc.docs) lines.push(`${code(d.id)} docs: ${show(d.from, 200)} → ${show(d.to, 200)}`)
	if (cc.api.length) lines.push(`props (api) changed: ${cc.api.map(code).join(', ')}`)
	if (cc.other.length) lines.push(`other component fields (name, notes...) changed: ${cc.other.map(code).join(', ')}`)
	list(lines)
	gap()
}
if (previews.added.length || previews.removed.length) {
	h('Previews')
	if (previews.added.length) list(byEntry(previews.added, id => `added ${code(id)}`))
	if (previews.removed.length) list(byEntry(previews.removed, id => `removed ${code(id)}`))
	gap()
}
if (skips.added.length || skips.removed.length) {
	h('Preview skips (src/lib/data/preview-skips.ts)')
	if (skips.added.length) list(byEntry(skips.added, id => `added ${code(id)}`))
	if (skips.removed.length) list(byEntry(skips.removed, id => `removed ${code(id)}`))
	gap()
}
if (taxonomy.added.length || taxonomy.removed.length || propsChanged.length) {
	h('Taxonomy and props')
	if (taxonomy.added.length) list([`component ids added: ${taxonomy.added.map(code).join(', ')}`])
	if (taxonomy.removed.length) list([`component ids removed: ${taxonomy.removed.map(code).join(', ')}`])
	if (propsChanged.length) list([`canonical props changed for: ${propsChanged.map(code).join(', ')}`])
	gap()
}
if (Object.keys(otherAreas).length) {
	h('Other files')
	list(Object.entries(otherAreas).sort().map(([area, n]) => `${area}: ${n} file${n === 1 ? '' : 's'}`))
	gap()
}

console.log(out.join('\n').trimEnd())
await exit()
