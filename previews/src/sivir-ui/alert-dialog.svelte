<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/alert-dialog
-->
<script lang="ts">
	import './styles.css'
	import * as AlertDialog from '@sivir-ui/svelte/components/alert-dialog'
</script>

<AlertDialog.Root error>
	<AlertDialog.Trigger variant="destructive">Remove project</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Remove this project?</AlertDialog.Title>
			<AlertDialog.Description>Its files and history will be gone for good.</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Exit>Cancel</AlertDialog.Exit>
			<AlertDialog.Confirm>Remove</AlertDialog.Confirm>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
