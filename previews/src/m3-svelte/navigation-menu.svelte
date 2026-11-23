<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  NavCMLX picks its form from the window size class with variant="auto"; this uses "compact"
  (a bottom bar). Items need an Iconify icon object; the shapes below are ours, as the
  library's icon set isn't a direct dependency here.
  Docs: https://kendell.dev/m3-svelte/#nav-for-c/m/l/x-demo
-->
<script lang="ts">
	import './styles.css'
	import { NavCMLX, NavCMLXItem } from 'm3-svelte'

	const circle = { body: '<circle cx="12" cy="12" r="8" fill="currentColor"/>', width: 24, height: 24 }
	const square = { body: '<rect x="5" y="5" width="14" height="14" fill="currentColor"/>', width: 24, height: 24 }
	const triangle = { body: '<path d="M12 4 20 19H4z" fill="currentColor"/>', width: 24, height: 24 }

	let page = $state('home')
</script>

<p>Current page: {page}</p>
<NavCMLX variant="compact">
	<NavCMLXItem variant="compact" icon={circle} text="Home" selected={page === 'home'} onclick={() => (page = 'home')} />
	<NavCMLXItem variant="compact" icon={square} text="Search" selected={page === 'search'} onclick={() => (page = 'search')} />
	<NavCMLXItem variant="compact" icon={triangle} text="Profile" selected={page === 'profile'} onclick={() => (page = 'profile')} />
</NavCMLX>
