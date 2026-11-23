<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The nav is fixed to the bottom of the frame; the column count is the class its docs pass.
  Docs: https://flowbite-svelte.com/docs/components/bottom-navigation
-->
<script lang="ts">
	import './styles.css'
	import { BottomNav, BottomNavItem } from 'flowbite-svelte'

	// Simple inline icons (Flowbite's own icon set is a separate package).
	const icons = {
		Home: 'M3 11 12 3l9 8v10h-6v-6H9v6H3z',
		Search: 'M10 3a7 7 0 1 0 4.2 12.6l5.1 5.1 1.4-1.4-5.1-5.1A7 7 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z',
		Inbox: 'M3 5h18v14H3zm2 2v6h4l1 2h4l1-2h4V7z',
		Profile: 'M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.4 0 8 2 8 5v2H4v-2c0-3 3.6-5 8-5z',
	}
</script>

<p>Page content.</p>

<BottomNav activeUrl="#home" classes={{ inner: 'grid-cols-4' }}>
	{#each Object.entries(icons) as [name, d] (name)}
		<BottomNavItem btnName={name} href="#{name.toLowerCase()}">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path {d} /></svg>
		</BottomNavItem>
	{/each}
</BottomNav>
