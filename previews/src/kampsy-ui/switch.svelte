<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/toggle
-->
<script lang="ts">
	import './styles.css'
	import { Toggle } from 'kampsy-ui'

	let notify = $state(true)
	let sync = $state(false)
</script>

<Toggle aria-label="Notifications" bind:checked={notify}>Notifications</Toggle>
<Toggle aria-label="Auto sync" bind:checked={sync} size="large">Auto sync</Toggle>
<Toggle aria-label="Disabled" disabled>Disabled</Toggle>
