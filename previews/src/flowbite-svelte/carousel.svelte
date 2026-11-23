<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/carousel
-->
<script lang="ts">
	import './styles.css'
	import { Carousel, CarouselIndicators, Controls } from 'flowbite-svelte'

	// Plain inline images, so the preview needs no network request.
	const slide = (label: string, color: string) =>
		'data:image/svg+xml,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect width="800" height="400" fill="${color}"/><text x="400" y="215" font-family="sans-serif" font-size="40" fill="#fff" text-anchor="middle">${label}</text></svg>`,
		)

	const images = [
		{ src: slide('First slide', '#475569'), alt: 'First slide' },
		{ src: slide('Second slide', '#0f766e'), alt: 'Second slide' },
		{ src: slide('Third slide', '#7c3aed'), alt: 'Third slide' },
	]
</script>

<Carousel {images}>
	<Controls />
	<CarouselIndicators />
</Carousel>
