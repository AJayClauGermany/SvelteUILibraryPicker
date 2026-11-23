<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Flowbite Svelte has no separate number component; it is the Input with type="number".
  Docs: https://flowbite-svelte.com/docs/forms/number-input
-->
<script lang="ts">
	import './styles.css'
	import { Input, Label } from 'flowbite-svelte'

	let quantity = $state(1)
</script>

<Label for="quantity" class="mb-2">Quantity</Label>
<Input id="quantity" type="number" bind:value={quantity} min={0} max={10} />
