<!--
  PhotoSwipe styles only the lightbox it opens (its own stylesheet, imported as the docs say); the
  thumbnail gallery is plain markup of ours, unstyled. Click a thumbnail to open it. The images are
  small inline SVG data: URIs, so nothing is fetched from another host.
  Docs: https://photoswipe.com/getting-started/
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/style.css'

	const svg = (fill: string, label: string) =>
		'data:image/svg+xml,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">` +
				`<rect width="800" height="600" fill="${fill}"/>` +
				`<text x="400" y="320" font-family="sans-serif" font-size="64" fill="#fff" text-anchor="middle">${label}</text>` +
				`</svg>`,
		)

	const photos = [
		{ src: svg('#4f7cac', 'Lake'), alt: 'Blue placeholder image' },
		{ src: svg('#6a994e', 'Forest'), alt: 'Green placeholder image' },
		{ src: svg('#bc6c25', 'Desert'), alt: 'Orange placeholder image' },
	]

	let gallery = $state<HTMLElement>()

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery,
			children: 'a',
			pswpModule: () => import('photoswipe'),
		})
		lightbox.init()
		return () => lightbox.destroy()
	})
</script>

<div bind:this={gallery}>
	{#each photos as photo (photo.src)}
		<a href={photo.src} data-pswp-width="800" data-pswp-height="600" target="_blank" rel="noreferrer">
			<img src={photo.src} alt={photo.alt} width="160" height="120" />
		</a>
	{/each}
</div>
