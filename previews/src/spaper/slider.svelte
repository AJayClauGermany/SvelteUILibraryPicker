<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Slider
-->
<script lang="ts">
	import './styles.css'
	import { Slider } from 'spaper'

	let volume = $state(40)
</script>

<Slider label="Volume" bind:value={volume} min={0} max={100} />
