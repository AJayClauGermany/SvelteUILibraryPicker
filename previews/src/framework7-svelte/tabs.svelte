<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Tab links here sit in a Segmented; a Toolbar works too.
  Docs: https://framework7.io/svelte/tabs.html
-->
<script lang="ts">
	import { Block, Button, Segmented, Tab, Tabs } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Segmented strong>
			<Button tabLink="#preview-tab-day" tabLinkActive>Day</Button>
			<Button tabLink="#preview-tab-week">Week</Button>
			<Button tabLink="#preview-tab-month">Month</Button>
		</Segmented>
	</Block>
	<Tabs>
		<Tab id="preview-tab-day" tabActive>
			<Block>
				<p>Three meetings today.</p>
			</Block>
		</Tab>
		<Tab id="preview-tab-week">
			<Block>
				<p>Eleven meetings this week.</p>
			</Block>
		</Tab>
		<Tab id="preview-tab-month">
			<Block>
				<p>Forty meetings this month.</p>
			</Block>
		</Tab>
	</Tabs>
</F7App>
