<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The popover is anchored to the button through triggerRef.
  Docs: https://stdf.dev/components?nav=actionPopover&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { ActionPopover, Button } from 'stdf'

	let visible = $state(false)
	let trigger = $state<HTMLElement | null>(null)
</script>

<div bind:this={trigger}>
	<Button onclick={() => (visible = true)}>Actions</Button>
</div>
<ActionPopover
	bind:visible
	triggerRef={trigger}
	actions={[{ content: 'Edit' }, { content: 'Duplicate' }, { content: 'Delete', style: 'theme' }]}
/>
