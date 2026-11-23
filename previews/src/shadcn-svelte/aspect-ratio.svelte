<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/aspect-ratio
-->
<script lang="ts">
	import './styles.css'
	import { AspectRatio } from './ui/aspect-ratio/index.js'

	// A tiny inline image, so the preview needs no network request.
	const photo =
		'data:image/svg+xml,' +
		encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90"><rect width="160" height="90" fill="#64748b"/><circle cx="120" cy="28" r="12" fill="#e2e8f0"/><path d="M0 90 50 40l40 40 20-20 50 30z" fill="#cbd5e1"/></svg>',
		)
</script>

<div class="w-[450px]">
	<AspectRatio ratio={16 / 9} class="rounded-lg bg-muted">
		<img src={photo} alt="A landscape drawing in 16:9" class="h-full w-full rounded-lg object-cover" />
	</AspectRatio>
</div>
