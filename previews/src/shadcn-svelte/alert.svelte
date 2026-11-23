<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/alert
-->
<script lang="ts">
	import './styles.css'
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check'
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert'
	import * as Alert from './ui/alert/index.js'
</script>

<div class="grid max-w-xl gap-4">
	<Alert.Root>
		<CircleCheckIcon />
		<Alert.Title>Settings saved</Alert.Title>
		<Alert.Description>Your changes will apply the next time you sign in.</Alert.Description>
	</Alert.Root>
	<Alert.Root variant="destructive">
		<CircleAlertIcon />
		<Alert.Title>Upload failed</Alert.Title>
		<Alert.Description>The file is larger than 10 MB. Try a smaller one.</Alert.Description>
	</Alert.Root>
</div>
