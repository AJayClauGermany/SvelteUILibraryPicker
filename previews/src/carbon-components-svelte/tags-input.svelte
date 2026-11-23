<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/MultiSelect
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { MultiSelect } from 'carbon-components-svelte'

	const items = [
		{ id: 'svelte', text: 'Svelte' },
		{ id: 'react', text: 'React' },
		{ id: 'vue', text: 'Vue' },
	]
</script>

<MultiSelect labelText="Frameworks" label="Choose frameworks" {items} selectedIds={['svelte']} />
