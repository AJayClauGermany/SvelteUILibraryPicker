<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Without styles the dial has no size or shape, so only the label and value show.
  Docs: https://ark-ui.com/svelte/docs/components/angle-slider
-->
<script lang="ts">
	import { AngleSlider } from '@ark-ui/svelte/angle-slider'

	const markers = [0, 90, 180, 270]
</script>

<AngleSlider.Root defaultValue={45}>
	<AngleSlider.Label>Angle</AngleSlider.Label>
	<AngleSlider.Control>
		<AngleSlider.Thumb />
		<AngleSlider.MarkerGroup>
			{#each markers as value (value)}
				<AngleSlider.Marker {value} />
			{/each}
		</AngleSlider.MarkerGroup>
	</AngleSlider.Control>
	<AngleSlider.ValueText />
	<AngleSlider.HiddenInput />
</AngleSlider.Root>
