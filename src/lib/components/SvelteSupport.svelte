<script lang="ts">
	import type { Library } from '#lib/data/schema.ts'

	const { svelte }: { svelte: Library['svelte'] } = $props()
	const majors = [3, 4, 5] as const
</script>

<span class="support" title={svelte.peerRange ? `peerDependency: svelte ${svelte.peerRange}` : undefined}>
	{#each majors as major (major)}
		<span class="ulp-chip" class:on={svelte.supported.includes(major)} aria-label="Svelte {major}: {svelte.supported.includes(major) ? 'supported' : 'not supported'}">
			{svelte.supported.includes(major) ? '✓' : '✕'} Svelte {major}
		</span>
	{/each}
	{#if svelte.runes}<span class="ulp-chip on">runes</span>{/if}
</span>

<style>
	.support {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}
	.ulp-chip:not(.on) {
		opacity: 0.45;
	}
	.on {
		color: var(--ulp-ok);
	}
</style>
