<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	let value = $state([40])
</script>

<Slider {value} onValueChange={(details) => (value = details.value)}>
	<Slider.Label>Volume</Slider.Label>
	<Slider.ValueText>{value[0]}</Slider.ValueText>
	<Slider.Control>
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0}>
			<Slider.HiddenInput />
		</Slider.Thumb>
	</Slider.Control>
</Slider>
