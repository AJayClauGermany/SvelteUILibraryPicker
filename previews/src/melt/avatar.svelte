<!--
  Melt UI (next-gen) is headless: builder classes give you attributes to spread onto
  your own elements, and no styles ship with it. This preview is intentionally
  unstyled — that IS its default look.
  Docs: https://next.melt-ui.com/components/avatar
-->
<script lang="ts">
	import { Avatar } from 'melt/builders'

	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#888"/></svg>',
		)

	const withImage = new Avatar({ src: photo })
	const broken = new Avatar({ src: 'missing.png' })
</script>

<div>
	<img {...withImage.image} alt="Ada Lovelace" />
	<span {...withImage.fallback}>AL</span>
</div>
<div>
	<img {...broken.image} alt="Grace Hopper" />
	<span {...broken.fallback}>GH</span>
</div>
