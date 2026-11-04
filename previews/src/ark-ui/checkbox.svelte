<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/checkbox
-->
<script lang="ts">
	import { Checkbox } from '@ark-ui/svelte/checkbox'

	let checked = $state(true)
</script>

<Checkbox.Root bind:checked>
	<Checkbox.Control>
		<Checkbox.Indicator>[x]</Checkbox.Indicator>
	</Checkbox.Control>
	<Checkbox.Label>Subscribe to updates ({checked ? 'checked' : 'unchecked'})</Checkbox.Label>
	<Checkbox.HiddenInput />
</Checkbox.Root>
