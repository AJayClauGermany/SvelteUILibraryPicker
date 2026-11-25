<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Docs: https://framework7.io/svelte/treeview.html
-->
<script lang="ts">
	import { Block, Treeview, TreeviewItem } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<Block>
		<Treeview>
			<TreeviewItem label="src" toggle opened>
				<TreeviewItem label="components" toggle>
					<TreeviewItem label="Header.svelte" />
					<TreeviewItem label="Footer.svelte" />
				</TreeviewItem>
				<TreeviewItem label="app.ts" />
			</TreeviewItem>
			<TreeviewItem label="package.json" />
		</Treeview>
	</Block>
</F7App>
