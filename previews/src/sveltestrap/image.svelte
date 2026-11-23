<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/content-images--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Figure, Image } from '@sveltestrap/sveltestrap'

	// A tiny inline image, so the preview needs no network request.
	const landscape =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="240" height="150"><rect width="240" height="150" fill="#9ec5fe"/><circle cx="190" cy="40" r="18" fill="#ffda6a"/><path d="M0 150 L80 60 L140 130 L180 95 L240 150 Z" fill="#0d6efd"/></svg>',
		)
</script>

<Image thumbnail src={landscape} alt="A drawn landscape" />

<Figure caption="The same image inside a Figure.">
	<Image src={landscape} alt="A drawn landscape" />
</Figure>
