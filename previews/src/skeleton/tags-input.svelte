<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/tags-input
-->
<script lang="ts">
	import './styles.css'
	import { TagsInput } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<TagsInput defaultValue={['svelte', 'tailwind']}>
	<TagsInput.Label>Topics</TagsInput.Label>
	<TagsInput.Control>
		<TagsInput.Context>
			{#snippet children(tagsInput)}
				{#each tagsInput().value as value, index (index)}
					<TagsInput.Item {value} {index}>
						<TagsInput.ItemPreview>
							<TagsInput.ItemText>{value}</TagsInput.ItemText>
							<TagsInput.ItemDeleteTrigger />
						</TagsInput.ItemPreview>
						<TagsInput.ItemInput />
					</TagsInput.Item>
				{/each}
			{/snippet}
		</TagsInput.Context>
		<TagsInput.Input placeholder="Add a topic" />
	</TagsInput.Control>
	<TagsInput.HiddenInput />
</TagsInput>
