<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  The second avatar has no image, so it shows its fallback text.
  Docs: https://melt-ui.com/docs/builders/avatar
-->
<script lang="ts">
	import { createAvatar } from '@melt-ui/svelte'

	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#888"/></svg>',
		)

	const {
		elements: { image: withImage, fallback: withImageFallback },
	} = createAvatar({ src: photo })

	const {
		elements: { image: noImage, fallback: noImageFallback },
	} = createAvatar({ src: '' })
</script>

<div>
	<img {...$withImage} use:withImage alt="Ada Lovelace" />
	<span {...$withImageFallback} use:withImageFallback>AL</span>
</div>
<div>
	<img {...$noImage} use:noImage alt="Grace Hopper" />
	<span {...$noImageFallback} use:noImageFallback>GH</span>
</div>
