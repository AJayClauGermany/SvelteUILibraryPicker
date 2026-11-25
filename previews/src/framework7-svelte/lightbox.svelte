<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  PhotoBrowser opens standalone by default. The photos are inline SVG data: URIs, so nothing is
  fetched from another host.
  Docs: https://framework7.io/svelte/photo-browser.html
-->
<script lang="ts">
	import { Block, Button, PhotoBrowser } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'

	const photo = (fill: string, label: string) =>
		'data:image/svg+xml,' +
		encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">` +
				`<rect width="800" height="600" fill="${fill}"/>` +
				`<text x="400" y="320" font-family="sans-serif" font-size="64" fill="#fff" text-anchor="middle">${label}</text>` +
				`</svg>`,
		)

	const photos = [
		{ url: photo('#4f7cac', 'Lake'), caption: 'A blue placeholder' },
		{ url: photo('#6a994e', 'Forest'), caption: 'A green placeholder' },
		{ url: photo('#bc6c25', 'Desert'), caption: 'An orange placeholder' },
	]

	let browser = $state<PhotoBrowser>()
</script>

<F7App>
	<PhotoBrowser bind:this={browser} {photos} />
	<Block>
		<Button fill onClick={() => browser?.open()}>Open photo browser</Button>
	</Block>
</F7App>
