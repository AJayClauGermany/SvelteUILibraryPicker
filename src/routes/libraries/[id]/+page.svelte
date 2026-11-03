<script lang="ts">
	import PageMeta from '#lib/components/PageMeta.svelte'
	// Named `+page@.svelte` so SveltePress doesn't auto-wrap it with static
	// frontmatter; we wrap PageLayout ourselves to give it a dynamic title.
	import AiPolicyBadge from '#lib/components/AiPolicyBadge.svelte'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import SvelteSupport from '#lib/components/SvelteSupport.svelte'
	import { componentsByCategory, components } from '#lib/data/index.ts'
	import { hasPreview, previewUrl } from '#lib/previews.ts'

	const { data } = $props()
	const lib = $derived(data.library)
	const title = $derived(lib.name)
	const description = $derived(lib.description)
	const groups = $derived(componentsByCategory(lib.components.map(c => c.id)))
	const byId = $derived(new Map(lib.components.map(c => [c.id, c])))
</script>

<PageMeta {title} {description} />

<h1 class="page-title">{title}</h1>
<p class="lead">{lib.description}</p>

<p class="actions">
	<DocsLink href={lib.docs} primary>Official documentation</DocsLink>
	<a href={lib.repository} target="_blank" rel="noopener noreferrer">Source code</a>
	<a href="/compare/?libs={lib.id}">Compare with others</a>
</p>

<SecondarySourceNotice lastVerified={lib.lastVerified} />

<h2 id="at-a-glance">At a glance</h2>
<div class="ulp-table-wrap">
	<table class="ulp-table">
		<tbody>
			<tr><th scope="row">Svelte support</th><td><SvelteSupport svelte={lib.svelte} />{#if lib.svelte.peerRange}<div class="ulp-muted">peer range <code>svelte {lib.svelte.peerRange}</code></div>{/if}</td></tr>
			<tr><th scope="row">Version checked</th><td><code>{lib.packages[0]}@{lib.version}</code></td></tr>
			<tr><th scope="row">Install</th><td>{#each lib.packages as p (p)}<code>{p}</code> {/each}</td></tr>
			<tr><th scope="row">Styling</th><td>{lib.styling.join(', ')}</td></tr>
			<tr><th scope="row">Features</th><td>{#each lib.features as f (f)}<span class="ulp-chip">{f}</span> {/each}</td></tr>
			<tr><th scope="row">License</th><td><a href={lib.license.url} target="_blank" rel="noopener noreferrer">{lib.license.spdx}</a>{#if lib.license.notes}<div class="ulp-muted">{lib.license.notes}</div>{/if}</td></tr>
			<tr>
				<th scope="row">AI policy</th>
				<td>
					<AiPolicyBadge status={lib.ai.status} />
					<p>{lib.ai.summary}</p>
					{#if lib.ai.upstreamContributing}<p><strong>Contributing upstream:</strong> {lib.ai.upstreamContributing}</p>{/if}
					{#if lib.ai.sources.length}
						<ul>{#each lib.ai.sources as s (s)}<li><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>{/each}</ul>
					{/if}
				</td>
			</tr>
		</tbody>
	</table>
</div>

{#if lib.notes?.length}
	<h2 id="notes">Notes</h2>
	<ul>{#each lib.notes as n (n)}<li>{n}</li>{/each}</ul>
{/if}

<h2 id="components">Components ({lib.components.length})</h2>
<p class="ulp-muted">Names are the library's own; every link goes to its official docs page.</p>
{#each groups as group (group.category)}
	<h3 id="cat-{group.category}">{group.label}</h3>
	<div class="ulp-table-wrap">
		<table class="ulp-table">
			<thead><tr><th>Component</th><th>Type</th><th>Docs</th><th>Preview</th></tr></thead>
			<tbody>
				{#each group.ids as id (id)}
					{@const c = byId.get(id)!}
					<tr>
						<td>{c.name}{#if c.notes}<div class="ulp-muted">{c.notes}</div>{/if}</td>
						<td><a href="/components/{id}/">{components[id].name}</a></td>
						<td><DocsLink href={c.docs}>docs</DocsLink></td>
						<td>{#if hasPreview(lib.id, id)}<a href={previewUrl(lib.id, id)} target="_blank" rel="noopener">live</a>{:else}<span class="ulp-muted">—</span>{/if}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/each}

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
