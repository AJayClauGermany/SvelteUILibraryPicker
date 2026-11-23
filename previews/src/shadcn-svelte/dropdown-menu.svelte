<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/dropdown-menu
-->
<script lang="ts">
	import './styles.css'
	import * as DropdownMenu from './ui/dropdown-menu/index.js'
	import { buttonVariants } from './ui/button/index.js'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline' })}>Options</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Document</DropdownMenu.Label>
			<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
			<DropdownMenu.Item>Download</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
