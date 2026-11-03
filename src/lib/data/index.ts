import type { CategoryId, ComponentId } from './components'
import type { Library, LibraryComponent } from './schema'
import { categories, componentIds, components } from './components'

const modules = import.meta.glob<{ default: Library }>('./libraries/*.ts', { eager: true })

/** All libraries, sorted by name. */
export const libraries: Library[] = Object.values(modules)
	.map(m => m.default)
	.sort((a, b) => a.name.localeCompare(b.name))

export function getLibrary(id: string): Library | undefined {
	return libraries.find(l => l.id === id)
}

export function findComponent(library: Library, id: ComponentId): LibraryComponent | undefined {
	return library.components.find(c => c.id === id)
}

/** Libraries that ship a given canonical component. */
export function librariesWith(id: ComponentId): Library[] {
	return libraries.filter(l => findComponent(l, id))
}

/** Canonical components grouped by category, in taxonomy order. */
export function componentsByCategory(ids: readonly ComponentId[] = componentIds) {
	return (Object.keys(categories) as CategoryId[])
		.map(category => ({
			category,
			label: categories[category],
			ids: ids.filter(id => components[id].category === category),
		}))
		.filter(group => group.ids.length > 0)
}

/** Canonical components that at least one library provides. */
export const coveredComponentIds: ComponentId[] = componentIds.filter(id => librariesWith(id).length > 0)

export { categories, componentIds, components }
export type { CategoryId, ComponentId, Library, LibraryComponent }
