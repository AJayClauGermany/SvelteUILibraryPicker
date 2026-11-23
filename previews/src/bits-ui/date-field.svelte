<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/date-field
-->
<script lang="ts">
	import { DateField } from 'bits-ui'
	import { getLocalTimeZone, today, type DateValue } from '@internationalized/date'

	let value = $state<DateValue | undefined>(today(getLocalTimeZone()))
</script>

<DateField.Root bind:value>
	<DateField.Label>Birthday</DateField.Label>
	<DateField.Input>
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<DateField.Segment {part}>{value}</DateField.Segment>
			{/each}
		{/snippet}
	</DateField.Input>
</DateField.Root>
