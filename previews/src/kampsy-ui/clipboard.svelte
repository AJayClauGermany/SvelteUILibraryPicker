<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/copy-button
-->
<script lang="ts">
	import './styles.css'
	import { CopyButton } from 'kampsy-ui'
</script>

<CopyButton textToCopy="pnpm add kampsy-ui" label="Copy install command" />
