<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/popover
-->
<script lang="ts">
	import { Popover } from '@ark-ui/svelte/popover'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<Popover.Root>
	<Popover.Trigger>Show details</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content>
				<Popover.Arrow>
					<Popover.ArrowTip />
				</Popover.Arrow>
				<Popover.Title>Shipping</Popover.Title>
				<Popover.Description>Orders leave the warehouse within two days.</Popover.Description>
				<Popover.CloseTrigger>Close</Popover.CloseTrigger>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover.Root>
