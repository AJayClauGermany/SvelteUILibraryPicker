<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/scroll-area
-->
<script lang="ts">
	import './styles.css'
	import { ScrollArea } from './ui/scroll-area/index.js'

	const versions = Array.from({ length: 30 }, (_, i) => `v1.${30 - i}.0`)
</script>

<ScrollArea class="h-48 w-48 rounded-md border">
	<div class="p-4 text-sm">
		{#each versions as version (version)}
			<div class="py-1">{version}</div>
		{/each}
	</div>
</ScrollArea>
