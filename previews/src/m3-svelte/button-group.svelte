<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  ConnectedButtons joins Buttons; label Buttons wrapping native radios make it a single-select group.
  Docs: https://kendell.dev/m3-svelte/#connected-buttons-demo
-->
<script lang="ts">
	import './styles.css'
	import { Button, ConnectedButtons } from 'm3-svelte'

	let view = $state('day')
</script>

<ConnectedButtons>
	<Button variant="tonal" square label>
		<input type="radio" name="view" value="day" bind:group={view} />Day
	</Button>
	<Button variant="tonal" square label>
		<input type="radio" name="view" value="week" bind:group={view} />Week
	</Button>
	<Button variant="tonal" square label>
		<input type="radio" name="view" value="month" bind:group={view} />Month
	</Button>
</ConnectedButtons>
<p>Selected: {view}</p>
