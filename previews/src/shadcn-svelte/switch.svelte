<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/switch
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from './ui/switch/index.js'
	import { Label } from './ui/label/index.js'

	let notifications = $state(true)
</script>

<div class="flex items-center gap-2">
	<Switch id="notifications" bind:checked={notifications} />
	<Label for="notifications">Email notifications</Label>
</div>
