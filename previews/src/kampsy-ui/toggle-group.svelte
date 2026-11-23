<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/switch
-->
<script lang="ts">
	import './styles.css'
	import { Switch } from 'kampsy-ui'

	let view = $state('')
</script>

<Switch.Root bind:value={view} name="view">
	<Switch.Control defaultChecked label="Preview" value="preview" />
	<Switch.Control label="Code" value="code" />
	<Switch.Control label="Logs" value="logs" />
</Switch.Root>
