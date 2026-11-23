<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { Button } from '@sivir-ui/svelte/components/button'
	import * as Tooltip from '@sivir-ui/svelte/components/tooltip'
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button variant="outline">Archive</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>Move this item out of your inbox</Tooltip.Content>
</Tooltip.Root>
