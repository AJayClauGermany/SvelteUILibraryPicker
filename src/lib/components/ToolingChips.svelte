<script lang="ts">
	import type { Library, ProjectDependency } from '#lib/data/schema.ts'
	import { dependencyKindLabels, dependencyLabel, toolingDependencies } from '#lib/data/index.ts'

	const { library, showOptional = false, emptyText = '' }: { library: Library, showOptional?: boolean, emptyText?: string } = $props()
	/** One chip per label: a library needing five UnoCSS packages shows "UnoCSS" once, listing them in the title. */
	function group(deps: ProjectDependency[]) {
		const byLabel = new Map<string, ProjectDependency[]>()
		for (const d of deps) byLabel.set(dependencyLabel(d), [...(byLabel.get(dependencyLabel(d)) ?? []), d])
		return [...byLabel].map(([label, items]) => ({
			label,
			kind: dependencyKindLabels[items[0].kind],
			packages: items.map(d => `${d.package}${d.range ? ` ${d.range}` : ''}${d.notes && !d.required ? ` (${d.notes})` : ''}`).join(', '),
		}))
	}
	const required = $derived(group(toolingDependencies(library)))
	const optional = $derived(showOptional ? group(toolingDependencies(library, { optional: true })) : [])
</script>

{#each required as g (g.label)}
	<span class="ulp-chip tool" title="Needs {g.kind}: {g.packages}">{g.label}</span>
{/each}
{#each optional as g (g.label)}
	<span class="ulp-chip optional" title="Optional {g.kind}: {g.packages}">{g.label} (optional)</span>
{/each}
{#if emptyText && !required.length && !optional.length}<span class="ulp-muted">{emptyText}</span>{/if}

<style>
	.tool {
		border-style: solid;
	}
	.optional {
		border-style: dashed;
		opacity: 0.75;
	}
</style>
