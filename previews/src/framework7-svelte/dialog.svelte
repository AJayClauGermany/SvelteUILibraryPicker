<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do;
  the Popup sits at App level, outside the View, as the App Layout page places modals.
  Docs: https://framework7.io/svelte/popup.html
-->
<script lang="ts">
	import { Block, Button, Link, Navbar, NavRight, Page, Popup, View } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Button fill popupOpen="#preview-popup">Open popup</Button>
	</Block>
	{#snippet modals()}
		<Popup id="preview-popup">
			<View>
				<Page>
					<Navbar title="Popup">
						<NavRight>
							<Link popupClose>Close</Link>
						</NavRight>
					</Navbar>
					<Block>
						<p>A popup covers the app and can hold a whole page.</p>
					</Block>
				</Page>
			</View>
		</Popup>
	{/snippet}
</F7App>
