<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/rating-group
-->
<script lang="ts">
	import { RatingGroup } from '@ark-ui/svelte/rating-group'
</script>

<RatingGroup.Root count={5} defaultValue={3}>
	<RatingGroup.Label>Rating</RatingGroup.Label>
	<RatingGroup.Control>
		<RatingGroup.Context>
			{#snippet render(rating)}
				{#each rating().items as index (index)}
					<RatingGroup.Item {index}>
						<RatingGroup.ItemContext>
							{#snippet render(item)}
								{item().highlighted ? '★' : '☆'}
							{/snippet}
						</RatingGroup.ItemContext>
					</RatingGroup.Item>
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup.Root>
