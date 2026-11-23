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
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Publish changes</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Publish changes</Dialog.Title>
			<Dialog.Description>Your edits will be visible to everyone with access.</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
			<Button>Publish</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
