<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from './ui/slider/index.js'

	let volume = $state(40)
</script>

<div class="grid max-w-sm gap-3">
	<Slider type="single" bind:value={volume} max={100} step={1} />
	<p>Volume: {volume}</p>
</div>
