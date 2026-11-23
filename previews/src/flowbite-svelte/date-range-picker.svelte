<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Range selection is a mode of the Datepicker component.
  Docs: https://flowbite-svelte.com/docs/components/datepicker
-->
<script lang="ts">
	import './styles.css'
	import { Datepicker } from 'flowbite-svelte'

	let rangeFrom = $state<Date>()
	let rangeTo = $state<Date>()
</script>

<Datepicker range bind:rangeFrom bind:rangeTo />
<p>From {rangeFrom?.toLocaleDateString() ?? '…'} to {rangeTo?.toLocaleDateString() ?? '…'}</p>
