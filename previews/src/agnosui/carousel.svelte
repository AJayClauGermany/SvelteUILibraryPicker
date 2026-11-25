<!--
  AgnosUI Bootstrap package: Bootstrap 5 CSS plus the AgnosUI stylesheet, imported as its docs
  StackBlitz template does. The d-block w-100 image classes are the Bootstrap classes its docs use.
  No styles of ours.
  Docs: https://www.agnosui.dev/latest/docs/svelte/components/carousel/examples
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import '@agnos-ui/core-bootstrap/css/agnosui.css'
	import { Carousel } from '@agnos-ui/svelte-bootstrap/components/carousel'

	// Plain inline images, so the preview needs no network request.
	const image = (label: string, color: string) =>
		'data:image/svg+xml,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="360"><rect width="800" height="360" fill="${color}"/><text x="400" y="195" font-family="sans-serif" font-size="40" fill="#fff" text-anchor="middle">${label}</text></svg>`,
		)

	type Slide = { id: string; label: string; src: string }

	const slides: Slide[] = [
		{ id: 'one', label: 'First slide', src: image('First slide', '#475569') },
		{ id: 'two', label: 'Second slide', src: image('Second slide', '#0f766e') },
		{ id: 'three', label: 'Third slide', src: image('Third slide', '#7c3aed') },
	]
</script>

<Carousel slidesData={slides}>
	{#snippet slide({ label, src }: Slide)}
		<img class="d-block w-100" {src} alt={label} />
	{/snippet}
</Carousel>
