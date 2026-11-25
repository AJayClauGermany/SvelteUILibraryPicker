<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/dropdown
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, Dropdown, DropdownItem, DropdownMenu } from 'yesvelte'
</script>

<Dropdown>
	{#snippet targetSnippet()}
		<Button>Actions</Button>
	{/snippet}
	<DropdownMenu>
		<DropdownItem header>File</DropdownItem>
		<DropdownItem>Rename</DropdownItem>
		<DropdownItem>Duplicate</DropdownItem>
		<DropdownItem divider />
		<DropdownItem disabled>Delete</DropdownItem>
	</DropdownMenu>
</Dropdown>
