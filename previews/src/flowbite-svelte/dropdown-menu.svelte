<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The dropdown opens from the element placed right before it.
  Docs: https://flowbite-svelte.com/docs/components/dropdown
-->
<script lang="ts">
	import './styles.css'
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte'

	let isOpen = $state(false)
	const pick = () => (isOpen = false)
</script>

<Button>Actions</Button>
<Dropdown simple bind:isOpen>
	<DropdownItem onclick={pick}>Edit</DropdownItem>
	<DropdownItem onclick={pick}>Duplicate</DropdownItem>
	<DropdownItem onclick={pick}>Delete</DropdownItem>
</Dropdown>
