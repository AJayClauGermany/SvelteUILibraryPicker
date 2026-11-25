<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  Segmented marks the selected Button with its active prop.
  Docs: https://framework7.io/svelte/segmented.html
-->
<script lang="ts">
	import { Block, Button, Segmented } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'

	const views = ['List', 'Grid', 'Map']
	let current = $state('List')
</script>

<F7App>
	<Block>
		<Segmented strong>
			{#each views as view (view)}
				<Button active={current === view} onClick={() => (current = view)}>{view}</Button>
			{/each}
		</Segmented>
	</Block>
</F7App>
