<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/tabbar
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Tabbar, TabbarLink } from 'konsta/svelte'

	const tabs = ['Home', 'Search', 'Profile']
	let active = $state('Home')
</script>

<App>
	<Block>
		<p>Current tab: {active}</p>
	</Block>
	<Tabbar labels>
		{#each tabs as tab (tab)}
			<TabbarLink active={active === tab} label={tab} onclick={() => (active = tab)} />
		{/each}
	</Tabbar>
</App>
