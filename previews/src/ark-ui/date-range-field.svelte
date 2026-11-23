<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/date-input#range
-->
<script lang="ts">
	import { DateInput } from '@ark-ui/svelte/date-input'
</script>

<DateInput.Root selectionMode="range">
	<DateInput.Label>Trip dates</DateInput.Label>
	<DateInput.Control>
		{#each [0, 1] as index (index)}
			<DateInput.SegmentGroup {index}>
				<DateInput.SegmentContext>
					{#snippet render(segment)}
						<DateInput.Segment {segment} />
					{/snippet}
				</DateInput.SegmentContext>
			</DateInput.SegmentGroup>
		{/each}
	</DateInput.Control>
	<DateInput.HiddenInput index={0} />
	<DateInput.HiddenInput index={1} />
</DateInput.Root>
