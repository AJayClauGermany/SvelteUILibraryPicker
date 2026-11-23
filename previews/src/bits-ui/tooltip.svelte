<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/tooltip
-->
<script lang="ts">
	import { Tooltip } from 'bits-ui'
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>Hover me</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content sideOffset={8}>
				Saves your changes
				<Tooltip.Arrow />
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
