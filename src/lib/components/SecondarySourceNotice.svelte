<script lang="ts">
	const { lastVerified }: { lastVerified?: string } = $props()
</script>

<p class="notice" role="note">
	This site is a <strong>secondary source</strong> for comparison only. The library's official
	documentation is always the source of truth{#if lastVerified}; this entry was last checked on
	<time datetime={lastVerified}>{lastVerified}</time>{/if}. Spotted something out of date?
	<a href="https://github.com/AJayClauGermany/SvelteUILibraryPicker/issues/new/choose" target="_blank" rel="noopener noreferrer">Open an issue</a>.
</p>

<style>
	.notice {
		padding: 0.75rem 1rem;
		border-left: 3px solid var(--ulp-accent);
		background: var(--ulp-surface);
		border-radius: 0 var(--ulp-radius) var(--ulp-radius) 0;
		font-size: 0.88rem;
	}
</style>
