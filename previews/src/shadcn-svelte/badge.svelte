<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/badge
-->
<script lang="ts">
	import './styles.css'
	import { Badge } from './ui/badge/index.js'
</script>

<Badge>New</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="outline">v1.2</Badge>
