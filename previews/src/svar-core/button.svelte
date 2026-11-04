<!--
  SVAR Core styles its components through a theme wrapper; we use the default Willow theme,
  exactly as its getting-started guide sets it up. No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/button/willow
-->
<script lang="ts">
	import { Button, Willow } from '@svar-ui/svelte-core'
</script>

<Willow>
	<Button type="primary">Primary</Button>
	<Button type="secondary">Secondary</Button>
	<Button>Default</Button>
</Willow>
