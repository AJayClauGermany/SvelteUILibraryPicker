<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#switch-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let wifi = $state(true)
</script>

<Form.Check isSwitch>
	<Form.SwitchInput id="wifi" bind:checked={wifi} />
	<Form.SwitchLabel for="wifi">Wi-Fi</Form.SwitchLabel>
</Form.Check>
<Form.Check isSwitch>
	<Form.SwitchInput id="bluetooth" />
	<Form.SwitchLabel for="bluetooth">Bluetooth</Form.SwitchLabel>
</Form.Check>
<Form.Check isSwitch>
	<Form.SwitchInput id="airplane" disabled />
	<Form.SwitchLabel for="airplane">Airplane mode (disabled)</Form.SwitchLabel>
</Form.Check>
