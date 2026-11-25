<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/tooltips
-->
<script lang="ts">
	import './styles.css'
	import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip/index.js'
	import { buttonVariants } from './ui/button.svelte'
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger class={buttonVariants({ variant: 'outline' })}>Hover me</TooltipTrigger>
		<TooltipContent>Saved to your list</TooltipContent>
	</Tooltip>
</TooltipProvider>
