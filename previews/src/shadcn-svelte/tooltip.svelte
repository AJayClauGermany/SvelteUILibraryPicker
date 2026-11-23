<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import * as Tooltip from './ui/tooltip/index.js'
	import { buttonVariants } from './ui/button/index.js'
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger class={buttonVariants({ variant: 'outline' })}>Hover me</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Saved to your list</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
