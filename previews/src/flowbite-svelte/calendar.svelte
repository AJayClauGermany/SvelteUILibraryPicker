<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The inline mode of the Datepicker; there is no standalone calendar component.
  Docs: https://flowbite-svelte.com/docs/components/datepicker
-->
<script lang="ts">
	import './styles.css'
	import { Datepicker } from 'flowbite-svelte'

	let value = $state<Date>()
</script>

<Datepicker inline bind:value />
