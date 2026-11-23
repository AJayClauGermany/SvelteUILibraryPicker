<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Menu is only the surface; a native <details> with Button's `summary` mode opens and closes it.
  Docs: https://kendell.dev/m3-svelte/#menu-demo
-->
<script lang="ts">
	import './styles.css'
	import { Button, Menu, MenuItem } from 'm3-svelte'

	let picked = $state('nothing')
</script>

<details>
	<Button variant="outlined" summary>Open menu</Button>
	<Menu>
		<MenuItem onclick={() => (picked = 'Cut')}>Cut</MenuItem>
		<MenuItem onclick={() => (picked = 'Copy')}>Copy</MenuItem>
		<MenuItem disabled onclick={() => (picked = 'Paste')}>Paste</MenuItem>
	</Menu>
</details>
<p>Picked: {picked}</p>
