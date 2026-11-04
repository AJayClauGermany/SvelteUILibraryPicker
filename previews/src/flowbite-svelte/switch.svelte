<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The switch is called Toggle in Flowbite.
  Docs: https://flowbite-svelte.com/docs/forms/toggle
-->
<script lang="ts">
	import './styles.css'
	import { Toggle } from 'flowbite-svelte'

	let checked = $state(true)
</script>

<Toggle bind:checked>Notifications ({checked ? 'on' : 'off'})</Toggle>
<Toggle disabled>Disabled</Toggle>
