<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/typography/image
-->
<script lang="ts">
	import './styles.css'
	import { Img } from 'flowbite-svelte'

	// A plain inline image, so the preview needs no network request.
	const picture =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="640" height="320"><rect width="640" height="320" fill="#475569"/><circle cx="480" cy="100" r="40" fill="#fbbf24"/><path d="M0 320 L200 140 L360 280 L460 200 L640 320 Z" fill="#0f766e"/></svg>',
		)
</script>

<Img src={picture} alt="Landscape illustration" size="md" caption="An image with a caption" />
