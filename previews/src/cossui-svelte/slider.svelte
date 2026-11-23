<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from './ui/slider/index.ts'

	let volume = $state(40)
	let price = $state([20, 75])
</script>

<Slider bind:value={volume} getAriaLabel={() => 'Volume'} />
<Slider
	bind:value={price}
	getAriaLabel={i => (i === 0 ? 'Minimum price' : 'Maximum price')}
/>
