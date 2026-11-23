<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/toggle
-->
<script lang="ts">
	import './styles.css'
	import BoldIcon from '@lucide/svelte/icons/bold'
	import { Toggle } from './ui/toggle/index.js'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Toggle aria-label="Toggle bold">
		<BoldIcon />
		Bold
	</Toggle>
	<Toggle variant="outline" pressed>Pressed</Toggle>
	<Toggle variant="outline" disabled>Disabled</Toggle>
</div>
