<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/color-picker
-->
<script lang="ts">
	import './styles.css'
	import * as ColorPicker from './components/ui/color-picker/index.js'

	let value = $state('#16a34a')
</script>

<ColorPicker.Root bind:value>
	<ColorPicker.Area />
	<ColorPicker.HueSlider />
	<ColorPicker.AlphaSlider />
	<ColorPicker.Input />
</ColorPicker.Root>
