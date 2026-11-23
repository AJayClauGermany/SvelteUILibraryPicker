<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/tag-input
-->
<script lang="ts">
	import './styles.css'
	import * as TagInput from '@sivir-ui/svelte/components/tag-input'

	let tags = $state(['design', 'svelte'])
</script>

<div class="w-full max-w-md">
	<TagInput.Root bind:tags label="Topics" description="Press Enter to add a topic.">
		<TagInput.List />
		<TagInput.Input placeholder="Add a topic…" />
	</TagInput.Root>
</div>
