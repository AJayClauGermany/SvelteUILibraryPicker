<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Menu
-->
<script lang="ts">
	import { Menu, MenuItem, MenuSeparator } from '@perfectthings/ui'
</script>

<p id="context-target">Right-click (or long-press) this text.</p>

<Menu type="context" targetSelector="#context-target">
	<MenuItem shortcut="cmd+x">Cut</MenuItem>
	<MenuItem shortcut="cmd+c">Copy</MenuItem>
	<MenuItem shortcut="cmd+v">Paste</MenuItem>
	<MenuSeparator />
	<MenuItem disabled>Inspect</MenuItem>
</Menu>
