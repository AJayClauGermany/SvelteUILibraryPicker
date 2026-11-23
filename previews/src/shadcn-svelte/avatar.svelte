<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/avatar
-->
<script lang="ts">
	import './styles.css'
	import * as Avatar from './ui/avatar/index.js'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#64748b"/><circle cx="24" cy="19" r="9" fill="#e2e8f0"/><rect x="10" y="32" width="28" height="16" rx="8" fill="#e2e8f0"/></svg>',
		)
</script>

<div class="flex items-center gap-4">
	<Avatar.Root>
		<Avatar.Image src={photo} alt="Ada Lovelace" />
		<Avatar.Fallback>AL</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root>
		<Avatar.Fallback>GH</Avatar.Fallback>
	</Avatar.Root>
</div>
