<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/toggle
-->
<script lang="ts">
	import './styles.css'
	import Bold from '@lucide/svelte/icons/bold'
	import Italic from '@lucide/svelte/icons/italic'
	import { Toggle } from '@sivir-ui/svelte/components/toggle'

	let bold = $state(true)
	let italic = $state(false)
</script>

<div class="flex gap-2">
	<Toggle bind:pressed={bold} aria-label="Bold"><Bold size={14} /></Toggle>
	<Toggle bind:pressed={italic} aria-label="Italic"><Italic size={14} /></Toggle>
	<Toggle>Spell check</Toggle>
	<Toggle disabled>Locked</Toggle>
</div>
