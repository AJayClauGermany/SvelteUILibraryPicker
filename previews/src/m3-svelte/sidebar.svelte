<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  NavigationRail has a built-in toggle that expands it to show labels beside the icons.
  Items need an Iconify icon object; the shapes below are ours, as the library's icon set
  isn't a direct dependency here.
  Docs: https://kendell.dev/m3-svelte/#navigation-rail-demo
-->
<script lang="ts">
	import './styles.css'
	import { NavigationRail, NavigationRailItem } from 'm3-svelte'

	const circle = { body: '<circle cx="12" cy="12" r="8" fill="currentColor"/>', width: 24, height: 24 }
	const square = { body: '<rect x="5" y="5" width="14" height="14" fill="currentColor"/>', width: 24, height: 24 }
	const triangle = { body: '<path d="M12 4 20 19H4z" fill="currentColor"/>', width: 24, height: 24 }

	let page = $state('home')
</script>

<NavigationRail>
	<NavigationRailItem label="Home" icon={circle} active={page === 'home'} onclick={() => (page = 'home')} />
	<NavigationRailItem label="Search" icon={square} active={page === 'search'} onclick={() => (page = 'search')} />
	<NavigationRailItem label="Profile" icon={triangle} active={page === 'profile'} onclick={() => (page = 'profile')} />
</NavigationRail>
