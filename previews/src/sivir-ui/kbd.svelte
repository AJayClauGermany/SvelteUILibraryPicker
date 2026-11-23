<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/shortcut
-->
<script lang="ts">
	import './styles.css'
	import Shortcut from '@sivir-ui/svelte/components/shortcut'
</script>

<div class="flex items-center gap-3">
	<Shortcut shortcut="cmd+K" />
	<Shortcut shortcut="ctrl+shift+P" />
	<Shortcut shortcut="esc" />
</div>
