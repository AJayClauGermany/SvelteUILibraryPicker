<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/color-picker
-->
<script lang="ts">
	import { ColorPicker, parseColor } from '@ark-ui/svelte/color-picker'

	const swatches = [
		{ name: 'Red', value: '#e11d48' },
		{ name: 'Blue', value: '#2563eb' },
		{ name: 'Green', value: '#16a34a' },
	]
	let value = $state(parseColor('#2563eb'))
</script>

<ColorPicker.Root inline bind:value>
	<ColorPicker.Label>Colour: {value.toString('hex')}</ColorPicker.Label>
	<ColorPicker.ChannelInput channel="hex" />
	<ColorPicker.SwatchGroup>
		{#each swatches as swatch (swatch.value)}
			<ColorPicker.SwatchTrigger value={swatch.value}>
				<ColorPicker.Swatch value={swatch.value}>
					{swatch.name}
					<ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
				</ColorPicker.Swatch>
			</ColorPicker.SwatchTrigger>
		{/each}
	</ColorPicker.SwatchGroup>
	<ColorPicker.HiddenInput />
</ColorPicker.Root>
