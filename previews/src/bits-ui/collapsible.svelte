<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/collapsible
-->
<script lang="ts">
	import { Collapsible } from 'bits-ui'

	let open = $state(false)
</script>

<Collapsible.Root bind:open>
	<Collapsible.Trigger>{open ? 'Hide' : 'Show'} details</Collapsible.Trigger>
	<Collapsible.Content>
		<p>These details stay hidden until the trigger is pressed.</p>
	</Collapsible.Content>
</Collapsible.Root>
