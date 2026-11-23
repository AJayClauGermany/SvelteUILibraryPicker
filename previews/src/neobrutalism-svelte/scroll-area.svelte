<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/scroll-area
-->
<script lang="ts">
	import './styles.css'
	import { ScrollArea } from './ui/scroll-area/index.ts'

	const releases = Array.from({ length: 30 }, (_, i) => `v1.${30 - i}.0`)
</script>

<ScrollArea class="h-72 w-48 rounded-md border">
	<div class="p-4">
		{#each releases as release (release)}
			<div class="text-sm">{release}</div>
		{/each}
	</div>
</ScrollArea>
