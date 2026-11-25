/**
 * Update check: compares what each library and tool entry records with npm, so you know which
 * entries need a re-check. Read-only: it never edits data files.
 *
 *   pnpm check:updates                  # entries with something to look at
 *   pnpm check:updates melt bits-ui     # only these ids
 *   pnpm check:updates --all            # every entry, including up-to-date ones
 *   pnpm check:updates --markdown       # Markdown table (weekly issue, PR comments)
 *   pnpm check:updates --json           # machine-readable
 *
 * For the primary package (`packages[0]`) it reports:
 *  - a newer release on the same dist-tag channel as the recorded version (`latest`, or e.g.
 *    `next` for an entry that records a prerelease), with its date and the bump size;
 *  - a recorded `svelte.peerRange` that differs from npm's for the recorded version (a data
 *    error), and a peer range that changed in the newer release (Svelte support may differ);
 *  - a deprecation message on the newest release;
 *  - a recorded version that npm doesn't have at all.
 * Copy-paste registries are skipped (their version is the registry's, not the CLI's; use
 * `pnpm facts <id>`). Source: the npm registry (registry.npmjs.org), the primary source for both.
 */
import { allEntries, c, isRegistryEntry, loadData, mapLimit, mdTable, parseArgs, table, exit } from './lib/shared.js'

const { flags, positional } = parseArgs()
const data = await loadData()
const only = new Set(positional)
const entries = allEntries(data).filter(({ entry }) => !only.size || only.has(entry.id))

function parse(v) {
	const m = /^(\d+)\.(\d+)\.(\d+)(?:-([\w.-]+))?/.exec(v ?? '')
	if (!m) return undefined
	return { nums: [Number(m[1]), Number(m[2]), Number(m[3])], pre: m[4] }
}

/** -1, 0 or 1, following semver precedence closely enough for release comparisons. */
function compare(a, b) {
	const pa = parse(a)
	const pb = parse(b)
	if (!pa || !pb) return 0
	for (let i = 0; i < 3; i++) if (pa.nums[i] !== pb.nums[i]) return pa.nums[i] < pb.nums[i] ? -1 : 1
	if (pa.pre === pb.pre) return 0
	if (!pa.pre) return 1
	if (!pb.pre) return -1
	const xa = pa.pre.split('.')
	const xb = pb.pre.split('.')
	for (let i = 0; i < Math.max(xa.length, xb.length); i++) {
		if (xa[i] === undefined) return -1
		if (xb[i] === undefined) return 1
		const na = /^\d+$/.test(xa[i])
		const nb = /^\d+$/.test(xb[i])
		if (na && nb && Number(xa[i]) !== Number(xb[i])) return Number(xa[i]) < Number(xb[i]) ? -1 : 1
		if (!(na && nb) && xa[i] !== xb[i]) return xa[i] < xb[i] ? -1 : 1
	}
	return 0
}

function bump(from, to) {
	const a = parse(from)
	const b = parse(to)
	if (!a || !b) return '?'
	// Below 1.0, a minor bump is breaking and a patch bump may add features (npm caret rules).
	if (a.nums[0] !== b.nums[0]) return 'major'
	if (a.nums[1] !== b.nums[1]) return a.nums[0] === 0 ? 'major' : 'minor'
	if (a.nums[2] !== b.nums[2]) return a.nums[0] === 0 && a.nums[1] === 0 ? 'major' : 'patch'
	return 'prerelease'
}

/**
 * The dist-tag the recorded version tracks. A stable version always tracks `latest` (old tags
 * such as `stable-0-113` often stay pointed at superseded releases). A prerelease tracks the tag
 * pointing at it, else the tag named after its prerelease id (`next`), else `latest`.
 */
function channelOf(recorded, distTags) {
	const pre = parse(recorded)?.pre
	if (!pre) return 'latest'
	const exact = Object.entries(distTags).find(([tag, v]) => v === recorded && tag !== 'latest')
	if (exact) return exact[0]
	const id = pre.split('.')[0]
	return distTags[id] ? id : 'latest'
}

const cache = new Map()
async function packument(pkg) {
	if (!cache.has(pkg)) {
		cache.set(pkg, fetch(`https://registry.npmjs.org/${pkg.replace('/', '%2F')}`, { headers: { accept: 'application/json' } })
			.then(r => (r.ok ? r.json() : { error: `HTTP ${r.status}` }))
			.catch(e => ({ error: e.cause?.code ?? e.message })))
	}
	return cache.get(pkg)
}

