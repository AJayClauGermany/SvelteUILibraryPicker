<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Material has no passive badge; its Chip is the closest (interactive) equivalent.
  Docs: https://kendell.dev/m3-svelte/#chip-demo
-->
<script lang="ts">
	import './styles.css'
	import { Chip } from 'm3-svelte'

	let selected = $state(true)
</script>

<Chip variant="assist" onclick={() => {}}>Assist</Chip>
<Chip variant="general" {selected} onclick={() => (selected = !selected)}>Filter</Chip>
<Chip variant="input" onclick={() => {}}>Input</Chip>
