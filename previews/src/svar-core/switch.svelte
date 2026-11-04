<!--
  SVAR Core styles its components through a theme wrapper; we use the default Willow theme,
  exactly as its getting-started guide sets it up. No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/switch/willow
-->
<script lang="ts">
	import { Switch, Willow } from '@svar-ui/svelte-core'

	let on = $state(true)
</script>

<Willow>
	<Switch bind:value={on} />
	<Switch />
</Willow>
