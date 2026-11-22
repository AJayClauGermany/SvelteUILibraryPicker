import type { CategoryId, ComponentId } from './components'
import type { ConventionId, PropComponentId } from './props'
import type { ApiStyle, ComponentApi, DependencyKind, FeatureTag, Library, LibraryComponent, ProjectDependency, PropMapping, Tool, ToolKind } from './schema'
import { categories, componentIds, components } from './components'
import { canonicalPropIds, canonicalProps, conventionIds, conventionInfo, getCanonicalProp, hasCanonicalProps, propComponentIds, propKindInfo } from './props'
import { apiStyleInfo, dependencyKindLabels, featureInfo, toolKindInfo, toolingKinds } from './schema'

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

const toolModules = import.meta.glob<{ default: Tool }>('./tools/*.ts', { eager: true })

/** All tools (single-purpose packages and building blocks), sorted by name. */
export const tools: Tool[] = Object.values(toolModules)
	.map(m => m.default)
	.sort((a, b) => a.name.localeCompare(b.name))

export function getTool(id: string): Tool | undefined {
	return tools.find(t => t.id === id)
}

/** Tools that provide or help build a given canonical component. */
export function toolsFor(id: ComponentId): Tool[] {
	return tools.filter(t => t.components.includes(id))
}

/** Tools a given library builds on or documents. */
export function toolsUsedBy(libraryId: string): Tool[] {
	return tools.filter(t => t.usedBy.some(u => u.library === libraryId))
}

/** Canonical components that a library or a tool provides. */
export const coveredOrToolComponentIds: ComponentId[] = componentIds.filter(id =>
	librariesWith(id).length > 0 || toolsFor(id).length > 0,
)

/* ------------------------------------------------------------------------------------------
 * Props and porting
 * ---------------------------------------------------------------------------------------- */

/** A library component's API data, if someone recorded it. */
export function apiFor(library: Library, id: ComponentId): ComponentApi | undefined {
	return findComponent(library, id)?.api
}

/** Libraries that have API data for a component. */
export function librariesWithApi(id: ComponentId): Library[] {
	return libraries.filter(l => apiFor(l, id))
}

/** Libraries that record at least one component API or convention. */
export const librariesWithPortData: Library[] = libraries.filter(l =>
	l.components.some(c => c.api) || Object.keys(l.conventions ?? {}).length > 0,
)

/**
 * How one canonical prop moves from one library to another.
 * - `same`: same name and place (and same values for choices).
 * - `values`: same name, but the allowed values differ.
 * - `renamed`: exists in both, under a different name or on a different part.
 * - `missing`: the source has it, the target has no equivalent.
 * - `gained`: only the target has it.
 * - `unknown`: one side wasn't checked.
 * - `neither`: checked on both sides, neither has it.
 */
export type PortStatus = 'same' | 'values' | 'renamed' | 'missing' | 'gained' | 'unknown' | 'neither'

export const portStatusInfo: Record<PortStatus, { label: string, description: string }> = {
	same: { label: 'Same', description: 'Same name in the same place.' },
	values: { label: 'Different values', description: 'Same name, but the allowed values differ.' },
	renamed: { label: 'Renamed or moved', description: 'Exists in both, under a different name or on a different part.' },
	missing: { label: 'No equivalent', description: 'The target library has no equivalent; drop it or build it yourself.' },
	gained: { label: 'Only in target', description: 'Only the target library has it.' },
	unknown: { label: 'Not checked', description: 'Not recorded for one of the libraries yet.' },
	neither: { label: 'Neither', description: 'Neither library has it.' },
}

export interface PortRow {
	prop: string
	from: PropMapping | null | undefined
	to: PropMapping | null | undefined
	status: PortStatus
}

function sameValues(a?: string[], b?: string[]) {
	if (!a || !b) return true
	return a.length === b.length && [...a].sort().join('|') === [...b].sort().join('|')
}

/** The last segment of a part name, so `Dialog.Root` and `Root` compare equal. */
function partKey(on: string | undefined) {
	return on?.split('.').pop()?.toLowerCase() ?? ''
}

export function portStatus(from: PropMapping | null | undefined, to: PropMapping | null | undefined): PortStatus {
	if (from === undefined || to === undefined) return 'unknown'
	if (from === null && to === null) return 'neither'
	if (from === null) return 'gained'
	if (to === null) return 'missing'
	if (from.name !== to.name || partKey(from.on) !== partKey(to.on)) return 'renamed'
	return sameValues(from.values, to.values) ? 'same' : 'values'
}

/** Prop-by-prop port of one component between two libraries (canonical prop order). */
export function portRows(id: ComponentId, from: ComponentApi | undefined, to: ComponentApi | undefined): PortRow[] {
	return canonicalPropIds(id).map((prop) => {
		const f = from?.props[prop]
		const t = to?.props[prop]
		return { prop, from: f, to: t, status: portStatus(f, t) }
	})
}

export type PortSummary = Record<PortStatus, number>

export function summarizePort(rows: PortRow[]): PortSummary {
	const sum = Object.fromEntries(Object.keys(portStatusInfo).map(k => [k, 0])) as PortSummary
	for (const r of rows) sum[r.status]++
	return sum
}

/** Short text for a mapping, e.g. "`open` on Dialog.Root (bindable)". */
export function describeMapping(m: PropMapping): string {
	return [m.name, m.on ? `on ${m.on}` : '', m.bindable ? '(bindable)' : ''].filter(Boolean).join(' ')
}

export { apiStyleInfo, canonicalPropIds, canonicalProps, categories, componentIds, components, conventionIds, conventionInfo, dependencyKindLabels, featureInfo, getCanonicalProp, hasCanonicalProps, propComponentIds, propKindInfo, toolKindInfo, toolingKinds }
export type { ApiStyle, CategoryId, ComponentApi, ComponentId, ConventionId, DependencyKind, FeatureTag, Library, LibraryComponent, ProjectDependency, PropComponentId, PropMapping, Tool, ToolKind }
