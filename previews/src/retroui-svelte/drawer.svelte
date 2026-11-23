<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/sheet
-->
<script lang="ts">
	import './styles.css'
	import * as Sheet from './ui/sheet/index.js'
	import { buttonVariants } from './ui/button/index.js'
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open sheet</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Filters</Sheet.Title>
			<Sheet.Description>Narrow down the list of results.</Sheet.Description>
		</Sheet.Header>
		<Sheet.Footer>
			<Sheet.Close class={buttonVariants()}>Apply</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
