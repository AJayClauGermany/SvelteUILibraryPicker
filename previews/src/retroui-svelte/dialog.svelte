<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/dialog
-->
<script lang="ts">
	import './styles.css'
	import { Button, buttonVariants } from './ui/button/index.js'
	import * as Dialog from './ui/dialog/index.js'
	import { Input } from './ui/input/index.js'
	import { Label } from './ui/label/index.js'
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Rename file</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Rename file</Dialog.Title>
			<Dialog.Description>Choose a new name for this file.</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-2">
			<Label for="file-name">Name</Label>
			<Input id="file-name" value="report.pdf" />
		</div>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
			<Button>Save</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
