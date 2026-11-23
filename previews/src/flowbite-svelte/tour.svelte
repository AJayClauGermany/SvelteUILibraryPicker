<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The tour highlights each target element in turn; start it with the button.
  Docs: https://flowbite-svelte.com/docs/extend/tour
-->
<script lang="ts">
	import './styles.css'
	import { Button, Tour } from 'flowbite-svelte'
	import type { TourStep } from 'flowbite-svelte'

	let active = $state(false)

	const steps: TourStep[] = [
		{ target: '#tour-start', title: 'Welcome', description: 'This button starts the tour.' },
		{ target: '#tour-save', title: 'Save', description: 'Save your changes here.' },
	]
</script>

<Button id="tour-start" onclick={() => (active = true)}>Start tour</Button>
<Button id="tour-save" color="alternative">Save</Button>

<Tour {steps} bind:active />
