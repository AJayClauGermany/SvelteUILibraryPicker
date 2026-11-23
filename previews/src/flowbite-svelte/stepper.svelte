<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/stepper
-->
<script lang="ts">
	import './styles.css'
	import { Stepper } from 'flowbite-svelte'

	let current = $state(2)

	const steps = [
		{ label: 'Cart', description: 'Review' },
		{ label: 'Shipping', description: 'Address' },
		{ label: 'Payment' },
	]
</script>

<Stepper {steps} bind:current />
<p>Step {current} of {steps.length} (click a step)</p>
