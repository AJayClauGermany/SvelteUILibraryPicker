<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/segmented
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Segmented, SegmentedButton } from 'konsta/svelte'

	const views = ['Day', 'Week', 'Month']
	let active = $state('Week')
</script>

<App>
	<Block>
		<Segmented>
			{#each views as view (view)}
				<SegmentedButton active={active === view} onclick={() => (active = view)}>
					{view}
				</SegmentedButton>
			{/each}
		</Segmented>
	</Block>
	<Block>
		<Segmented outline>
			{#each views as view (view)}
				<SegmentedButton active={active === view} onclick={() => (active = view)}>
					{view}
				</SegmentedButton>
			{/each}
		</Segmented>
	</Block>
</App>
