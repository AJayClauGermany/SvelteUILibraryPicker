<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/rating-group
-->
<script lang="ts">
	import { RatingGroup } from 'bits-ui'

	let value = $state(3)
</script>

<RatingGroup.Root bind:value max={5} aria-label="Rating">
	{#snippet children({ items })}
		{#each items as item (item.index)}
			<RatingGroup.Item index={item.index}>
				{item.state === 'inactive' ? '☆' : '★'}
			</RatingGroup.Item>
		{/each}
	{/snippet}
</RatingGroup.Root>
