<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The form is built from a configuration of item types.
  Docs: https://stdf.dev/components?nav=form&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Form } from 'stdf'
</script>

<Form
	submitText="Sign up"
	form={[
		{ type: 'input', name: 'name', label: 'Name', required: true, input: { placeholder: 'Your name' } },
		{ type: 'switch', name: 'news', label: 'Newsletter', switch: {} },
	]}
/>
