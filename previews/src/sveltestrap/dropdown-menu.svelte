<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-dropdown--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@sveltestrap/sveltestrap'
</script>

<Dropdown>
	<DropdownToggle caret>Actions</DropdownToggle>
	<DropdownMenu>
		<DropdownItem header>File</DropdownItem>
		<DropdownItem>Rename</DropdownItem>
		<DropdownItem>Duplicate</DropdownItem>
		<DropdownItem divider />
		<DropdownItem disabled>Delete</DropdownItem>
	</DropdownMenu>
</Dropdown>
