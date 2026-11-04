<!--
  SVAR Core styles its components through a theme wrapper; we use the default Willow theme,
  exactly as its getting-started guide sets it up. No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/checkbox/willow
-->
<script lang="ts">
	import { Checkbox, Willow } from '@svar-ui/svelte-core'
</script>

<Willow>
	<Checkbox label="Accept the terms" />
	<Checkbox label="Remember me" value={true} />
</Willow>
