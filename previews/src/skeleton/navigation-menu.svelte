<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The App Bar adds only layout and a surface colour. As in its docs, the toolbar's grid columns
  come from a Tailwind class, and the buttons use Skeleton's own `btn` classes.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/app-bar
-->
<script lang="ts">
	import './styles.css'
	import { AppBar } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<AppBar>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
		<AppBar.Lead>
			<button type="button" class="btn preset-tonal">Menu</button>
		</AppBar.Lead>
		<AppBar.Headline>My App</AppBar.Headline>
		<AppBar.Trail>
			<button type="button" class="btn preset-filled">Sign in</button>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
