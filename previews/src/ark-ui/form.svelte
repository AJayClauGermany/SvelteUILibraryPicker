<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/field
-->
<script lang="ts">
	import { Field } from '@ark-ui/svelte/field'
	import { Fieldset } from '@ark-ui/svelte/fieldset'

	let email = $state('not-an-email')
	const invalid = $derived(!email.includes('@'))
</script>

<Fieldset.Root>
	<Fieldset.Legend>Contact details</Fieldset.Legend>
	<Field.Root required>
		<Field.Label>Name <Field.RequiredIndicator /></Field.Label>
		<Field.Input placeholder="Jane Doe" />
		<Field.HelperText>As it should appear on invoices.</Field.HelperText>
	</Field.Root>
	<Field.Root {invalid}>
		<Field.Label>Email</Field.Label>
		<Field.Input type="email" bind:value={email} />
		<Field.ErrorText>Enter a valid email address.</Field.ErrorText>
	</Field.Root>
	<Fieldset.HelperText>We only use these to reply to you.</Fieldset.HelperText>
</Fieldset.Root>
