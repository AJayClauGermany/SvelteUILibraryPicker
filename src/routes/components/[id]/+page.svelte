<script lang="ts">
	import PageMeta from '#lib/components/PageMeta.svelte'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import PreviewFrame from '#lib/components/PreviewFrame.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import { categories, components, findComponent, libraries, librariesWith } from '#lib/data/index.ts'

	const { data } = $props()
	const def = $derived(components[data.id])
	const title = $derived(def.name)
	const description = $derived(`${def.name} across Svelte UI libraries.`)
	const providers = $derived(librariesWith(data.id))
	const missing = $derived(libraries.filter(l => !providers.includes(l)))
</script>

<PageMeta {title} {description} />

<h1 class="page-title">{title}</h1>
<p>
	{def.description} <span class="ulp-chip">{categories[def.category]}</span>
	{#if 'aliases' in def && def.aliases}<span class="ulp-muted">Also called: {def.aliases.join(', ')}</span>{/if}
</p>

<SecondarySourceNotice />

<h2 id="libraries">Provided by {providers.length} of {libraries.length} libraries</h2>
{#if providers.length}
	<div class="ulp-table-wrap">
		<table class="ulp-table">
			<thead><tr><th>Library</th><th>Their name</th><th>Official docs</th><th>Notes</th></tr></thead>
			<tbody>
				{#each providers as lib (lib.id)}
					{@const c = findComponent(lib, data.id)!}
					<tr>
						<td><a href="/libraries/{lib.id}/">{lib.name}</a></td>
						<td>{c.name}</td>
						<td><DocsLink href={c.docs}>{lib.name} docs</DocsLink></td>
						<td class="ulp-muted">{c.notes ?? ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<h2 id="previews">Default styles, side by side</h2>
	<p class="ulp-muted">
		Each preview is a minimal example with the library's <em>default</em> styling, rendered in an
		isolated frame. Headless libraries intentionally look unstyled. For real usage and options,
		follow the docs link.
	</p>
	<div class="previews">
		{#each providers as lib (lib.id)}
			{@const c = findComponent(lib, data.id)!}
			<PreviewFrame library={lib.id} libraryName={lib.name} component={data.id} componentName={c.name} docs={c.docs} />
		{/each}
	</div>
{/if}

{#if missing.length}
	<h2 id="not-provided">Not listed for</h2>
	<p class="ulp-muted">{missing.map(l => l.name).join(', ')}. If one of these does provide it, please <a href="/guide/contributing/">send a correction</a>.</p>
{/if}

<style>
	.previews {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}
</style>
