<script lang="ts">
	import { url } from '#lib/url.ts'
	import type { Tool } from '#lib/data/schema.ts'
	import { components, getLibrary, toolKindInfo } from '#lib/data/index.ts'
	import AiPolicyBadge from './AiPolicyBadge.svelte'
	import DocsLink from './DocsLink.svelte'

	const { tool }: { tool: Tool } = $props()
</script>

<article class="card">
	<header>
		<h3><a href={url(`/tools/${tool.id}/`)}>{tool.name}</a></h3>
		<span class="ulp-chip" title="License">{tool.license.spdx}</span>
	</header>
	<p class="desc">{tool.description}</p>
	<div class="tags">
		<span class="ulp-chip kind" title={toolKindInfo[tool.kind].description}>{toolKindInfo[tool.kind].label}</span>
		{#each tool.components as id (id)}<a class="ulp-chip" href={url(`/components/${id}/`)}>{components[id].name}</a>{/each}
		{#if !tool.svelte}<span class="ulp-chip" title="Not tied to a UI framework">framework-agnostic</span>{/if}
		<AiPolicyBadge status={tool.ai.status} />
	</div>
	{#if tool.usedBy.length}
		<p class="used ulp-muted">Used by {tool.usedBy.map(u => getLibrary(u.library)?.name ?? u.library).join(', ')}</p>
	{/if}
	<footer>
		<DocsLink href={tool.docs}>Official docs</DocsLink>
		<a href={tool.repository} target="_blank" rel="noopener noreferrer">Source</a>
		<a href={url(`/tools/${tool.id}/`)}>Details →</a>
	</footer>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 1rem 1.1rem;
		border: 1px solid var(--ulp-border);
		border-radius: var(--ulp-radius);
		background: var(--ulp-surface);
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.5rem;
	}
	h3 {
		margin: 0;
		font-size: 1.1rem;
	}
	.desc {
		margin: 0;
		font-size: 0.9rem;
		flex: 1;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}
	.tags a {
		text-decoration: none;
	}
	.kind {
		font-weight: 600;
	}
	.used {
		margin: 0;
		font-size: 0.85rem;
	}
	footer {
		display: flex;
		gap: 1rem;
		font-size: 0.88rem;
		flex-wrap: wrap;
	}
</style>
