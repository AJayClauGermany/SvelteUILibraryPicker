<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Card has three variants; passing onclick turns it into a <button>.
  Docs: https://kendell.dev/m3-svelte/#card-demo
-->
<script lang="ts">
	import './styles.css'
	import { Card } from 'm3-svelte'

	let clicks = $state(0)
</script>

<Card variant="elevated">Elevated card</Card>
<Card variant="filled">Filled card</Card>
<Card variant="outlined">Outlined card</Card>
<Card variant="filled" onclick={() => clicks++}>Clickable card ({clicks} clicks)</Card>
