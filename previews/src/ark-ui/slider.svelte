<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Without styles the track and thumb have no size or colour, so only the text shows.
  Docs: https://ark-ui.com/svelte/docs/components/slider
-->
<script lang="ts">
	import { Slider } from '@ark-ui/svelte/slider'
</script>

<Slider.Root defaultValue={[40]}>
	<Slider.Label>Volume</Slider.Label>
	<Slider.ValueText />
	<Slider.Control>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0}>
			<Slider.HiddenInput />
		</Slider.Thumb>
	</Slider.Control>
</Slider.Root>
