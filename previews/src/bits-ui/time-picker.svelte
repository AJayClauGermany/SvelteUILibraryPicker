<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/time-field
-->
<script lang="ts">
	import { TimeField } from 'bits-ui'
	import { Time } from '@internationalized/date'

	let value = $state(new Time(9, 30))
</script>

<TimeField.Root bind:value>
	<TimeField.Label>Meeting time</TimeField.Label>
	<TimeField.Input>
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}
				<TimeField.Segment {part}>{value}</TimeField.Segment>
			{/each}
		{/snippet}
	</TimeField.Input>
</TimeField.Root>
