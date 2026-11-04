<!--
  SVAR Core styles its components through a theme wrapper; we use the default Willow theme,
  exactly as its getting-started guide sets it up. No styles of ours.
  Docs: https://docs.svar.dev/svelte/core/samples/#/modalarea/willow
-->
<script lang="ts">
	import { Button, Modal, Willow } from '@svar-ui/svelte-core'

	let open = $state(true)
	const close = () => (open = false)
</script>

<Willow>
	<Button type="primary" onclick={() => (open = true)}>Open dialog</Button>

	{#if open}
		<Modal title="Delete file?" onconfirm={close} oncancel={close}>This cannot be undone.</Modal>
	{/if}
</Willow>
