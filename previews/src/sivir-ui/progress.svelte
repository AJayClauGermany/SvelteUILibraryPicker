<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/progress
-->
<script lang="ts">
	import './styles.css'
	import { Progress } from '@sivir-ui/svelte/components/progress'
</script>

<div class="flex w-full max-w-md flex-col gap-3">
	<Progress value={30} />
	<Progress value={75} />
	<Progress indeterminate />
</div>
