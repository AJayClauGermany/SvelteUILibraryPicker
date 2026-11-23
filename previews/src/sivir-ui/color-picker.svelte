<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/color-picker
-->
<script lang="ts">
	import './styles.css'
	import * as ColorPicker from '@sivir-ui/svelte/components/color-picker'

	let value = $state('#0d9488')
</script>

<div class="w-full max-w-sm">
	<ColorPicker.Root {value} onValueChange={(v) => (value = v)} label="Brand color">
		<ColorPicker.Trigger />
		<ColorPicker.Content />
	</ColorPicker.Root>
</div>
