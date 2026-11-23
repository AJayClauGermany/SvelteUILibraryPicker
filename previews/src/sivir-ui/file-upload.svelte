<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/attachment
-->
<script lang="ts">
	import './styles.css'
	import * as Attachment from '@sivir-ui/svelte/components/attachment'

	let files = $state<File[]>([])
</script>

<Attachment.Root bind:files multiple maxFiles={4} class="flex w-full max-w-xl flex-col gap-3">
	<div
		class="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border-[length:var(--border-size)] border-dashed border-border px-6 py-8 text-center"
	>
		<p class="text-sm text-foreground-muted">Drop, paste or choose up to four files</p>
		<Attachment.Trigger variant="outline">Choose files</Attachment.Trigger>
	</div>
	<Attachment.List />
</Attachment.Root>
