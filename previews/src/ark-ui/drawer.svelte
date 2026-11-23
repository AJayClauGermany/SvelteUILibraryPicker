<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/drawer
-->
<script lang="ts">
	import { Drawer } from '@ark-ui/svelte/drawer'
</script>

<Drawer.Root>
	<Drawer.Trigger>Open drawer</Drawer.Trigger>
	<Drawer.Backdrop />
	<Drawer.Positioner>
		<Drawer.Content>
			<Drawer.Grabber>
				<Drawer.GrabberIndicator />
			</Drawer.Grabber>
			<Drawer.Title>Filters</Drawer.Title>
			<Drawer.Description>Narrow down the list of results.</Drawer.Description>
			<Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
		</Drawer.Content>
	</Drawer.Positioner>
</Drawer.Root>
