<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/dropdown-menu
-->
<script lang="ts">
	import './styles.css'
	import * as DropdownMenu from './ui/dropdown-menu/index.ts'
	import { Button } from './ui/button/index.ts'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Options</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="start">
		<DropdownMenu.Label>Document</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				Duplicate
				<DropdownMenu.Shortcut>⌘D</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item>Share</DropdownMenu.Item>
			<DropdownMenu.Item disabled>Move to folder</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
