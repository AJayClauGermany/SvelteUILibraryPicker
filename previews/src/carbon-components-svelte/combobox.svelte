<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/ComboBox
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { ComboBox } from 'carbon-components-svelte'

	const items = [
		{ id: 'apple', text: 'Apple' },
		{ id: 'banana', text: 'Banana' },
		{ id: 'cherry', text: 'Cherry' },
	]
</script>

<ComboBox labelText="Fruit" placeholder="Pick a fruit" {items} />
