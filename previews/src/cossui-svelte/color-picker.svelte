<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/colorpicker
-->
<script lang="ts">
	import './styles.css'
	import { ColorPicker } from './ui/colorpicker/index.ts'

	let color = $state('#0ea5e9')
</script>

<ColorPicker bind:color />
