<script lang="ts">
	/** External link to official documentation. Always use this for outbound docs links. */
	import type { Snippet } from 'svelte'

	interface Props {
		href: string
		children: Snippet
		/** Visually emphasise (used for the main "Official docs" call to action). */
		primary?: boolean
	}

	const { href, children, primary = false }: Props = $props()
</script>

<a {href} class="docs-link" class:primary target="_blank" rel="noopener noreferrer">
	{@render children()}<span class="arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens official site in a new tab)</span>
</a>

<style>
	.docs-link {
		display: inline-flex;
		align-items: center;
		gap: 0.2rem;
	}
	.arrow {
		font-size: 0.75em;
		opacity: 0.7;
	}
	.primary {
		padding: 0.45rem 0.9rem;
		border-radius: 8px;
		background: var(--ulp-accent);
		color: #fff !important;
		font-weight: 600;
		text-decoration: none;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
</style>
