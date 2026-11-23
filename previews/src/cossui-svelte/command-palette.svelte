<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/command
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.ts'
	import {
		Command,
		CommandCollection,
		CommandDialog,
		CommandDialogPopup,
		CommandDialogTrigger,
		CommandEmpty,
		CommandInput,
		CommandItem,
		CommandList,
		CommandPanel,
	} from './ui/command/index.ts'

	const items = [
		{ value: 'new-file', label: 'New file' },
		{ value: 'open-settings', label: 'Open settings' },
		{ value: 'toggle-theme', label: 'Toggle theme' },
	]

	let open = $state(false)
</script>

<CommandDialog bind:open>
	<CommandDialogTrigger class={buttonVariants({ variant: 'outline' })}>Run a command</CommandDialogTrigger>
	<CommandDialogPopup>
		<Command {items}>
			<CommandInput placeholder="Type a command..." />
			<CommandPanel>
				<CommandEmpty>No commands found.</CommandEmpty>
				<CommandList>
					<CommandCollection>
						{#snippet children(item: { value: string; label: string })}
							<CommandItem value={item} onclick={() => (open = false)}>{item.label}</CommandItem>
						{/snippet}
					</CommandCollection>
				</CommandList>
			</CommandPanel>
		</Command>
	</CommandDialogPopup>
</CommandDialog>
