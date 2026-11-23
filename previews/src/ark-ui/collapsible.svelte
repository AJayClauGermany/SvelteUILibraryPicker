<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/collapsible
-->
<script lang="ts">
	import { Collapsible } from '@ark-ui/svelte/collapsible'
</script>

<Collapsible.Root>
	<Collapsible.Trigger>
		Show details
		<Collapsible.Indicator>(toggle)</Collapsible.Indicator>
	</Collapsible.Trigger>
	<Collapsible.Content>Extra details that stay hidden until the trigger is pressed.</Collapsible.Content>
</Collapsible.Root>
