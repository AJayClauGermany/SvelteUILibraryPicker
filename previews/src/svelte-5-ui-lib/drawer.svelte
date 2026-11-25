<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Open/close state comes from uiHelpers(), as in the docs; Drawerhead adds the close button.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/drawer/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Button, Drawer, Drawerhead, uiHelpers } from 'svelte-5-ui-lib'

	const drawer = uiHelpers()
</script>

<Button onclick={drawer.open}>Open drawer</Button>

<Drawer drawerStatus={drawer.isOpen} closeDrawer={drawer.close}>
	<Drawerhead onclick={drawer.close}>
		<h5>Drawer title</h5>
	</Drawerhead>
	<p>Some content inside the drawer.</p>
</Drawer>
