<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.js'
	import * as Tooltip from './ui/tooltip/index.js'
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger class={buttonVariants({ variant: 'outline' })}>Hover me</Tooltip.Trigger>
		<Tooltip.Content>Saved to your drafts</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
