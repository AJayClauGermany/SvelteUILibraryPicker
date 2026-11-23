<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  FAB takes an Iconify icon object and/or text; these use text only, so no icon package is needed.
  Docs: https://kendell.dev/m3-svelte/#fab-demo
-->
<script lang="ts">
	import './styles.css'
	import { FAB } from 'm3-svelte'

	let count = $state(0)
</script>

<FAB text="Compose" onclick={() => count++} />
<FAB text="Medium" size="medium" color="secondary-container" onclick={() => count++} />
<FAB text="Large" size="large" color="tertiary" onclick={() => count++} />
<p>Clicked {count} times</p>
