<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Without styles the crop box has no visible outline; it can still be dragged and resized.
  Docs: https://ark-ui.com/svelte/docs/components/image-cropper
-->
<script lang="ts">
	import { ImageCropper } from '@ark-ui/svelte/image-cropper'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="320" height="200" fill="#94a3b8"/><circle cx="240" cy="60" r="28" fill="#fde68a"/><path d="M0 200 L110 80 L200 170 L250 120 L320 190 V200 Z" fill="#475569"/></svg>',
		)
</script>

<ImageCropper.Root>
	<ImageCropper.Viewport>
		<ImageCropper.Image src={photo} />
		<ImageCropper.Selection>
			{#each ImageCropper.handles as position (position)}
				<ImageCropper.Handle {position} />
			{/each}
		</ImageCropper.Selection>
	</ImageCropper.Viewport>
</ImageCropper.Root>
