/**
 * Every URL a library or tool entry records, with where it was found (for check-links.js).
 */
export function urlsOf(kind, entry) {
	const out = []
	const add = (url, where) => {
		if (typeof url === 'string' && /^https?:\/\//.test(url)) out.push({ url, where })
	}
	add(entry.docs, 'docs')
	add(entry.repository, 'repository')
	add(entry.license?.url, 'license.url')
	add(entry.ai?.llmsTxt, 'ai.llmsTxt')
	for (const s of entry.ai?.sources ?? []) add(s, 'ai.sources')
	for (const s of entry.maintenance?.sources ?? []) add(s, 'maintenance.sources')
	add(entry.maintenance?.deprecated?.source, 'maintenance.deprecated')
	for (const d of entry.dependencies ?? []) add(d.source, `dependencies.${d.package}`)
	for (const u of entry.usedBy ?? []) add(u.source, `usedBy.${u.library}`)
	for (const [id, conv] of Object.entries(entry.conventions ?? {})) add(conv?.source, `conventions.${id}`)
	for (const comp of entry.components ?? []) {
		if (typeof comp === 'string') continue
		add(comp.docs, `components.${comp.id}`)
		add(comp.api?.source, `components.${comp.id}.api`)
	}
	return out
}
