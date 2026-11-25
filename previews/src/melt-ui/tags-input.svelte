<!--
  Melt UI (legacy builders) is headless: it ships no styles, so this is unstyled on purpose.
  Type a tag and press Enter to add it.
  Docs: https://melt-ui.com/docs/builders/tags-input
-->
<script lang="ts">
	import { createTagsInput } from '@melt-ui/svelte'

	const {
		elements: { root, input, tag, deleteTrigger, edit },
		states: { tags },
	} = createTagsInput({ defaultTags: ['svelte', 'headless'] })
</script>

<div {...$root} use:root>
	{#each $tags as t (t.id)}
		<div {...$tag(t)} use:tag>
			{t.value}
			<button {...$deleteTrigger(t)} use:deleteTrigger aria-label="Remove {t.value}">×</button>
		</div>
		<span {...$edit(t)} use:edit>{t.value}</span>
	{/each}
	<input {...$input} use:input placeholder="Add a tag" />
</div>
