<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/tooltip
-->
<script lang="ts">
	import { Portal } from '@ark-ui/svelte/portal'
	import { Tooltip } from '@ark-ui/svelte/tooltip'
</script>

<Tooltip.Root>
	<Tooltip.Trigger>Hover me</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content>
				<Tooltip.Arrow>
					<Tooltip.ArrowTip />
				</Tooltip.Arrow>
				Saves your draft
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip.Root>
