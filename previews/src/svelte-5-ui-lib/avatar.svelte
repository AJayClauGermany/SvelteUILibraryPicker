<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The row wrapper uses flex layout classes, as the avatar docs do.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/avatar/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Avatar } from 'svelte-5-ui-lib'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#64748b"/><circle cx="24" cy="19" r="9" fill="#e2e8f0"/><rect x="10" y="32" width="28" height="16" rx="8" fill="#e2e8f0"/></svg>',
		)
</script>

<div class="flex gap-4">
	<Avatar src={photo} alt="Jane Doe" />
	<Avatar src={photo} alt="Jane Doe" cornerStyle="rounded" />
	<Avatar src={photo} alt="Jane Doe" border />
	<Avatar />
</div>
