<!--
  Embla Carousel is headless: it moves slides and ships no styles. The three inline styles are the
  layout its setup guide says it needs to work at all (a clipping viewport, a flex row, full-width
  slides), not a look of ours.
  Docs: https://www.embla-carousel.com/docs/v8/get-started/svelte
-->
<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	import type { EmblaCarouselType } from 'embla-carousel'

	let embla = $state<EmblaCarouselType>()
	const slides = ['First slide', 'Second slide', 'Third slide']
</script>

<div style="overflow: hidden" use:emblaCarouselSvelte={{ options: { loop: true }, plugins: [] }} onemblaInit={e => (embla = e.detail)}>
	<div style="display: flex">
		{#each slides as slide (slide)}
			<div style="flex: 0 0 100%; min-width: 0">{slide}</div>
		{/each}
	</div>
</div>
<button type="button" onclick={() => embla?.scrollPrev()}>Previous</button>
<button type="button" onclick={() => embla?.scrollNext()}>Next</button>
