<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/dropdown-menu
-->
<script lang="ts">
	import './styles.css'
	import { buttonVariants } from './ui/button/index.js'
	import * as DropdownMenu from './ui/dropdown-menu/index.js'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>Options</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="start">
		<DropdownMenu.Label>Document</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				New
				<DropdownMenu.Shortcut>⌘N</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				Duplicate
				<DropdownMenu.Shortcut>⌘D</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item disabled>Share</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>Delete</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
