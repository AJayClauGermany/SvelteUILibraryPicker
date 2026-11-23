<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Textarea } from '@sivir-ui/svelte/components/textarea'

	let notes = $state('')
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
	<Textarea bind:value={notes} label="Notes" placeholder="Write a short note…" />
	<Textarea disabled value="Locked while the review is open." label="Summary" />
</div>
