<script lang="ts">
	import { url } from '#lib/url.ts'
	import PageMeta from '#lib/components/PageMeta.svelte'
	import AiPolicyBadge from '#lib/components/AiPolicyBadge.svelte'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import SvelteSupport from '#lib/components/SvelteSupport.svelte'
	import { components, getLibrary, librariesWith, libraries, toolKindInfo, toolsFor } from '#lib/data/index.ts'

	const { data } = $props()
	const tool = $derived(data.tool)
	const title = $derived(tool.name)
	const description = $derived(tool.description)
	/** Other tools covering any of the same components. */
	const alternatives = $derived(
		[...new Set(tool.components.flatMap(id => toolsFor(id)))].filter(t => t.id !== tool.id),
	)
	/** "On this page" entries; keep in step with the headings below. */
	const anchors = $derived([
		{ title: 'At a glance', slugId: 'at-a-glance', depth: 2 },
		...(tool.notes?.length ? [{ title: 'Notes', slugId: 'notes', depth: 2 }] : []),
		{ title: 'Related components', slugId: 'components', depth: 2 },
		{ title: 'Used by tracked libraries', slugId: 'used-by', depth: 2 },
		...(alternatives.length ? [{ title: 'Other tools for the same components', slugId: 'alternatives', depth: 2 }] : []),
	])
</script>

<PageMeta {title} {description} {anchors} />

<h1 class="page-title">{title}</h1>
<p class="lead">{tool.description}</p>

<p class="actions">
	<DocsLink href={tool.docs} primary>Official documentation</DocsLink>
	<a href={tool.repository} target="_blank" rel="noopener noreferrer">Source code</a>
</p>

<SecondarySourceNotice lastVerified={tool.lastVerified} />

<h2 id="at-a-glance">At a glance</h2>
<div class="ulp-table-wrap">
	<table class="ulp-table">
		<tbody>
			<tr><th scope="row">Type</th><td>{toolKindInfo[tool.kind].label}<div class="ulp-muted">{toolKindInfo[tool.kind].description}</div></td></tr>
			<tr>
				<th scope="row">Svelte support</th>
				<td>
					{#if tool.svelte}
						<SvelteSupport svelte={tool.svelte} />{#if tool.svelte.peerRange}<div class="ulp-muted">peer range <code>svelte {tool.svelte.peerRange}</code></div>{/if}
					{:else}
						Framework-agnostic <span class="ulp-muted">(plain JavaScript, works with any Svelte version)</span>
					{/if}
				</td>
			</tr>
			<tr><th scope="row">Version checked</th><td><code>{tool.packages[0]}@{tool.version}</code></td></tr>
			<tr><th scope="row">Install</th><td>{#each tool.packages as p (p)}<code>{p}</code> {/each}</td></tr>
			<tr><th scope="row">License</th><td><a href={tool.license.url} target="_blank" rel="noopener noreferrer">{tool.license.spdx}</a>{#if tool.license.notes}<div class="ulp-muted">{tool.license.notes}</div>{/if}</td></tr>
			<tr>
				<th scope="row">AI policy</th>
				<td>
					<AiPolicyBadge status={tool.ai.status} />
					<p>{tool.ai.summary}</p>
					{#if tool.ai.upstreamContributing}<p><strong>Contributing upstream:</strong> {tool.ai.upstreamContributing}</p>{/if}
					{#if tool.ai.sources.length}
						<ul>{#each tool.ai.sources as s (s)}<li><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>{/each}</ul>
					{/if}
				</td>
			</tr>
		</tbody>
	</table>
</div>

{#if tool.notes?.length}
	<h2 id="notes">Notes</h2>
	<ul>{#each tool.notes as n (n)}<li>{n}</li>{/each}</ul>
{/if}

<h2 id="components">Related components</h2>
<p class="ulp-muted">What this tool provides or helps build, and how many tracked UI libraries ship their own version.</p>
<div class="ulp-table-wrap">
	<table class="ulp-table">
		<thead><tr><th>Component</th><th>In UI libraries</th></tr></thead>
		<tbody>
			{#each tool.components as id (id)}
				<tr>
					<td><a href={url(`/components/${id}/`)}>{components[id].name}</a><div class="ulp-muted">{components[id].description}</div></td>
					<td>{librariesWith(id).length} / {libraries.length}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<h2 id="used-by">Used by tracked libraries</h2>
{#if tool.usedBy.length}
	<div class="ulp-table-wrap">
		<table class="ulp-table">
			<thead><tr><th>Library</th><th>How</th></tr></thead>
			<tbody>
				{#each tool.usedBy as u (u.library)}
					<tr>
						<td><a href={url(`/libraries/${u.library}/`)}>{getLibrary(u.library)?.name ?? u.library}</a></td>
						<td>{u.how} <a href={u.source} target="_blank" rel="noopener noreferrer">Source</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p class="ulp-muted">None of the libraries we track build on it, as far as we've checked.</p>
{/if}

{#if alternatives.length}
	<h2 id="alternatives">Other tools for the same components</h2>
	<ul>
		{#each alternatives as t (t.id)}
			<li><a href={url(`/tools/${t.id}/`)}>{t.name}</a> <span class="ulp-muted">— {t.components.filter(id => tool.components.includes(id)).map(id => components[id].name).join(', ')}</span></li>
		{/each}
	</ul>
{/if}

<style>
	.lead {
		font-size: 1.1rem;
	}
	.actions {
		display: flex;
		gap: 1.25rem;
		align-items: center;
		flex-wrap: wrap;
	}
	th[scope='row'] {
		width: 10rem;
		white-space: nowrap;
	}
</style>