const results = await mapLimit(entries, 8, async ({ kind, entry }) => {
	const pkg = entry.packages[0]
	const base = { kind, id: entry.id, package: pkg, recorded: entry.version, findings: [] }
	if (isRegistryEntry(entry, data)) return { ...base, skipped: 'copy-paste registry: check its repo tags (pnpm facts)' }
	const doc = await packument(pkg)
	if (doc.error) return { ...base, findings: [{ level: 'error', text: `npm lookup failed (${doc.error})` }] }

	const distTags = doc['dist-tags'] ?? {}
	const channel = channelOf(entry.version, distTags)
	const newest = distTags[channel]
	const out = { ...base, channel, newest, newestDate: doc.time?.[newest]?.slice(0, 10) }
	const recordedMeta = doc.versions?.[entry.version]
	const newestMeta = doc.versions?.[newest]

	if (!recordedMeta) out.findings.push({ level: 'error', text: `npm has no version ${entry.version}` })
	if (newest && compare(newest, entry.version) > 0) {
		out.update = bump(entry.version, newest)
		out.findings.push({ level: out.update === 'patch' ? 'info' : 'update', text: `${out.update} update: ${entry.version} -> ${newest} (${channel}, ${out.newestDate ?? '?'})` })
	}
	// A prerelease channel can go stale when the project ships a stable release on `latest` instead.
	const latest = distTags.latest
	if (channel !== 'latest' && latest && compare(latest, entry.version) > 0)
		out.findings.push({ level: 'update', text: `stable release on latest is newer than the recorded prerelease: ${latest} (${doc.time?.[latest]?.slice(0, 10) ?? '?'})` })
	const recordedPeer = entry.svelte?.peerRange
	const npmPeer = recordedMeta?.peerDependencies?.svelte
	if (recordedMeta && recordedPeer && npmPeer && recordedPeer !== npmPeer)
		out.findings.push({ level: 'error', text: `peerRange is '${recordedPeer}', npm says '${npmPeer}' for ${entry.version}` })
	if (recordedMeta && !recordedPeer && npmPeer)
		out.findings.push({ level: 'info', text: `npm declares svelte peer '${npmPeer}' for ${entry.version}; data records none` })
	const newPeer = newestMeta?.peerDependencies?.svelte
	if (out.update && newPeer !== npmPeer)
		out.findings.push({ level: 'update', text: `svelte peer changes in ${newest}: '${npmPeer ?? 'none'}' -> '${newPeer ?? 'none'}'` })
	if (newestMeta?.deprecated && !entry.maintenance?.deprecated)
		out.findings.push({ level: 'update', text: `${newest} is deprecated on npm: "${newestMeta.deprecated}"` })
	return out
})

const shown = flags.all ? results : results.filter(r => r.findings.length)

if (flags.json) {
	console.log(JSON.stringify(shown, null, '\t'))
	await exit(0)
}

const color = { error: c.red, update: c.yellow, info: c.dim }
if (flags.markdown) {
	const rows = shown.flatMap(r => (r.findings.length ? r.findings : [{ level: 'ok', text: r.skipped ?? 'up to date' }]).map(f => [r.id, r.kind, `\`${r.package}\``, r.recorded, f.level, f.text]))
	console.log(`## npm update check\n\n${rows.length ? mdTable(['Entry', 'Kind', 'Package', 'Recorded', 'Level', 'Finding'], rows) : 'Every entry matches npm.'}\n`)
	await exit(0)
}

const rows = shown.flatMap(r => (r.findings.length ? r.findings : [{ level: 'ok', text: r.skipped ?? 'up to date' }])
	.map((f, i) => [i ? '' : r.id, i ? '' : r.recorded, (color[f.level] ?? c.green)(f.level), f.text]))
if (rows.length) console.log(table(rows, { header: ['id', 'recorded', 'level', 'finding'] }))
const n = level => results.filter(r => r.findings.some(f => f.level === level)).length
console.log(`\n${results.length} entries checked: ${c.red(`${n('error')} with data errors`)}, ${c.yellow(`${n('update')} with updates to review`)}, ${n('info')} with minor notes.`)
console.log(c.dim('After re-checking an entry: update version, svelte.peerRange, lastVerified (and the devDependency if it has previews), then pnpm validate.'))
