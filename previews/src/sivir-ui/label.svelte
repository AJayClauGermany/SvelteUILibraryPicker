<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/label
-->
<script lang="ts">
	import './styles.css'
	import { Input } from '@sivir-ui/svelte/components/input'
	import { Label } from '@sivir-ui/svelte/components/label'
</script>

<div class="flex flex-col gap-1.5">
	<Label for="username">Username</Label>
	<Input id="username" placeholder="jane" />
</div>
