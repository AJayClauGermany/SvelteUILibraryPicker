<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. The height is set so the area
  scrolls; the base component adds no border or padding of its own.
  Docs: https://originui-svelte.pages.dev/tabs/tab-08
-->
<script lang="ts">
	import './styles.css'
	import { ScrollArea } from './ui/scroll-area/index.js'

	const versions = Array.from({ length: 30 }, (_, i) => `v1.${30 - i}.0`)
</script>

<ScrollArea class="h-48 w-48">
	{#each versions as version (version)}
		<p>{version}</p>
	{/each}
</ScrollArea>
