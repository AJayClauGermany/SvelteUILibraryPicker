<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/checkbox
-->
<script lang="ts">
	import { Checkbox, Label } from 'bits-ui'

	let checked = $state(true)
</script>

<Checkbox.Root id="updates" bind:checked>
	{#snippet children({ checked })}
		{checked ? '[x]' : '[ ]'}
	{/snippet}
</Checkbox.Root>
<Label.Root for="updates">Subscribe to updates ({checked ? 'checked' : 'unchecked'})</Label.Root>
