<script lang="ts">
	import type { Library } from '#lib/data/schema.ts'
	import { dependencyKindLabels, dependencyLabel, toolingDependencies } from '#lib/data/index.ts'

	const { library, showOptional = false, emptyText = '' }: { library: Library, showOptional?: boolean, emptyText?: string } = $props()
	const required = $derived(toolingDependencies(library))
	const optional = $derived(showOptional ? toolingDependencies(library, { optional: true }) : [])
</script>

{#each required as d (d.package)}
	<span class="ulp-chip tool" title="Needs {dependencyKindLabels[d.kind]}: {d.package}{d.range ? ` ${d.range}` : ''}">{dependencyLabel(d)}</span>
{/each}
{#each optional as d (d.package)}
	<span class="ulp-chip optional" title="Optional {dependencyKindLabels[d.kind]}: {d.package}{d.notes ? ` (${d.notes})` : ''}">{dependencyLabel(d)} (optional)</span>
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
