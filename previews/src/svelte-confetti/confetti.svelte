<!--
  svelte-confetti has no stylesheet to import: the component carries its own scoped CSS animation,
  shown here with its default props (random hues, 50 pieces, one burst). The parent only adds
  padding so the burst, which flies up and sideways from where the component sits, stays in the frame.
  Docs: https://mitcheljager.github.io/svelte-confetti/
-->
<script lang="ts">
	import { Confetti } from 'svelte-confetti'

	let bursts = $state(1)
</script>

<div style="padding: 160px 0 0 120px">
	<button onclick={() => bursts++}>Celebrate</button>
	{#key bursts}
		<Confetti />
	{/key}
</div>
