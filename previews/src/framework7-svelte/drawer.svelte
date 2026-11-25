<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do;
  the Panel sits at App level, outside the main View, as the App Layout page places it.
  Docs: https://framework7.io/svelte/panel.html
-->
<script lang="ts">
	import { Block, Button, Link, Navbar, NavRight, Page, Panel, View } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block class="grid grid-cols-2 grid-gap">
		<Button fill panelOpen="left">Left panel</Button>
		<Button fill panelOpen="right">Right panel</Button>
	</Block>
	{#snippet modals()}
		<Panel left cover>
			<View>
				<Page>
					<Navbar title="Menu" />
					<Block>
						<p>This panel covers the page.</p>
					</Block>
				</Page>
			</View>
		</Panel>
		<Panel right reveal>
			<View>
				<Page>
					<Navbar title="Details">
						<NavRight>
							<Link panelClose>Close</Link>
						</NavRight>
					</Navbar>
					<Block>
						<p>This panel pushes the page aside.</p>
					</Block>
				</Page>
			</View>
		</Panel>
	{/snippet}
</F7App>
