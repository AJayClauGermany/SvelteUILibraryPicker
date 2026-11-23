<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/carousel
-->
<script lang="ts">
	import { Carousel } from '@ark-ui/svelte/carousel'

	const slides = ['Slide one', 'Slide two', 'Slide three']
</script>

<Carousel.Root slideCount={slides.length}>
	<Carousel.Control>
		<Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
		<Carousel.NextTrigger>Next</Carousel.NextTrigger>
	</Carousel.Control>
	<Carousel.ItemGroup>
		{#each slides as slide, index (slide)}
			<Carousel.Item {index}>{slide}</Carousel.Item>
		{/each}
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup>
		{#each slides as slide, index (slide)}
			<Carousel.Indicator {index}>{index + 1}</Carousel.Indicator>
		{/each}
	</Carousel.IndicatorGroup>
</Carousel.Root>
