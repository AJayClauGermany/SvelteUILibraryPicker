<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from '@sivir-ui/svelte/components/slider'

	let volume = $state(40)
</script>

<div class="w-full max-w-xs">
	<Slider bind:value={volume} label="Volume" format={(v) => `${v}%`} />
</div>
