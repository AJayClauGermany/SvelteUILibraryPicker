<script lang="ts">
	/**
	 * Embeds an isolated, prerendered preview page. Falls back to a docs link when
	 * no preview exists yet — the docs are always the real reference.
	 */
	import { hasPreview, previewUrl } from '#lib/previews.ts'
	import DocsLink from './DocsLink.svelte'

	interface Props {
		library: string
		libraryName: string
		component: string
		componentName: string
		docs: string
	}

	const { library, libraryName, component, componentName, docs }: Props = $props()
	const available = $derived(hasPreview(library, component))
</script>

<figure class="frame">
	<figcaption>
		<strong>{libraryName}</strong> · {componentName}
		<DocsLink href={docs}>docs</DocsLink>
	</figcaption>
	{#if available}
		<iframe
			src={previewUrl(library, component)}
			title="{libraryName} {componentName} preview (default styles)"
			loading="lazy"
		></iframe>
	{:else}
		<div class="empty">
			<p>No live preview yet.</p>
			<p><DocsLink href={docs}>See it in the official docs</DocsLink></p>
			<p class="ulp-muted"><a href="/guide/contributing/#adding-a-preview">Add a preview</a></p>
		</div>
	{/if}
</figure>

<style>
	.frame {
		margin: 0;
		display: flex;
		flex-direction: column;
		border: 1px solid var(--ulp-border);
		border-radius: var(--ulp-radius);
		overflow: hidden;
		min-width: 0;
	}
	figcaption {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
		flex-wrap: wrap;
		padding: 0.5rem 0.75rem;
		background: var(--ulp-surface-2);
		font-size: 0.85rem;
	}
	iframe {
		width: 100%;
		height: 260px;
		border: 0;
		background: #fff;
	}
	.empty {
		height: 260px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 0.9rem;
	}
	.empty p {
		margin: 0.2rem 0;
	}
</style>
