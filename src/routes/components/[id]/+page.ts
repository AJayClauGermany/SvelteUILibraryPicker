import type { EntryGenerator, PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import { componentIds, components } from '#lib/data/index.ts'

export const entries: EntryGenerator = () => componentIds.map(id => ({ id }))

export const load: PageLoad = ({ params }) => {
	const id = params.id as keyof typeof components
	if (!(id in components)) error(404, `Unknown component "${params.id}"`)
	return { id }
}
