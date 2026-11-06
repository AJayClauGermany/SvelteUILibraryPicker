<script module lang="ts">
	export const frontmatter = {
		title: 'Tools',
		description: 'Single-purpose Svelte packages and building blocks (charts, data tables, toasts, positioning, dates) for the components UI libraries provide.',
	}
</script>

<script lang="ts">
	import { url } from '#lib/url.ts'
	import ToolCard from '#lib/components/ToolCard.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import type { ComponentId, ToolKind } from '#lib/data/index.ts'
	import { componentsByCategory, components, toolKindInfo, tools } from '#lib/data/index.ts'

	let query = $state('')
	let kind = $state<'' | ToolKind>('')
	let component = $state<'' | ComponentId>('')

	const kinds = Object.keys(toolKindInfo) as ToolKind[]
	const componentGroups = componentsByCategory([...new Set(tools.flatMap(t => t.components))])

	const filtered = $derived(
		tools.filter((t) => {
			const q = query.trim().toLowerCase()
			if (q && !`${t.name} ${t.description} ${t.packages.join(' ')}`.toLowerCase().includes(q)) return false
			if (kind && t.kind !== kind) return false
			if (component && !t.components.includes(component)) return false
			return true
		}),
	)
	const groups = $derived(kinds.map(k => ({ kind: k, items: filtered.filter(t => t.kind === k) })).filter(g => g.items.length))
</script>

<p>
	Not every component belongs in a UI library. Charts, data grids, toasts or resizable panes often
	live in their own focused packages, and many UI libraries are built on top of them. This page
	lists those packages: reach for one when your library lacks a component, when you need more than
	it offers, or when you're <strong>building your own Svelte components</strong>.
</p>
<p class="ulp-muted">
	For now we only list tools for components that the <a href={url('/libraries/')}>libraries we track</a>
	already provide, so you can compare them with each library's own version on the
	<a href={url('/components/')}>component pages</a>.
</p>

<SecondarySourceNotice />

<dl class="kinds">
	{#each kinds as k (k)}
		<div><dt>{toolKindInfo[k].label}</dt><dd class="ulp-muted">{toolKindInfo[k].description}</dd></div>
	{/each}
</dl>

<div class="ulp-filters">
	<label>Search<input type="search" bind:value={query} placeholder="Name or package…" /></label>
	<label>Type
		<select bind:value={kind}>
			<option value="">Any</option>
			{#each kinds as k (k)}<option value={k}>{toolKindInfo[k].label}</option>{/each}
		</select>
	</label>
	<label>Component
		<select bind:value={component}>
			<option value="">Any</option>
			{#each componentGroups as g (g.category)}
				<optgroup label={g.label}>
					{#each g.ids as id (id)}<option value={id}>{components[id].name}</option>{/each}
				</optgroup>
			{/each}
		</select>
	</label>
</div>

<p class="ulp-muted">{filtered.length} of {tools.length} tools</p>

{#each groups as group (group.kind)}
	<h2 id={group.kind}>{toolKindInfo[group.kind].label}</h2>
	<div class="grid">
		{#each group.items as tool (tool.id)}<ToolCard {tool} />{/each}
	</div>
{:else}
	<p>No tools match these filters.</p>
{/each}

<style>
	.kinds {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 0.75rem;
		margin: 1rem 0;
	}
	.kinds dt {
		font-weight: 600;
	}
	.kinds dd {
		margin: 0.2rem 0 0;
		font-size: 0.88rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}
</style>
