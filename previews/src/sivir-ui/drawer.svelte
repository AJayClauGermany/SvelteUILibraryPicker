<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/sheet
-->
<script lang="ts">
	import './styles.css'
	import { Button } from '@sivir-ui/svelte/components/button'
	import * as Sheet from '@sivir-ui/svelte/components/sheet'

	let open = $state(false)
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger>Open filters</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Filters</Sheet.Title>
			<Sheet.Description>Narrow the list by status and owner.</Sheet.Description>
		</Sheet.Header>
		<Sheet.Footer>
			<Sheet.Close>Cancel</Sheet.Close>
			<Button onclick={() => (open = false)}>Apply</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
