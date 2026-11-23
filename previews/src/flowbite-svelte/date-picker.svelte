<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/datepicker
-->
<script lang="ts">
	import './styles.css'
	import { Datepicker } from 'flowbite-svelte'

	let value = $state<Date>()
</script>

<Datepicker bind:value />
<p>Selected: {value?.toLocaleDateString() ?? 'none'}</p>
