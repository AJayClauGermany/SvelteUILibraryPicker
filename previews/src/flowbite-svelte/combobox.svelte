<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Passing suggestions through `data` turns the Input into a combobox; focus it to see them.
  Docs: https://flowbite-svelte.com/docs/forms/input-field
-->
<script lang="ts">
	import './styles.css'
	import { Input, Label } from 'flowbite-svelte'

	const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange', 'Pear']
</script>

<Label for="fruit" class="mb-2">Fruit</Label>
<Input id="fruit" data={fruits} placeholder="Type a fruit" />
