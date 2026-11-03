<script module lang="ts">
	export const frontmatter = {
		title: 'Compare',
		description: 'Pick Svelte UI libraries and compare their components and default styles side by side.',
	}
</script>

<script lang="ts">
	import type { ComponentId } from '#lib/data/index.ts'
	import { replaceState } from '$app/navigation'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import PreviewFrame from '#lib/components/PreviewFrame.svelte'
	import { categories, componentsByCategory, components, coveredComponentIds, findComponent, libraries } from '#lib/data/index.ts'
	import { onMount } from 'svelte'

	let selected = $state<string[]>(libraries.slice(0, 3).map(l => l.id))
	let category = $state('')
	let onlyDifferences = $state(false)
	let focus = $state<ComponentId | ''>('')
	let ready = false

	// State lives in the URL (?libs=a,b&component=x) so comparisons can be shared.
	// The page is prerendered, so we only read it in the browser.
	onMount(() => {
		const params = new URLSearchParams(window.location.search)
		const libs = params.get('libs')?.split(',').filter(id => libraries.some(l => l.id === id))
		if (libs?.length) selected = libs
		const c = params.get('component')
		if (c && c in components) focus = c as ComponentId
		category = params.get('category') ?? ''
		ready = true
	})

	$effect(() => {
		const params = new URLSearchParams()
		if (selected.length) params.set('libs', selected.join(','))
		if (focus) params.set('component', focus)
		if (category) params.set('category', category)
		if (ready) replaceState(`?${params}`, {})
	})

	const chosen = $derived(libraries.filter(l => selected.includes(l.id)))
	const rows = $derived(
		componentsByCategory(coveredComponentIds)
			.filter(g => !category || g.category === category)
			.map(g => ({
				...g,
				ids: g.ids.filter((id) => {
					const has = chosen.map(l => !!findComponent(l, id))
					if (!has.some(Boolean)) return false
					return !onlyDifferences || has.some(h => !h)
				}),
			}))
			.filter(g => g.ids.length),
	)

	function toggle(id: string) {
		selected = selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]
	}
</script>

<p>
	Choose libraries, then click a component to see each one's default styling side by side. Every
	cell links to that library's official docs page — read those before you decide.
</p>

<fieldset class="libs">
	<legend>Libraries</legend>
	{#each libraries as lib (lib.id)}
		<label class="ulp-chip pick" class:on={selected.includes(lib.id)}>
			<input type="checkbox" checked={selected.includes(lib.id)} onchange={() => toggle(lib.id)} />
			{lib.name}
		</label>
	{/each}
</fieldset>

<div class="ulp-filters">
	<label>Category
		<select bind:value={category}>
			<option value="">All</option>
			{#each Object.entries(categories) as [id, label] (id)}<option value={id}>{label}</option>{/each}
		</select>
	</label>
	<label class="inline"><input type="checkbox" bind:checked={onlyDifferences} /> Only rows where libraries differ</label>
</div>

{#if focus && chosen.length}
	<section class="focus" aria-labelledby="focus-title">
		<header>
			<h2 id="focus-title">{components[focus].name}</h2>
			<button type="button" onclick={() => (focus = '')}>Close</button>
		</header>
		<div class="previews">
			{#each chosen as lib (lib.id)}
				{@const c = findComponent(lib, focus)}
				{#if c}
					<PreviewFrame library={lib.id} libraryName={lib.name} component={focus} componentName={c.name} docs={c.docs} />
				{:else}
					<div class="absent"><strong>{lib.name}</strong><span class="ulp-muted">Not listed for this library.</span><DocsLink href={lib.docs}>Check the docs</DocsLink></div>
				{/if}
			{/each}
		</div>
	</section>
{/if}

{#if chosen.length === 0}
	<p>Select at least one library.</p>
{:else}
	<div class="ulp-table-wrap">
		<table class="ulp-table">
			<thead>
				<tr>
					<th>Component</th>
					{#each chosen as lib (lib.id)}<th><a href="/libraries/{lib.id}/">{lib.name}</a></th>{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as group (group.category)}
					<tr class="group"><th colspan={chosen.length + 1}>{group.label}</th></tr>
					{#each group.ids as id (id)}
						<tr class:active={focus === id}>
							<th scope="row"><button type="button" class="link" onclick={() => (focus = id)}>{components[id].name}</button></th>
							{#each chosen as lib (lib.id)}
								{@const c = findComponent(lib, id)}
								<td>
									{#if c}<DocsLink href={c.docs}>{c.name}</DocsLink>{:else}<span class="ulp-muted" aria-label="not provided">—</span>{/if}
								</td>
							{/each}
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	.libs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		border: 0;
		padding: 0;
		margin: 1rem 0 0;
	}
	.libs legend {
		font-size: 0.8rem;
		margin-bottom: 0.4rem;
	}
	.pick {
		cursor: pointer;
		font-size: 0.85rem;
	}
	.pick input {
		margin: 0;
	}
	.pick.on {
		border-color: var(--ulp-accent);
	}
	.inline {
		flex-direction: row !important;
		align-items: center;
		gap: 0.4rem !important;
	}
	.group th {
		background: var(--ulp-surface);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	tr.active {
		outline: 2px solid var(--ulp-accent);
		outline-offset: -2px;
	}
	.link {
		background: none;
		border: 0;
		padding: 0;
		font: inherit;
		font-weight: 600;
		color: inherit;
		cursor: pointer;
		text-align: left;
		text-decoration: underline dotted;
	}
	.focus {
		margin: 1rem 0 1.5rem;
	}
	.focus header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.focus h2 {
		margin: 0.5rem 0;
	}
	.focus header button {
		border: 1px solid var(--ulp-border);
		background: var(--ulp-surface);
		color: inherit;
		border-radius: 6px;
		padding: 0.25rem 0.75rem;
		cursor: pointer;
	}
	.previews {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}
	.absent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
		min-height: 300px;
		border: 1px dashed var(--ulp-border);
		border-radius: var(--ulp-radius);
	}
</style>
