<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. The carousel-inner
  wrapper and d-block w-100 image classes are the Bootstrap classes its docs use. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-carousel--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import {
		Carousel,
		CarouselControl,
		CarouselIndicators,
		CarouselItem,
	} from '@sveltestrap/sveltestrap'

	// Plain inline images, so the preview needs no network request.
	const slide = (label: string, color: string) =>
		'data:image/svg+xml,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="360"><rect width="800" height="360" fill="${color}"/><text x="400" y="195" font-family="sans-serif" font-size="40" fill="#fff" text-anchor="middle">${label}</text></svg>`,
		)

	const items = [
		{ src: slide('First slide', '#475569'), title: 'First slide' },
		{ src: slide('Second slide', '#0f766e'), title: 'Second slide' },
		{ src: slide('Third slide', '#7c3aed'), title: 'Third slide' },
	]

	let activeIndex = $state(0)
</script>

<Carousel {items} bind:activeIndex>
	<CarouselIndicators bind:activeIndex {items} />
	<div class="carousel-inner">
		{#each items as item, index (item.title)}
			<CarouselItem bind:activeIndex itemIndex={index}>
				<img src={item.src} class="d-block w-100" alt={item.title} />
			</CarouselItem>
		{/each}
	</div>
	<CarouselControl direction="prev" bind:activeIndex {items} />
	<CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>
