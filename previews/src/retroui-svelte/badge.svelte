<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/badge
-->
<script lang="ts">
	import './styles.css'
	import { Badge } from './ui/badge/index.js'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Badge>Default</Badge>
	<Badge variant="primary">Primary</Badge>
	<Badge variant="outline">Outline</Badge>
	<Badge variant="solid">Solid</Badge>
	<Badge size="sm">Small</Badge>
	<Badge size="lg">Large</Badge>
</div>
