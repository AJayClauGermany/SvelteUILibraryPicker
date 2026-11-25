<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  sharedAxisTransition is a Svelte transition function: here each new step slides in along the X axis.
  Docs: https://kendell.dev/m3-svelte/#ui-transitions-demo
-->
<script lang="ts">
	import './styles.css'
	import { Button, sharedAxisTransition } from 'm3-svelte'

	let step = $state(1)
</script>

<Button onclick={() => (step = (step % 3) + 1)}>Next step</Button>
{#key step}
	<p in:sharedAxisTransition={{ direction: 'X', rightSeam: false }}>Step {step} of 3</p>
{/key}
