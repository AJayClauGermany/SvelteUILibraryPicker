<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/tooltip
-->
<script lang="ts">
	import './styles.css'
	import { Button, Tooltip } from 'kampsy-ui'
</script>

<Tooltip text="Copy the link" position="bottom">
	<Button>Share</Button>
</Tooltip>
<Tooltip text="Opens in a new tab" position="bottom">
	<span>Hover me</span>
</Tooltip>
