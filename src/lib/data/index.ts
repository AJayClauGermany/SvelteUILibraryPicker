import type { CategoryId, ComponentId } from './components'
import type { DependencyKind, FeatureTag, Library, LibraryComponent, ProjectDependency } from './schema'
import { categories, componentIds, components } from './components'
import { dependencyKindLabels, featureInfo, toolingKinds } from './schema'

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

export type ToolingKind = typeof toolingKinds[number]

/** Build tooling a library needs in a basic install (required dependencies only). */
export function requiredTooling(library: Library): ToolingKind[] {
	const kinds = library.dependencies
		.filter(d => d.required)
		.map(d => d.kind)
		.filter((k): k is ToolingKind => (toolingKinds as readonly DependencyKind[]).includes(k))
	return toolingKinds.filter(k => kinds.includes(k))
}

/** Short display label for a dependency, e.g. "Tailwind CSS 4", "Sass", "bootstrap 5". */
export function dependencyLabel(d: ProjectDependency): string {
	const major = d.range?.match(/\d+/)?.[0]
	const base = d.kind === 'css-framework' || d.kind === 'build-plugin' || d.kind === 'peer' || d.kind === 'framework'
		? d.package
		: dependencyKindLabels[d.kind]
	return major ? `${base} ${major}` : base
}

/** Required build-tooling dependencies of a library, in `toolingKinds` order. */
export function toolingDependencies(library: Library, { optional = false } = {}): ProjectDependency[] {
	return toolingKinds.flatMap(k => library.dependencies.filter(d => d.kind === k && d.required !== optional))
}

/** Build tooling kinds that at least one library uses (required or optional). */
export const usedToolingKinds: ToolingKind[] = toolingKinds.filter(k =>
	libraries.some(l => l.dependencies.some(d => d.kind === k)),
)

/** Feature tags that at least one library declares, in `featureInfo` order. */
export const usedFeatureTags: FeatureTag[] = (Object.keys(featureInfo) as FeatureTag[]).filter(f =>
	libraries.some(l => l.features.includes(f)),
)

/** Canonical components that at least one library provides. */
export const coveredComponentIds: ComponentId[] = componentIds.filter(id => librariesWith(id).length > 0)

export { categories, componentIds, components, dependencyKindLabels, featureInfo, toolingKinds }
export type { CategoryId, ComponentId, DependencyKind, FeatureTag, Library, LibraryComponent, ProjectDependency }
