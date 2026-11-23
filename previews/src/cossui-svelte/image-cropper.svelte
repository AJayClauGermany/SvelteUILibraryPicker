<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/cropper
-->
<script lang="ts">
	import './styles.css'
	import { Cropper, CropperCropArea, CropperDescription, CropperImage } from './ui/cropper/index.ts'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="480" height="320"><rect width="480" height="320" fill="#64748b"/><circle cx="360" cy="90" r="36" fill="#e2e8f0"/><path d="M0 320 150 140l120 120 60-60 150 120z" fill="#cbd5e1"/></svg>',
		)
</script>

<Cropper class="h-72 w-full max-w-md" image={photo}>
	<CropperDescription>Drag to move the image, scroll to zoom.</CropperDescription>
	<CropperImage />
	<CropperCropArea />
</Cropper>
