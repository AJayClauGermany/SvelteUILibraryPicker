<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/field#input
-->
<script lang="ts">
	import { Field } from '@ark-ui/svelte/field'

	let value = $state('')
</script>

<Field.Root>
	<Field.Label>Username</Field.Label>
	<Field.Input placeholder="e.g. jdoe" maxlength={20} bind:value />
	<Field.HelperText>{value.length} / 20 characters</Field.HelperText>
</Field.Root>

<Field.Root disabled>
	<Field.Label>Disabled</Field.Label>
	<Field.Input value="Cannot change this" />
</Field.Root>
