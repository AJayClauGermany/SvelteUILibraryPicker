<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/extend/command-palette
-->
<script lang="ts">
	import './styles.css'
	import { Button, CommandPalette, type CommandItem } from 'flowbite-svelte'

	let open = $state(false)

	const items: CommandItem[] = [
		{ id: 'new-file', label: 'New file', description: 'Create an empty file', onselect: () => {} },
		{ id: 'open-settings', label: 'Open settings', keywords: ['preferences'], onselect: () => {} },
		{ id: 'toggle-theme', label: 'Toggle theme', description: 'Switch light and dark', onselect: () => {} },
	]
</script>

<Button onclick={() => (open = true)}>Open command palette</Button>

<CommandPalette bind:open {items} />
