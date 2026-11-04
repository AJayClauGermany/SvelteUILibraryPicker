<script lang="ts">
	import { url } from '#lib/url.ts'
	import type { Library } from '#lib/data/schema.ts'
	import AiPolicyBadge from './AiPolicyBadge.svelte'
	import DocsLink from './DocsLink.svelte'
	import SvelteSupport from './SvelteSupport.svelte'
	import ToolingChips from './ToolingChips.svelte'

	const { library }: { library: Library } = $props()
</script>

<article class="card">
	<header>
		<h3><a href={url(`/libraries/${library.id}/`)}>{library.name}</a></h3>
		<span class="ulp-chip" title="License">{library.license.spdx}</span>
	</header>
	<p class="desc">{library.description}</p>
	<SvelteSupport svelte={library.svelte} />
	<div class="tags">
		{#each library.styling.filter(s => s !== 'tailwind') as s (s)}<span class="ulp-chip">{s}</span>{/each}
		<ToolingChips {library} />
		<span class="ulp-chip">{library.components.length} components</span>
		<AiPolicyBadge status={library.ai.status} />
	</div>
	<footer>
		<DocsLink href={library.docs}>Official docs</DocsLink>
		<a href={library.repository} target="_blank" rel="noopener noreferrer">Source</a>
		<a href={url(`/libraries/${library.id}/`)}>Details →</a>
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
	footer {
		display: flex;
		gap: 1rem;
		font-size: 0.88rem;
		flex-wrap: wrap;
	}
</style>
