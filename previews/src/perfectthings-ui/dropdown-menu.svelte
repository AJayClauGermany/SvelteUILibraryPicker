<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Menu
-->
<script lang="ts">
	import { Button, Icon, Menu, MenuItem, MenuSeparator } from '@perfectthings/ui'

	let menu: Menu | undefined = $state()
</script>

<Button onclick={e => menu?.open(e)}>Actions</Button>

<Menu bind:this={menu}>
	<MenuItem><Icon name="edit" /> Rename</MenuItem>
	<MenuItem><Icon name="copy" /> Duplicate</MenuItem>
	<MenuSeparator />
	<MenuItem danger><Icon name="trash" /> Delete</MenuItem>
</Menu>
