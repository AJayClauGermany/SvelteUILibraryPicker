<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/form/form-controls#radio-input
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Form } from '@winkintel/bootstrap-svelte'

	let plan = $state('monthly')
</script>

<Form.Check>
	<Form.RadioInput id="monthly" name="plan" value="monthly" bind:group={plan} />
	<Form.RadioLabel for="monthly">Monthly</Form.RadioLabel>
</Form.Check>
<Form.Check>
	<Form.RadioInput id="yearly" name="plan" value="yearly" bind:group={plan} />
	<Form.RadioLabel for="yearly">Yearly</Form.RadioLabel>
</Form.Check>
<Form.Check>
	<Form.RadioInput id="lifetime" name="plan" value="lifetime" bind:group={plan} disabled />
	<Form.RadioLabel for="lifetime">Lifetime (disabled)</Form.RadioLabel>
</Form.Check>
