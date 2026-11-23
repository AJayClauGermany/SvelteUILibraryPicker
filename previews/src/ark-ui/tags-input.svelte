<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/tags-input
-->
<script lang="ts">
	import { TagsInput } from '@ark-ui/svelte/tags-input'

	let value = $state(['svelte', 'design'])
</script>

<TagsInput.Root bind:value>
	<TagsInput.Label>Topics</TagsInput.Label>
	<TagsInput.Control>
		{#each value as tag, index (tag)}
			<TagsInput.Item {index} value={tag}>
				<TagsInput.ItemPreview>
					<TagsInput.ItemText>{tag}</TagsInput.ItemText>
					<TagsInput.ItemDeleteTrigger>×</TagsInput.ItemDeleteTrigger>
				</TagsInput.ItemPreview>
				<TagsInput.ItemInput />
			</TagsInput.Item>
		{/each}
		<TagsInput.Input placeholder="Add a topic and press Enter" />
	</TagsInput.Control>
	<TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
	<TagsInput.HiddenInput />
</TagsInput.Root>
