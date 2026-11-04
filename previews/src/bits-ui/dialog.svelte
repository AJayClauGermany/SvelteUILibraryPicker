<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/dialog
-->
<script lang="ts">
	import { Dialog } from 'bits-ui'
</script>

<Dialog.Root>
	<Dialog.Trigger>Open dialog</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay />
		<Dialog.Content>
			<Dialog.Title>Example dialog</Dialog.Title>
			<Dialog.Description>A short message inside the dialog.</Dialog.Description>
			<Dialog.Close>Close</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
