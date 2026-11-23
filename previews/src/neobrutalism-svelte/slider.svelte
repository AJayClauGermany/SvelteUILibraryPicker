<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from './ui/slider/index.ts'

	let volume = $state(40)
</script>

<Slider type="single" bind:value={volume} max={100} step={1} class="max-w-[70%]" />
