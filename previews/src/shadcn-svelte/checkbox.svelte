<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from './ui/checkbox/index.js'
	import { Label } from './ui/label/index.js'

	let checked = $state(true)
</script>

<div class="flex items-center gap-3">
	<Checkbox id="terms" bind:checked />
	<Label for="terms">Accept the terms</Label>
</div>
