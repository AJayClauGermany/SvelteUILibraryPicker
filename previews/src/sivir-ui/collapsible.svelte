<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/collapsible
-->
<script lang="ts">
	import './styles.css'
	import * as Collapsible from '@sivir-ui/svelte/components/collapsible'

	let open = $state(true)
</script>

<div class="w-full max-w-md">
	<Collapsible.Root bind:open>
		<Collapsible.Trigger>{open ? 'Hide details' : 'Show details'}</Collapsible.Trigger>
		<Collapsible.Content>
			<p>The build ran in 42 seconds and produced 3 files.</p>
		</Collapsible.Content>
	</Collapsible.Root>
</div>
