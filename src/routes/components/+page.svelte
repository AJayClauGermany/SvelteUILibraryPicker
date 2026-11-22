<script module lang="ts">
	export const frontmatter = {
		title: 'Components',
		description: 'Every kind of component, and which Svelte UI libraries provide it.',
	}
</script>

<script lang="ts">
	import { url } from '#lib/url.ts'
	import { componentsByCategory, components, coveredOrToolComponentIds, hasCanonicalProps, librariesWith, libraries, toolsFor } from '#lib/data/index.ts'

	let showAll = $state(false)
	const groups = $derived(componentsByCategory(showAll ? undefined : coveredOrToolComponentIds))
</script>

<p>
	Libraries name things differently — a <em>Dialog</em> here is a <em>Modal</em> there. We map each
	library's components to a shared list so you can compare like with like. Open a component to see
	every library's version side by side, with links to each official docs page. Components marked
	<em>props</em> also line up each library's props, and <a href={url('/port/')}>Port between libraries</a>
	shows what changes when you move code from one library to another.
</p>

<label class="toggle"><input type="checkbox" bind:checked={showAll} /> Include components no tracked library or tool provides yet</label>

{#each groups as group (group.category)}
	<h2 id={group.category}>{group.label}</h2>
	<div class="grid">
		{#each group.ids as id (id)}
			{@const count = librariesWith(id).length}
			{@const toolCount = toolsFor(id).length}
			<a class="item" href={url(`/components/${id}/`)}>
				<strong>{components[id].name}</strong>
				<span class="ulp-muted">{components[id].description}</span>
				<span class="chips">
					<span class="ulp-chip">{count} / {libraries.length} libraries</span>
					{#if toolCount}<span class="ulp-chip">{toolCount} {toolCount === 1 ? 'tool' : 'tools'}</span>{/if}
					{#if hasCanonicalProps(id)}<span class="ulp-chip">props</span>{/if}
				</span>
			</a>
		{/each}
	</div>
{/each}

<style>
	.toggle {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		font-size: 0.9rem;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.75rem;
	}
	.item {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		align-items: flex-start;
		padding: 0.75rem 0.9rem;
		border: 1px solid var(--ulp-border);
		border-radius: var(--ulp-radius);
		background: var(--ulp-surface);
		text-decoration: none;
		font-size: 0.88rem;
	}
	.item:hover {
		border-color: var(--ulp-accent);
	}
</style>
