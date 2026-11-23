<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/modal
-->
<script lang="ts">
	import './styles.css'
	import * as Modal from '@sivir-ui/svelte/components/modal'

	let open = $state(false)
</script>

<Modal.Root bind:open>
	<Modal.Trigger>Rename file</Modal.Trigger>
	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Rename this file?</Modal.Title>
			<Modal.Description>Links that point to the old name will stop working.</Modal.Description>
		</Modal.Header>
		<Modal.Footer>
			<Modal.Close>Cancel</Modal.Close>
			<Modal.Confirm>Rename</Modal.Confirm>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
