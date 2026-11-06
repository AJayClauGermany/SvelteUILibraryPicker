import type { EntryGenerator, PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { getTool, tools } from '#lib/data/index.ts'

export const entries: EntryGenerator = () => tools.map(t => ({ id: t.id }))

export const load: PageLoad = ({ params }) => {
	const tool = getTool(params.id)
	if (!tool) error(404, `Unknown tool "${params.id}"`)
	return { tool }
}
