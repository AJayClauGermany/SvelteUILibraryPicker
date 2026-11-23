<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/badge
-->
<script lang="ts">
	import './styles.css'
	import { Badge } from 'kampsy-ui'
</script>

<Badge>Default</Badge>
<Badge variant="blue">New</Badge>
<Badge variant="green" contrast="low">Active</Badge>
<Badge variant="red" size="sm">Error</Badge>
<Badge variant="pill">Label</Badge>
