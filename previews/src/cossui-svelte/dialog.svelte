<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/dialog
-->
<script lang="ts">
	import './styles.css'
	import { Button, buttonVariants } from './ui/button/index.ts'
	import {
		Dialog,
		DialogClose,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogPanel,
		DialogPopup,
		DialogTitle,
		DialogTrigger,
	} from './ui/dialog/index.ts'

	let open = $state(false)
</script>

<Dialog bind:open>
	<DialogTrigger class={buttonVariants({ variant: 'outline' })}>Rename file</DialogTrigger>
	<DialogPopup>
		<DialogHeader>
			<DialogTitle>Rename file</DialogTitle>
			<DialogDescription>The new name shows up for everyone with access.</DialogDescription>
		</DialogHeader>
		<DialogPanel>Current name: report-2025.pdf</DialogPanel>
		<DialogFooter>
			<DialogClose class={buttonVariants({ variant: 'ghost' })}>Cancel</DialogClose>
			<Button onclick={() => (open = false)}>Save</Button>
		</DialogFooter>
	</DialogPopup>
</Dialog>
