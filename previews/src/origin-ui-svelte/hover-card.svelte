<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/tooltips/tooltip-10
-->
<script lang="ts">
	import './styles.css'
	import * as HoverCard from './ui/hover-card/index.js'
	import { buttonVariants } from './ui/button.svelte'
</script>

<HoverCard.Root>
	<HoverCard.Trigger href="#profile" class={buttonVariants({ variant: 'link' })}>@ada</HoverCard.Trigger>
	<HoverCard.Content>
		<p>Ada Lovelace</p>
		<p>Writes about early computing and maths.</p>
	</HoverCard.Content>
</HoverCard.Root>
