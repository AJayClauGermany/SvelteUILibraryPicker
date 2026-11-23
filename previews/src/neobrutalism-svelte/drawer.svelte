<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/sheet
-->
<script lang="ts">
	import './styles.css'
	import * as Sheet from './ui/sheet/index.ts'
	import { buttonVariants } from './ui/button/index.ts'
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open filters</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Filters</Sheet.Title>
			<Sheet.Description>Narrow the list down by status and owner.</Sheet.Description>
		</Sheet.Header>
		<Sheet.Footer>
			<Sheet.Close class={buttonVariants({ variant: 'outline' })}>Done</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
