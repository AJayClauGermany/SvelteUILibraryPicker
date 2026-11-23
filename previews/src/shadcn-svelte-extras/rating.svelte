<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/star-rating
-->
<script lang="ts">
	import './styles.css'
	import * as StarRating from './components/ui/star-rating/index.js'

	let value = $state(3)
</script>

<StarRating.Root bind:value>
	{#snippet children({ items })}
		{#each items as item (item.index)}
			<StarRating.Star {...item} />
		{/each}
	{/snippet}
</StarRating.Root>
