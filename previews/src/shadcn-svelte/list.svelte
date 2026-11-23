<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/item
-->
<script lang="ts">
	import './styles.css'
	import FileTextIcon from '@lucide/svelte/icons/file-text'
	import * as Item from './ui/item/index.js'
	import { Button } from './ui/button/index.js'

	const files = [
		{ name: 'Quarterly report', size: '2.4 MB' },
		{ name: 'Meeting notes', size: '18 KB' }
	]
</script>

<Item.Group class="max-w-md">
	{#each files as file, i (file.name)}
		{#if i > 0}
			<Item.Separator />
		{/if}
		<Item.Root>
			<Item.Media variant="icon">
				<FileTextIcon />
			</Item.Media>
			<Item.Content>
				<Item.Title>{file.name}</Item.Title>
				<Item.Description>{file.size}</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button variant="outline" size="sm">Open</Button>
			</Item.Actions>
		</Item.Root>
	{/each}
</Item.Group>
