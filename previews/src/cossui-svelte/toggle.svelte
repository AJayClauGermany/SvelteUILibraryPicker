<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/toggle
-->
<script lang="ts">
	import './styles.css'
	import { Toggle } from './ui/toggle/index.ts'

	let pressed = $state(true)
</script>

<Toggle bind:pressed>Bold</Toggle>
<Toggle>Italic</Toggle>
<Toggle variant="outline">Outline</Toggle>
<Toggle disabled>Disabled</Toggle>
