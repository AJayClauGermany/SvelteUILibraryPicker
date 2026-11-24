<!--
  The component ships its own scoped styles (no CSS import needed in Svelte); we use its default
  colours unchanged, and in dark mode its documented `darkmode="force"` prop (options page, "darkmode").
  No styles of ours.
  Docs: https://simeydotme.github.io/svelte-range-slider-pips/en/options/
-->
<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips'
	import { theme } from '../../theme.svelte.ts'

	let volume = $state([40])
	let hours = $state([9, 17])
</script>

<RangeSlider
	bind:values={volume}
	pips
	all="label"
	pipstep={10}
	float
	ariaLabels={['Volume']}
	darkmode={theme.current === 'dark' ? 'force' : false}
/>
<p>Volume: {volume[0]}</p>

<RangeSlider
	bind:values={hours}
	min={0}
	max={24}
	range
	pips
	first="label"
	last="label"
	pipstep={2}
	float
	ariaLabels={['Opens', 'Closes']}
	darkmode={theme.current === 'dark' ? 'force' : false}
/>
<p>Open from {hours[0]}:00 to {hours[1]}:00</p>
