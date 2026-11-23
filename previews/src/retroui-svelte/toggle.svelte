<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/toggle
-->
<script lang="ts">
	import './styles.css'
	import BoldIcon from '@lucide/svelte/icons/bold'
	import ItalicIcon from '@lucide/svelte/icons/italic'
	import { Toggle } from './ui/toggle/index.js'
</script>

<Toggle aria-label="Toggle bold" pressed>
	<BoldIcon />
</Toggle>
<Toggle aria-label="Toggle italic">
	<ItalicIcon />
</Toggle>
<Toggle variant="outlined">Outlined</Toggle>
<Toggle variant="solid">Solid</Toggle>
<Toggle disabled>Disabled</Toggle>
