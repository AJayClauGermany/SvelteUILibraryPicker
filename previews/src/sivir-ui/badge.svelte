<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/badge
-->
<script lang="ts">
	import './styles.css'
	import { Badge } from '@sivir-ui/svelte/components/badge'
</script>

<div class="flex items-center justify-center gap-4">
	<Badge>Draft</Badge>
	<Badge variant="primary">New</Badge>
	<Badge variant="outline">Queued</Badge>
	<Badge variant="success" dot>Online</Badge>
	<Badge variant="warning">Expiring</Badge>
	<Badge variant="error">Failed</Badge>
</div>
