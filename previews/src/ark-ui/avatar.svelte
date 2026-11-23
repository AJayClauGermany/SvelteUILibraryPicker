<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/avatar
-->
<script lang="ts">
	import { Avatar } from '@ark-ui/svelte/avatar'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#64748b"/><circle cx="24" cy="19" r="9" fill="#e2e8f0"/><rect x="10" y="32" width="28" height="16" rx="8" fill="#e2e8f0"/></svg>',
		)
</script>

<p>With an image:</p>
<Avatar.Root>
	<Avatar.Fallback>JD</Avatar.Fallback>
	<Avatar.Image src={photo} alt="Jane Doe" />
</Avatar.Root>

<p>Fallback only (no image):</p>
<Avatar.Root>
	<Avatar.Fallback>JD</Avatar.Fallback>
</Avatar.Root>
