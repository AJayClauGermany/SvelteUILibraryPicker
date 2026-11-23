<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/toggle
-->
<script lang="ts">
	import { Toggle } from '@ark-ui/svelte/toggle'

	let pressed = $state(false)
</script>

<Toggle.Root bind:pressed aria-label="Bold">
	<Toggle.Indicator>
		Bold: on
		{#snippet fallback()}Bold: off{/snippet}
	</Toggle.Indicator>
</Toggle.Root>
<p>Pressed: {pressed}</p>
