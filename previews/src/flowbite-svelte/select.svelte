<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/forms/select
-->
<script lang="ts">
	import './styles.css'
	import { Label, Select } from 'flowbite-svelte'

	const fruits = [
		{ value: 'apple', name: 'Apple' },
		{ value: 'banana', name: 'Banana' },
		{ value: 'cherry', name: 'Cherry' },
	]

	let fruit = $state('')
</script>

<Label for="fruit" class="mb-2">Fruit</Label>
<Select id="fruit" items={fruits} bind:value={fruit} />
