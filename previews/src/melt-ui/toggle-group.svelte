<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The pressed item is marked by aria and data attributes only, so the text shows the value.
  Docs: https://melt-ui.com/docs/builders/toggle-group
-->
<script lang="ts">
	import { createToggleGroup } from '@melt-ui/svelte'

	const alignments = ['Left', 'Center', 'Right']

	const {
		elements: { root, item },
		states: { value },
	} = createToggleGroup({ type: 'single', defaultValue: 'Left' })
</script>

<div {...$root} use:root aria-label="Text alignment">
	{#each alignments as alignment (alignment)}
		<button {...$item(alignment)} use:item>{alignment}</button>
	{/each}
</div>
<p>Selected: {$value ?? 'none'}</p>
