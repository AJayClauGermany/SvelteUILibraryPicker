<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The builder positions the thumb absolutely; without a positioned root of ours it is placed
  against the page. A text dot stands in for the thumb.
  Docs: https://melt-ui.com/docs/builders/slider
-->
<script lang="ts">
	import { createSlider } from '@melt-ui/svelte'

	const {
		elements: { root, range, thumbs },
		states: { value },
	} = createSlider({ defaultValue: [40], max: 100 })
</script>

<p>Volume: {$value[0]}</p>
<span {...$root} use:root>
	<span {...$range} use:range></span>
	{#each $thumbs as thumb, i (i)}
		<span {...thumb} use:thumbs aria-label="Volume">●</span>
	{/each}
</span>
