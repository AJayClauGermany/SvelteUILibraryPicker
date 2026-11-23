<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The first avatar loads a small inline image; the second has no image, so its fallback shows.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/avatar
-->
<script lang="ts">
	import './styles.css'
	import { Avatar } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const image =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#7c9cbf"/><circle cx="32" cy="26" r="12" fill="#e8eef5"/><rect x="14" y="42" width="36" height="22" rx="11" fill="#e8eef5"/></svg>',
		)
</script>

<Avatar>
	<Avatar.Image src={image} alt="Jane Doe" />
	<Avatar.Fallback>JD</Avatar.Fallback>
</Avatar>
<Avatar>
	<Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>
