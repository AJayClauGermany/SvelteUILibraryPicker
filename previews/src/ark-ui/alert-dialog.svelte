<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/dialog#alert-dialog
-->
<script lang="ts">
	import { Dialog } from '@ark-ui/svelte/dialog'
	import { Portal } from '@ark-ui/svelte/portal'
</script>

<Dialog.Root role="alertdialog">
	<Dialog.Trigger>Delete file</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop />
		<Dialog.Positioner>
			<Dialog.Content>
				<Dialog.Title>Delete this file?</Dialog.Title>
				<Dialog.Description>The file will be removed for everyone.</Dialog.Description>
				<Dialog.CloseTrigger>Cancel</Dialog.CloseTrigger>
				<Dialog.CloseTrigger>Delete</Dialog.CloseTrigger>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Root>
