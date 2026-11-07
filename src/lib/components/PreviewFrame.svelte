<script lang="ts">
	import { url } from '#lib/url.ts'
	/**
	 * A preview card. The front embeds the isolated, prerendered preview page; "Code" flips
	 * it over to show the preview's source. Falls back to a docs link when no preview exists
	 * yet — the docs are always the real reference.
	 */
	import { hasPreview, loadPreviewSource, previewPath } from '#lib/previews.ts'
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

	let showCode = $state(false)
	let source = $state<string | null>(null)

	function flip() {
		showCode = !showCode
		if (showCode && source === null)
			loadPreviewSource(library, component).then(s => (source = s), () => (source = ''))
	}
</script>

{#snippet header(side: 'preview' | 'code')}
	<header>
		<strong>{libraryName}</strong> · {componentName}
		<DocsLink href={docs}>docs</DocsLink>
		{#if available}
			<button type="button" class="flip" onclick={flip}>
				{side === 'preview' ? 'Code' : 'Preview'}
			</button>
		{/if}
	</header>
{/snippet}

<div class="frame" class:flipped={showCode}>
	<div class="card">
		<div class="face front" inert={showCode}>
			{@render header('preview')}
			{#if available}
				<iframe
					src={url(previewPath(library, component))}
					title="{libraryName} {componentName} preview (default styles)"
					loading="lazy"
				></iframe>
			{:else}
				<div class="empty">
					<p>No live preview yet.</p>
					<p><DocsLink href={docs}>See it in the official docs</DocsLink></p>
					<p class="ulp-muted"><a href={url('/guide/contributing/#Adding-a-preview')}>Add a preview</a></p>
				</div>
			{/if}
		</div>
		{#if available}
			<div class="face back" inert={!showCode}>
				{@render header('code')}
				<pre class="code" aria-label="{libraryName} {componentName} preview source"><code>{source ?? 'Loading…'}</code></pre>
			</div>
		{/if}
	</div>
</div>

<style>
	.frame {
		min-width: 0;
		perspective: 1200px;
	}
	.card {
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.5s;
	}
	.flipped .card {
		transform: rotateY(180deg);
	}
	.face {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--ulp-border);
		border-radius: var(--ulp-radius);
		overflow: hidden;
		backface-visibility: hidden;
		/* Swap which side is interactive halfway through the turn. */
		transition: visibility 0s linear 0.25s;
	}
	.back {
		position: absolute;
		inset: 0;
		transform: rotateY(180deg);
	}
	.flipped .front,
	.frame:not(.flipped) .back {
		visibility: hidden;
	}
	@media (prefers-reduced-motion: reduce) {
		.card,
		.face {
			transition: none;
		}
	}
	header {
		display: flex;
		gap: 0.5rem;
		align-items: baseline;
		flex-wrap: wrap;
		padding: 0.5rem 0.75rem;
		background: var(--ulp-surface-2);
		font-size: 0.85rem;
	}
	.flip {
		margin-left: auto;
		border: 1px solid var(--ulp-border);
		background: var(--ulp-surface);
		color: inherit;
		border-radius: 6px;
		padding: 0.1rem 0.6rem;
		font: inherit;
		font-size: 0.8rem;
		cursor: pointer;
	}
	iframe {
		width: 100%;
		height: 260px;
		border: 0;
		background: #fff;
	}
	.code {
		flex: 1;
		min-height: 0;
		margin: 0;
		padding: 0.75rem;
		overflow: auto;
		background: var(--ulp-surface);
		font-family: var(--svp-code-font, ui-monospace, monospace);
		font-size: 0.8rem;
		line-height: 1.5;
		tab-size: 2;
	}
	.code code {
		background: none;
		padding: 0;
		font-size: inherit;
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
