<script lang="ts">
	import { url } from '#lib/url.ts'
	import PageMeta from '#lib/components/PageMeta.svelte'
	// Named `+page@.svelte` so SveltePress doesn't auto-wrap it with static
	// frontmatter; we wrap PageLayout ourselves to give it a dynamic title.
	import AiPolicyBadge from '#lib/components/AiPolicyBadge.svelte'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import SvelteSupport from '#lib/components/SvelteSupport.svelte'
	import ToolingChips from '#lib/components/ToolingChips.svelte'
	import { componentsByCategory, components, dependencyKindLabels, featureInfo, toolsUsedBy } from '#lib/data/index.ts'
	import { hasPreview, previewPath } from '#lib/previews.ts'

	const { data } = $props()
	const lib = $derived(data.library)
	const title = $derived(lib.name)
	const description = $derived(lib.description)
	const groups = $derived(componentsByCategory(lib.components.map(c => c.id)))
	const byId = $derived(new Map(lib.components.map(c => [c.id, c])))
	const builtOn = $derived(toolsUsedBy(lib.id))
</script>

<PageMeta {title} {description} />

<h1 class="page-title">{title}</h1>
<p class="lead">{lib.description}</p>

<p class="actions">
	<DocsLink href={lib.docs} primary>Official documentation</DocsLink>
	<a href={lib.repository} target="_blank" rel="noopener noreferrer">Source code</a>
	<a href={url(`/compare/?libs=${lib.id}`)}>Compare with others</a>
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
			<tr><th scope="row">Build tooling</th><td><ToolingChips library={lib} showOptional emptyText="None beyond Svelte" /> <a href="#dependencies" class="ulp-muted">details</a></td></tr>
			<tr><th scope="row">Features</th><td>{#each lib.features as f (f)}<span class="ulp-chip" title={featureInfo[f].description}>{featureInfo[f].label}</span> {/each} <a href={url('/guide/features/')} class="ulp-muted">what these mean</a></td></tr>
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

<h2 id="dependencies">Dependencies you install</h2>
{#if lib.dependencies.length}
	<p class="ulp-muted">Packages to add to your own project besides <code>svelte</code> and the packages above. Check each source before you install.</p>
	<div class="ulp-table-wrap">
		<table class="ulp-table">
			<thead><tr><th>Package</th><th>Needed</th><th>Notes</th></tr></thead>
			<tbody>
				{#each lib.dependencies as d (d.package)}
					<tr>
						<td class="nowrap"><code>{d.package}</code>{#if d.range} <code>{d.range}</code>{/if}<div class="ulp-muted">{dependencyKindLabels[d.kind]}</div></td>
						<td>{d.required ? 'Required' : 'Optional'}</td>
						<td>{d.notes ?? ''} <a href={d.source} target="_blank" rel="noopener noreferrer">Source</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p>Nothing beyond <code>svelte</code> and the packages above (npm installs the library's own dependencies for you).</p>
{/if}

{#if builtOn.length}
	<h2 id="tools">Tools it builds on</h2>
	<p class="ulp-muted">Focused packages this library uses or documents. Useful if you want the same behaviour without the whole library. See <a href={url('/tools/')}>all tools</a>.</p>
	<ul>
		{#each builtOn as t (t.id)}
			{@const u = t.usedBy.find(x => x.library === lib.id)!}
			<li><a href={url(`/tools/${t.id}/`)}>{t.name}</a> <span class="ulp-muted">— {u.how}</span></li>
		{/each}
	</ul>
{/if}

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
						<td><a href={url(`/components/${id}/`)}>{components[id].name}</a></td>
						<td><DocsLink href={c.docs}>docs</DocsLink></td>
						<td>{#if hasPreview(lib.id, id)}<a href={url(previewPath(lib.id, id))} target="_blank" rel="noopener">live</a>{:else}<span class="ulp-muted">—</span>{/if}</td>
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
	.nowrap {
		white-space: nowrap;
	}
	th[scope='row'] {
		width: 10rem;
		white-space: nowrap;
	}
</style>
