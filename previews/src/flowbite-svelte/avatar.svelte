<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The row wrapper uses the layout classes from the Flowbite Svelte avatar docs.
  Docs: https://flowbite-svelte.com/docs/components/avatar
-->
<script lang="ts">
	import './styles.css'
	import { Avatar } from 'flowbite-svelte'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" fill="#64748b"/><circle cx="24" cy="19" r="9" fill="#e2e8f0"/><rect x="10" y="32" width="28" height="16" rx="8" fill="#e2e8f0"/></svg>',
		)
</script>

<div class="flex space-x-4">
	<Avatar src={photo} alt="Jane Doe" />
	<Avatar src={photo} alt="Jane Doe" cornerStyle="rounded" />
	<Avatar>JD</Avatar>
	<Avatar />
	<Avatar src={photo} alt="Jane Doe" dot={{ color: 'green' }} />
</div>
