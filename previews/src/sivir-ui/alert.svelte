<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/alert
-->
<script lang="ts">
	import './styles.css'
	import * as Alert from '@sivir-ui/svelte/components/alert'
</script>

<div class="flex w-full max-w-md flex-col gap-3">
	<Alert.Root>
		<Alert.Title>New version available</Alert.Title>
		<Alert.Description>Reload the page to get the latest changes.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="success">
		<Alert.Title>Profile saved</Alert.Title>
		<Alert.Description>Your changes are visible to your team.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="warning">
		<Alert.Title>Trial ends soon</Alert.Title>
		<Alert.Description>Three days are left on your trial.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="error">
		<Alert.Title>Upload failed</Alert.Title>
		<Alert.Description>The file is larger than the 10 MB limit.</Alert.Description>
	</Alert.Root>
</div>
