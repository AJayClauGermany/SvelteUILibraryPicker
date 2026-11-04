<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/dialog
-->
<script lang="ts">
	import { Dialog } from '@ark-ui/svelte/dialog'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<Dialog.Root>
	<Dialog.Trigger>Open dialog</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop />
		<Dialog.Positioner>
			<Dialog.Content>
				<Dialog.Title>Example dialog</Dialog.Title>
				<Dialog.Description>A short message inside the dialog.</Dialog.Description>
				<Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Root>
