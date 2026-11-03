import type { EntryGenerator, PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { getLibrary, libraries } from '#lib/data/index.ts'

export const entries: EntryGenerator = () => libraries.map(l => ({ id: l.id }))

export const load: PageLoad = ({ params }) => {
	const library = getLibrary(params.id)
	if (!library) error(404, `Unknown library "${params.id}"`)
	return { library }
}
