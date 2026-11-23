<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Slider wraps a native range <input>; the second one uses a numeric step with stops.
  Docs: https://kendell.dev/m3-svelte/#slider-demo
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from 'm3-svelte'

	let volume = $state(40)
	let rating = $state(3)
</script>

<p>Volume: {volume.toFixed(0)}</p>
<Slider bind:value={volume} aria-label="Volume" />
<p>Rating: {rating}</p>
<Slider bind:value={rating} min={0} max={5} step={1} stops aria-label="Rating" />
