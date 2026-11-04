<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Checkbox wraps a native <input> you provide, and must sit inside a <label>.
  Docs: https://kendell.dev/m3-svelte/#checkbox-demo
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from 'm3-svelte'

	let checked = $state(true)
</script>

<label>
	<Checkbox>
		<input type="checkbox" bind:checked />
	</Checkbox>
	Accept the terms ({checked ? 'checked' : 'unchecked'})
</label>
