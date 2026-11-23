<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from '@sivir-ui/svelte/components/input'
</script>

<div class="w-full max-w-xs space-y-4">
	<Input label="Project name" placeholder="my-app" />
	<Input variant="secondary" placeholder="Search" />
	<Input placeholder="Disabled" disabled />
</div>
