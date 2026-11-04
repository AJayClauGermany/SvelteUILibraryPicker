<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  The library requires Switch to sit inside a <label>.
  Docs: https://kendell.dev/m3-svelte/#switch-demo
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from 'm3-svelte'

	let checked = $state(true)
</script>

<label>
	<Switch bind:checked />
	Notifications ({checked ? 'on' : 'off'})
</label>
