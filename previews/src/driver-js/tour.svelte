<!--
  Driver.js ships its own stylesheet (driver.css, imported as its install guide says) for the
  overlay and popover; this is its default look. It has no documented dark theme. No styles of ours.
  Docs: https://driverjs.com/docs/installation
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { driver } from 'driver.js'
	import 'driver.js/dist/driver.css'

	let search: HTMLInputElement
	let create: HTMLButtonElement

	const tour = driver({
		showProgress: true,
		steps: [
			{ element: () => search, popover: { title: 'Search', description: 'Look up any record here.' } },
			{ element: () => create, popover: { title: 'New record', description: 'Add one from this button.' } },
		],
	})

	onMount(() => {
		tour.drive()
		return () => tour.destroy()
	})
</script>

<input bind:this={search} placeholder="Search" />
<button bind:this={create}>New record</button>
<button onclick={() => tour.drive()}>Start tour</button>
