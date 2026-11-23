<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/dialog
-->
<script lang="ts">
	import './styles.css'
	import * as Dialog from './ui/dialog/index.js'
	import { Button, buttonVariants } from './ui/button/index.js'
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Rename file</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Rename file</Dialog.Title>
			<Dialog.Description>The new name will show up for everyone who has access.</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
			<Button>Save</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
