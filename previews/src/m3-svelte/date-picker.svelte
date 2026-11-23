<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  DateField is a text field whose calendar button opens a docked date picker below it.
  Docs: https://kendell.dev/m3-svelte/#date-field-demo
-->
<script lang="ts">
	import './styles.css'
	import { DateField } from 'm3-svelte'

	let value = $state('')
</script>

<DateField label="Date" bind:value />
<p>Value: {value || 'none'}</p>
