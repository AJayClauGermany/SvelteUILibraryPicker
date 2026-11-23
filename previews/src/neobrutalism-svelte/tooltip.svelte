<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import * as Tooltip from './ui/tooltip/index.ts'
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger class={buttonVariants({ variant: 'outline' })}>Hover me</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Saved to your list</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
