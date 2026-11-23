<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  The stars are the component's built-in default icons.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/rating-group
-->
<script lang="ts">
	import './styles.css'
	import { RatingGroup } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<RatingGroup count={5} defaultValue={3.5} allowHalf>
	<RatingGroup.Label>Your rating</RatingGroup.Label>
	<RatingGroup.Control>
		<RatingGroup.Context>
			{#snippet children(ratingGroup)}
				{#each ratingGroup().items as index (index)}
					<RatingGroup.Item {index} />
				{/each}
			{/snippet}
		</RatingGroup.Context>
	</RatingGroup.Control>
	<RatingGroup.HiddenInput />
</RatingGroup>
