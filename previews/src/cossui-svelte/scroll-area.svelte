<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/scroll-area
-->
<script lang="ts">
	import './styles.css'
	import { ScrollArea } from './ui/scroll-area/index.ts'

	const releases = Array.from({ length: 40 }, (_, i) => `Release 2.${40 - i}.0`)
</script>

<ScrollArea class="h-64 rounded-lg border">
	<div class="px-4 py-2">
		{#each releases as release (release)}
			<div class="text-sm">{release}</div>
		{/each}
	</div>
</ScrollArea>
