<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/dialog
-->
<script lang="ts">
	import './styles.css'
	import * as Dialog from './ui/dialog/index.ts'
	import { Button, buttonVariants } from './ui/button/index.ts'
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Rename project</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Rename project</Dialog.Title>
			<Dialog.Description>The new name shows up for everyone on the team.</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
			<Button>Save</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
