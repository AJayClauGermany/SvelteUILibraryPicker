<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/spinner
-->
<script lang="ts">
	import './styles.css'
	import { Spinner } from '@sivir-ui/svelte/components/spinner'
</script>

<div class="flex items-center gap-6 text-sm text-foreground-muted">
	<span class="flex items-center gap-2">
		<Spinner aria-hidden="true" />
		<span>Loading</span>
	</span>
	<span class="flex items-center gap-2">
		<Spinner size={24} curved aria-hidden="true" />
		<span>Curved</span>
	</span>
	<span class="flex items-center gap-2">
		<Spinner ready aria-hidden="true" />
		<span>Done</span>
	</span>
</div>
