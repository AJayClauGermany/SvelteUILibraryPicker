<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Skeleton styles the carousel's track and indicators; as in its docs, the slides and buttons
  use Skeleton's own `card` and `btn` classes.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/carousel
-->
<script lang="ts">
	import './styles.css'
	import { Carousel } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const slides = ['First slide', 'Second slide', 'Third slide', 'Fourth slide']
</script>

<Carousel slideCount={slides.length} loop>
	<Carousel.ItemGroup>
		{#each slides as slide, index (slide)}
			<Carousel.Item {index} class="card preset-tonal p-8">{slide}</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.Control class="mt-4 flex justify-between">
		<Carousel.PrevTrigger class="btn preset-tonal">Previous</Carousel.PrevTrigger>
		<Carousel.NextTrigger class="btn preset-tonal">Next</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.IndicatorGroup>
		{#each slides as slide, index (slide)}
			<Carousel.Indicator {index} />
		{/each}
	</Carousel.IndicatorGroup>
</Carousel>
