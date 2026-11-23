<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/date-input#time-only
-->
<script lang="ts">
	import { DateInput } from '@ark-ui/svelte/date-input'
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date'

	const formatter = new DateFormatter('en-US', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
</script>

<DateInput.Root granularity="minute" hourCycle={24} {formatter} timeZone={getLocalTimeZone()}>
	<DateInput.Label>Start time</DateInput.Label>
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
