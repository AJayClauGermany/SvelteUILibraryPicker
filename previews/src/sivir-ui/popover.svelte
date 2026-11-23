<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/popover
-->
<script lang="ts">
	import './styles.css'
	import * as Popover from '@sivir-ui/svelte/components/popover'
</script>

<Popover.Root>
	<Popover.Trigger variant="outline" size="md">Details</Popover.Trigger>
	<Popover.Content class="w-56">
		<div class="p-3">
			<p class="m-0 text-sm text-foreground-muted">Last edited two hours ago by Sam.</p>
		</div>
	</Popover.Content>
</Popover.Root>
