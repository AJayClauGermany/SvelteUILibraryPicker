<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from '@sivir-ui/svelte/components/checkbox'

	let terms = $state(true)
	let digest = $state(false)
</script>

<div class="w-full max-w-md space-y-4">
	<Checkbox bind:checked={terms} label="I agree to the terms" />
	<Checkbox bind:checked={digest} label="Weekly digest" description="A short summary every Monday." />
	<Checkbox variant="primary" checked label="Primary variant" />
	<Checkbox disabled label="Not available on your plan" />
</div>
