<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from './ui/tooltip/index.ts'
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger class={buttonVariants({ variant: 'outline' })}>Save</TooltipTrigger>
		<TooltipPopup>Saves your draft</TooltipPopup>
	</Tooltip>
</TooltipProvider>
