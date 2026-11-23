<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/slider
-->
<script lang="ts">
	import { Slider } from 'bits-ui'

	let value = $state(40)
</script>

<p>Volume: {value}</p>
<Slider.Root type="single" bind:value min={0} max={100} step={1}>
	<Slider.Range />
	<Slider.Thumb index={0} aria-label="Volume">●</Slider.Thumb>
</Slider.Root>
