<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  LinearProgress takes a required percent; WavyLinearProgress is the M3 Expressive variant.
  Docs: https://kendell.dev/m3-svelte/#progress-demo
-->
<script lang="ts">
	import './styles.css'
	import { Slider, LinearProgress, WavyLinearProgress } from 'm3-svelte'

	let percent = $state(40)
</script>

<p>Linear</p>
<LinearProgress {percent} aria-label="Linear progress" />
<p>Wavy</p>
<WavyLinearProgress {percent} aria-label="Wavy progress" />
<p>Set progress: {percent}%</p>
<Slider bind:value={percent} min={0} max={100} />
