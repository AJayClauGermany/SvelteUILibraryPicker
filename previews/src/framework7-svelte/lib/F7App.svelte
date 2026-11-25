<!--
  Shared setup for the Framework7 Svelte previews (a helper, not a preview). It follows the
  "Initialize App" and "App Layout" pages: load the Framework7 CSS bundle, register the plugin
  with Framework7.use(Framework7Svelte), then mount App > View main > Page with default params
  (theme "auto": Material on desktop and Android, iOS on iPhone and iPad).
  `children` is the page content; `modals` renders at App level, outside the View, where the
  App Layout page puts popups and panels.
  Docs: https://framework7.io/svelte/init-app.html and https://framework7.io/svelte/app-layout.html
-->
<script lang="ts">
	import 'framework7/css/bundle'
	import Framework7 from 'framework7/lite-bundle'
	import Framework7Svelte, { App, Page, View } from 'framework7-svelte'
	import { onMount, type Snippet } from 'svelte'

	Framework7.use(Framework7Svelte)

	let { children, modals }: { children?: Snippet, modals?: Snippet } = $props()

	// Frame fix, not library styling: App sets its mount element (the preview page's padded #app) to
	// height: 100%, which pushes bottom bars and FABs below the frame. border-box keeps the app in view.
	onMount(() => document.getElementById('app')?.style.setProperty('box-sizing', 'border-box'))
</script>

<App>
	<View main>
		<Page>
			{@render children?.()}
		</Page>
	</View>
	{@render modals?.()}
</App>
