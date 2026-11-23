<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Its default Timepicker wraps the native time input with a clock icon.
  Docs: https://flowbite-svelte.com/docs/forms/timepicker
-->
<script lang="ts">
	import './styles.css'
	import { Label, Timepicker } from 'flowbite-svelte'

	let time = $state('09:30')
</script>

<Label for="meeting" class="mb-2">Meeting time</Label>
<Timepicker id="meeting" bind:value={time} />
<p>Selected: {time}</p>
