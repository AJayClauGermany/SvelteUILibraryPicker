<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/switch
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from '@sivir-ui/svelte/components/switch'

	let updates = $state(true)
	let digest = $state(false)
</script>

<div class="w-full max-w-sm space-y-4">
	<Switch bind:checked={updates} label="Product updates" description="News about features and changes." />
	<Switch bind:checked={digest} label="Weekly digest" />
	<Switch label="Beta access" disabled />
</div>
