<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/dialogs
-->
<script lang="ts">
	import './styles.css'
	import * as Dialog from './ui/dialog/index.js'
	import Button, { buttonVariants } from './ui/button.svelte'
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
