<script lang="ts">
	/** Plain text where `backticked` spans render as code (used for data notes and conventions). */
	interface Props {
		text: string
	}

	const { text }: Props = $props()
	const parts = $derived(text.split('`'))
</script>

{#each parts as part, i (i)}{#if i % 2}<code>{part}</code>{:else}{part}{/if}{/each}
