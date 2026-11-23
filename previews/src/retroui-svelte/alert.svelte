<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/alert
-->
<script lang="ts">
	import './styles.css'
	import * as Alert from './ui/alert/index.js'
</script>

<div class="grid gap-4">
	<Alert.Root>
		<Alert.Title>Heads up</Alert.Title>
		<Alert.Description>Your trial ends in three days.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="solid">
		<Alert.Title>Solid</Alert.Title>
		<Alert.Description>The same alert with the solid variant.</Alert.Description>
	</Alert.Root>
	<Alert.Root status="success">
		<Alert.Title>Saved</Alert.Title>
		<Alert.Description>Your changes have been stored.</Alert.Description>
	</Alert.Root>
	<Alert.Root status="error">
		<Alert.Title>Upload failed</Alert.Title>
		<Alert.Description>The file is larger than 10 MB.</Alert.Description>
	</Alert.Root>
</div>
