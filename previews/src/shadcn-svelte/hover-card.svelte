<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/hover-card
-->
<script lang="ts">
	import './styles.css'
	import * as HoverCard from './ui/hover-card/index.js'
	import { buttonVariants } from './ui/button/index.js'
</script>

<HoverCard.Root>
	<HoverCard.Trigger class={buttonVariants({ variant: 'link' })}>@svelte</HoverCard.Trigger>
	<HoverCard.Content class="w-64">
		<div class="font-semibold">Svelte</div>
		<div>A compiler-first framework for building web apps.</div>
	</HoverCard.Content>
</HoverCard.Root>
