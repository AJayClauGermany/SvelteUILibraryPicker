<script lang="ts">
	import { url } from '#lib/url.ts'
	import PageMeta from '#lib/components/PageMeta.svelte'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import PreviewFrame from '#lib/components/PreviewFrame.svelte'
	import PropCell from '#lib/components/PropCell.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import { apiStyleInfo, canonicalPropIds, categories, components, findComponent, getCanonicalProp, libraries, librariesWith, librariesWithApi, propKindInfo, toolKindInfo, toolsFor } from '#lib/data/index.ts'

	const { data } = $props()
	const def = $derived(components[data.id])
	const title = $derived(def.name)
	const description = $derived(`${def.name} across Svelte UI libraries.`)
	const providers = $derived(librariesWith(data.id))
	const missing = $derived(libraries.filter(l => !providers.includes(l)))
	const relatedTools = $derived(toolsFor(data.id))
	const propIds = $derived(canonicalPropIds(data.id))
	const withApi = $derived(librariesWithApi(data.id))
	const withoutApi = $derived(providers.filter(l => !withApi.includes(l)))
	/** "On this page" entries; keep in step with the headings below. */
	const anchors = $derived([
		{ title: `Provided by ${providers.length} of ${libraries.length} libraries`, slugId: 'libraries', depth: 2 },
		...(propIds.length && providers.length ? [{ title: 'Props across libraries', slugId: 'props', depth: 2 }] : []),
		...(providers.length ? [{ title: 'Default styles, side by side', slugId: 'previews', depth: 2 }] : []),
		...(relatedTools.length ? [{ title: 'Related tools', slugId: 'tools', depth: 2 }] : []),
		...(missing.length ? [{ title: 'Not listed for', slugId: 'not-provided', depth: 2 }] : []),
	])
</script>

<PageMeta {title} {description} {anchors} />

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
						<td><a href={url(`/libraries/${lib.id}/`)}>{lib.name}</a></td>
						<td>{c.name}</td>
						<td><DocsLink href={c.docs}>{lib.name} docs</DocsLink></td>
						<td class="ulp-muted">{c.notes ?? ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	{#if propIds.length}
		<h2 id="props">Props across libraries</h2>
		<p class="ulp-muted">
			The props most libraries share, under one name each, and how every library spells them.
			Use it to see what to rename when you move code between libraries, or open
			<a href={url(`/port/?component=${data.id}`)}>Port between libraries</a> for a two-library view.
			<strong>—</strong> means no equivalent; <strong>?</strong> means not recorded yet. Always check the
			library's own API reference before you rely on a value.
		</p>
		{#if withApi.length}
			<div class="ulp-table-wrap">
				<table class="ulp-table props">
					<thead>
						<tr>
							<th>Library</th>
							<th>Shape</th>
							{#each propIds as p (p)}
								{@const def = getCanonicalProp(data.id, p)!}
								<th title={`${propKindInfo[def.kind].label}: ${def.description}`}><code>{p}</code><div class="ulp-muted kind">{propKindInfo[def.kind].label}</div></th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each withApi as lib (lib.id)}
							{@const api = findComponent(lib, data.id)!.api!}
							<tr>
								<th scope="row"><a href={url(`/libraries/${lib.id}/`)}>{lib.name}</a><div><a class="ulp-muted small" href={api.source} target="_blank" rel="noopener noreferrer">API source</a></div></th>
								<td>
									<span class="ulp-chip" title={apiStyleInfo[api.style].description}>{apiStyleInfo[api.style].label}</span>
									<div class="small">{#each api.parts as part, i (part)}{#if i}, {/if}<code>{part}</code>{/each}</div>
								</td>
								{#each propIds as p (p)}
									<td><PropCell mapping={api.props[p]} mainPart={api.parts[0]} /></td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
		{#if withoutApi.length}
			<p class="ulp-muted">Props not recorded yet for {withoutApi.map(l => l.name).join(', ')}.</p>
		{/if}
	{/if}

	<h2 id="previews">Default styles, side by side</h2>
	<p class="ulp-muted">
		Each preview is a minimal example with the library's <em>default</em> styling, rendered in an
		isolated frame that follows this site's light or dark mode (use a card's Light/Dark button
		to see the other one). Headless libraries intentionally look unstyled. For real usage and
		options, follow the docs link.
	</p>
	<div class="previews">
		{#each providers as lib (lib.id)}
			{@const c = findComponent(lib, data.id)!}
			<PreviewFrame library={lib.id} libraryName={lib.name} component={data.id} componentName={c.name} docs={c.docs} />
		{/each}
	</div>
{/if}

{#if relatedTools.length}
	<h2 id="tools">Related tools</h2>
	<p class="ulp-muted">Focused packages for this component, for when you need more than a UI library offers or are building your own. See <a href={url('/tools/')}>all tools</a>.</p>
	<div class="ulp-table-wrap">
		<table class="ulp-table">
			<thead><tr><th>Tool</th><th>Type</th><th>Official docs</th></tr></thead>
			<tbody>
				{#each relatedTools as t (t.id)}
					<tr>
						<td><a href={url(`/tools/${t.id}/`)}>{t.name}</a><div class="ulp-muted">{t.description}</div></td>
						<td>{toolKindInfo[t.kind].label}</td>
						<td><DocsLink href={t.docs}>{t.name} docs</DocsLink></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

{#if missing.length}
	<h2 id="not-provided">Not listed for</h2>
	<p class="ulp-muted">{missing.map(l => l.name).join(', ')}. If one of these does provide it, please <a href={url('/guide/contributing/')}>send a correction</a>.</p>
{/if}

<style>
	.props th[scope='row'] {
		white-space: nowrap;
		position: sticky;
		left: 0;
		z-index: 1;
		background: var(--ulp-surface-2);
	}
	.props td {
		min-width: 7rem;
	}
	.kind,
	.small {
		font-size: 0.75rem;
		font-weight: normal;
	}
	.previews {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}
</style>
