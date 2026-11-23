<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from './ui/slider/index.js'

	let volume = $state(40)
</script>

<Slider type="single" bind:value={volume} max={100} step={1} class="max-w-[70%]" />
