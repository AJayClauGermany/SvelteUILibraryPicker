<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/dropdown-menu
-->
<script lang="ts">
	import './styles.css'
	import * as DropdownMenu from '@sivir-ui/svelte/components/dropdown-menu'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger variant="outline" size="md">Options</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Label>Document</DropdownMenu.Label>
		<DropdownMenu.Item>Rename</DropdownMenu.Item>
		<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>Archive</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
