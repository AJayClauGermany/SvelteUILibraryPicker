<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/scroll-area
-->
<script lang="ts">
	import './styles.css'
	import { ScrollArea } from '@sivir-ui/svelte/components/scroll-area'

	const tags = Array.from({ length: 20 }, (_, i) => `v1.${i}.0`)
</script>

<ScrollArea class="h-48 w-48 rounded-[var(--radius-md)] border border-border" aria-label="Releases">
	{#each tags as tag (tag)}
		<p class="px-3 py-2 text-sm">{tag}</p>
	{/each}
</ScrollArea>
