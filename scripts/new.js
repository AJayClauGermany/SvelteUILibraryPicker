/**
 * Scaffolds a new entry or preview, prefilled with what can be read from primary sources, so
 * you start from a file that type-checks instead of a blank page.
 *
 *   pnpm new library <id> --package <npm-name>   # src/lib/data/libraries/<id>.ts
 *   pnpm new tool <id> --package <npm-name>      # src/lib/data/tools/<id>.ts
 *   pnpm new preview <entry-id> <component-id>   # previews/src/<entry-id>/<component-id>.svelte
 *   add --dry-run to print the file instead of writing it
 *
 * Library and tool files are prefilled from the npm registry (latest version, svelte peer range,
 * license id, repository, homepage, release date). Everything that needs a human or an agent to
 * read the docs is a `TODO` string, which `pnpm validate` rejects until it is filled in, so a
 * scaffold can't be merged half done. Follow docs/playbooks/add-library.md (or add-tool.md).
 *
 * Preview files get the header comment with the component's docs URL from the data file and the
 * imports every sibling preview shares (e.g. `./styles.css`). See docs/playbooks/add-preview.md.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { BLOCKED_AI, c, dataFile, loadData, parseArgs, readPackageJson, root, today } from './lib/shared.js'

const { flags, positional } = parseArgs(process.argv.slice(2), { values: ['package'] })
const [what, id, componentId] = positional
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function usage(msg) {
	if (msg) console.error(c.red(msg))
	console.error('Usage:\n  pnpm new library <id> --package <npm-name>\n  pnpm new tool <id> --package <npm-name>\n  pnpm new preview <entry-id> <component-id>\n  (add --dry-run to print instead of writing)')
	process.exit(1)
}

function write(rel, content) {
	if (flags['dry-run']) {
		console.log(c.dim(`--- ${rel} (dry run)`))
		console.log(content)
		return
	}
	const abs = join(root, rel)
	if (existsSync(abs)) usage(`${rel} already exists.`)
	mkdirSync(dirname(abs), { recursive: true })
	writeFileSync(abs, content)
	console.log(`${c.green('created')} ${rel}`)
}

const q = s => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`

/** Facts from the npm registry for the latest version of `pkg`. */
async function npmFacts(pkg) {
	const res = await fetch(`https://registry.npmjs.org/${pkg.replace('/', '%2F')}`)
	if (!res.ok) usage(`npm has no package "${pkg}" (HTTP ${res.status}).`)
	const doc = await res.json()
	const version = doc['dist-tags']?.latest
	const meta = doc.versions?.[version] ?? {}
	let repository = typeof meta.repository === 'string' ? meta.repository : meta.repository?.url
	repository = repository?.replace(/^git\+/, '').replace(/^git:\/\//, 'https://').replace(/\.git$/, '').replace(/^github:/, 'https://github.com/')
	if (repository && !repository.startsWith('http')) repository = `https://github.com/${repository}`
	return {
		version,
		date: doc.time?.[version]?.slice(0, 10),
		peer: meta.peerDependencies?.svelte,
		license: typeof meta.license === 'string' ? meta.license : meta.license?.type,
		repository,
		homepage: meta.homepage,
		description: meta.description,
		deprecated: meta.deprecated,
	}
}

/** Svelte majors a peer range admits, read from its `^N` / `>=N` parts (check by hand). */
function majorsOf(range) {
	if (!range) return []
	const found = new Set([...range.matchAll(/(?:\^|~|>=?|=|\s|^)(\d+)(?:\.|\s|$)/g)].map(m => Number(m[1])).filter(n => n >= 3 && n <= 5))
	if (/>=\s*[34]/.test(range) && !/</.test(range)) found.add(5)
	return [...found].sort()
}

async function entryFile(kind) {
	if (!id || !SLUG.test(id)) usage('Give a kebab-case id, e.g. `pnpm new library my-kit --package my-kit`.')
	const pkg = flags.package
	if (!pkg) usage('Pass --package <npm-name>: the package people install.')
	const data = await loadData()
	if ([...data.libraries, ...data.tools].some(e => e.id === id)) usage(`"${id}" already exists: pnpm about ${id}`)
	const f = await npmFacts(pkg)
	const repo = f.repository ?? 'TODO: repository URL'
	const majors = majorsOf(f.peer)
	const lines = [
		kind === 'library' ? 'import { defineLibrary } from \'../schema\'' : 'import { defineTool } from \'../schema\'',
		'',
		`// Scaffolded by \`pnpm new ${kind}\` on ${today} from the npm registry (${pkg}@${f.version}).`,
		`// Replace every TODO, check every prefilled value against the docs and the repo, then delete this comment.`,
		`// Playbook: docs/playbooks/add-${kind}.md. \`pnpm validate\` lists what is still missing.`,
		`export default ${kind === 'library' ? 'defineLibrary' : 'defineTool'}({`,
		`\tid: ${q(id)},`,
		`\tname: 'TODO: display name',`,
		`\t// npm description, for reference only (write your own): ${JSON.stringify(f.description ?? '')}`,
		`\tdescription: 'TODO: one sentence in your own words',`,
		...(kind === 'tool' ? [`\tkind: 'component', // or 'headless' / 'utility' (see toolKindInfo in schema.ts)`] : []),
		`\t// npm "homepage": ${f.homepage ?? 'none'}. Confirm it is the official docs before using it.`,
		`\tdocs: 'TODO: official docs URL',`,
		`\trepository: ${q(repo)},`,
		`\tpackages: [${q(pkg)}],`,
		'\tlicense: {',
		`\t\tspdx: ${q(f.license ?? 'TODO: SPDX id from the LICENSE file')}, // from npm; confirm against the LICENSE file`,
		`\t\turl: 'TODO: link to the LICENSE file in the repository',`,
		'\t},',
		'\tsvelte: {',
		`\t\tsupported: [${majors.join(', ')}], // read from the peer range; confirm`,
		...(f.peer ? [`\t\tpeerRange: ${q(f.peer)},`] : ['\t\t// npm declares no svelte peer for this version']),
		'\t\trunes: false, // TODO: true if the current release is written for runes',
		'\t},',
		`\tversion: ${q(f.version)},`,
		...(kind === 'library'
			? [
					`\tstyling: [], // TODO: 'headless' | 'tailwind' | 'css' | 'copy-paste'`,
					'\tdependencies: [], // TODO: Tailwind, Sass, peer packages... each with a source',
					'\tfeatures: [],',
					'\t// TODO: one entry per documented component: { id, name, docs } (ids from components.ts)',
					'\tcomponents: [],',
				]
			: [
					'\tcomponents: [], // TODO: canonical ids from components.ts',
					'\tusedBy: [],',
				]),
		'\tai: {',
		`\t\tstatus: 'unreviewed', // TODO: review llms.txt, CONTRIBUTING, AGENTS.md, LICENSE (AGENTS.md rule 5)`,
		`\t\tsummary: 'TODO: what you found, in your own words',`,
		'\t\tsources: [],',
		'\t},',
		'\tmaintenance: {',
		...(f.version && f.date ? [`\t\tlastRelease: { version: ${q(f.version)}, date: ${q(f.date)} },`] : []),
		'\t\t// TODO: lastCommit and archived: run `pnpm facts ' + id + '`',
		...(f.deprecated ? [`\t\tdeprecated: { summary: 'TODO: own words. npm says: ${JSON.stringify(f.deprecated).slice(1, -1).replace(/'/g, '\\\'')}', source: ${q(`https://www.npmjs.com/package/${pkg}`)} },`] : []),
		`\t\tchecked: ${q(today)},`,
		`\t\tsources: [${q(`https://www.npmjs.com/package/${pkg}`)}${f.repository ? `, ${q(f.repository)}` : ''}],`,
		'\t},',
		`\tlastVerified: ${q(today)},`,
		'})',
		'',
	]
	write(dataFile(kind, id), lines.join('\n'))
	if (!flags['dry-run']) {
		console.log(`\nNext:\n  1. Fill in the TODOs (docs/playbooks/add-${kind}.md).\n  2. pnpm facts ${id}     (lastCommit, archived)\n  3. pnpm validate       (lists what is still missing)\n  4. pnpm about ${id}    (check the result)`)
	}
}

async function previewFile() {
	if (!id || !componentId) usage('Give the library or tool id and the component id.')
	const data = await loadData()
	const entry = data.libraries.find(l => l.id === id) ?? data.tools.find(t => t.id === id)
	if (!entry) usage(`No library or tool "${id}" (pnpm about lists them).`)
	if (BLOCKED_AI.has(entry.ai.status)) usage(`${id} has ai.status "${entry.ai.status}": previews are not allowed (AGENTS.md rule 5).`)
	const comp = entry.components.find(x => (typeof x === 'string' ? x : x.id) === componentId)
	if (!comp) usage(`${id} lists no "${componentId}" component. It lists: ${entry.components.map(x => (typeof x === 'string' ? x : x.id)).join(', ')}`)
	const skip = data.previewSkips[id]?.[componentId] ?? data.previewSkips[id]?.['*']
	if (skip) console.warn(c.yellow(`Note: src/lib/data/preview-skips.ts skips this: "${skip}". Remove that line if you can make it work.`))
	const docs = typeof comp === 'string' ? entry.docs : comp.docs

	// Reuse what every sibling preview shares: the "what default means" header and CSS imports.
	const folder = join(root, 'previews/src', id)
	const siblings = existsSync(folder) ? readdirSync(folder).filter(f => f.endsWith('.svelte')).map(f => readFileSync(join(folder, f), 'utf8')) : []
	const header = siblings[0]?.match(/^<!--\n([\s\S]*?)\n\s*Docs:/)?.[1]
	const shared = siblings.length
		? siblings.map(s => new Set(s.split('\n').filter(l => /^\timport '[^']+'$/.test(l)))).reduce((a, b) => new Set([...a].filter(x => b.has(x))))
		: new Set()

	const content = [
		'<!--',
		header ?? '  TODO: one line on what "default" means for this library (e.g. "headless: unstyled on purpose").',
		`  Docs: ${docs}`,
		'-->',
		'<script lang="ts">',
		...shared,
		`\t// TODO: import the component from '${entry.packages[0]}' (see the docs page above)`,
		'</script>',
		'',
		'<!-- TODO: a minimal example of your own; no styles of ours -->',
		'',
	].join('\n')
	write(`previews/src/${id}/${componentId}.svelte`, content)

	const installed = readPackageJson().devDependencies?.[entry.packages[0]]
	console.log('\nNext:')
	if (!installed && !(entry.styling ?? []).includes('copy-paste')) console.log(`  pnpm add -D ${entry.packages[0]}@${entry.version}`)
	else if (installed && installed !== entry.version) console.log(c.yellow(`  ${entry.packages[0]} is installed as ${installed} but the data records ${entry.version}: align them.`))
	console.log(`  pnpm check:previews ${id}/${componentId}   (add --dark, or --shots <dir> to look at it)`)
	console.log(`  pnpm dev, then /preview/?library=${id}&component=${componentId}`)
}

if (what === 'library' || what === 'tool') await entryFile(what)
else if (what === 'preview') await previewFile()
else usage()
