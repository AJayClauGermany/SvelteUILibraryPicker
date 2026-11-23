<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/image-cropper
-->
<script lang="ts">
	import * as imageCropper from '@zag-js/image-cropper'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	// A small inline SVG stands in for a photo, so the preview needs no network.
	const src =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="320" height="200" fill="#8ab"/><circle cx="160" cy="100" r="60" fill="#fc6"/></svg>',
		)

	const id = $props.id()
	const service = useMachine(imageCropper.machine, { id })
	const api = $derived(imageCropper.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<div {...api.getViewportProps()}>
		<img {src} alt="Sample to crop" {...api.getImageProps()} />
		<div {...api.getSelectionProps()}>
			{#each imageCropper.handles as position (position)}
				<div {...api.getHandleProps({ position })}></div>
			{/each}
		</div>
	</div>
</div>
