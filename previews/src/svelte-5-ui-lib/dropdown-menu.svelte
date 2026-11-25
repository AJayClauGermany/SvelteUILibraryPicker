<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Open/close state comes from uiHelpers(); the menu opens in place below the button.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/dropdown/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, Dropdown, DropdownLi, DropdownUl, uiHelpers } from 'svelte-5-ui-lib'

	const dropdown = uiHelpers()
</script>

<Button onclick={dropdown.toggle}>Actions</Button>

<Dropdown dropdownStatus={dropdown.isOpen} closeDropdown={dropdown.close}>
	<DropdownUl>
		<DropdownLi href="#edit">Edit</DropdownLi>
		<DropdownLi href="#duplicate">Duplicate</DropdownLi>
		<DropdownLi href="#delete">Delete</DropdownLi>
	</DropdownUl>
</Dropdown>
