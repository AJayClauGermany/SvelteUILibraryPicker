<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/date-input
-->
<script lang="ts">
	import { DateInput } from '@ark-ui/svelte/date-input'
	import { parseDate } from '@internationalized/date'
</script>

<DateInput.Root defaultValue={[parseDate('2025-03-14')]}>
	<DateInput.Label>Start date</DateInput.Label>
	<DateInput.Control>
		<DateInput.SegmentGroup>
			<DateInput.SegmentContext>
				{#snippet render(segment)}
					<DateInput.Segment {segment} />
				{/snippet}
			</DateInput.SegmentContext>
		</DateInput.SegmentGroup>
	</DateInput.Control>
	<DateInput.HiddenInput />
</DateInput.Root>
