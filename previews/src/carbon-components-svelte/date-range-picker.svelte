<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/DatePicker
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { DatePicker, DatePickerInput } from 'carbon-components-svelte'
</script>

<DatePicker datePickerType="range">
	<DatePickerInput labelText="Check-in" placeholder="mm/dd/yyyy" />
	<DatePickerInput labelText="Check-out" placeholder="mm/dd/yyyy" />
</DatePicker>
