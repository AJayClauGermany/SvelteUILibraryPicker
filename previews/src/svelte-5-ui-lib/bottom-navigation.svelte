<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  The nav is fixed to the bottom of the frame; the column count is the class its docs pass.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/bottom-navigation/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { BottomNav, BottomNavItem } from 'svelte-5-ui-lib'

	// Simple inline icons (the docs use a separate icon package).
	const icons = {
		Home: 'M3 11 12 3l9 8v10h-6v-6H9v6H3z',
		Search: 'M10 3a7 7 0 1 0 4.2 12.6l5.1 5.1 1.4-1.4-5.1-5.1A7 7 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z',
		Inbox: 'M3 5h18v14H3zm2 2v6h4l1 2h4l1-2h4V7z',
		Profile: 'M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.4 0 8 2 8 5v2H4v-2c0-3 3.6-5 8-5z',
	}
</script>

<p>Page content.</p>

<BottomNav activeUrl="#home" innerClass="grid-cols-4">
	{#each Object.entries(icons) as [name, d] (name)}
		<BottomNavItem btnName={name} href="#{name.toLowerCase()}">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path {d} /></svg>
		</BottomNavItem>
	{/each}
</BottomNav>
