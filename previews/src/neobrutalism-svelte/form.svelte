<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/field
-->
<script lang="ts">
	import './styles.css'
	import * as Field from './ui/field/index.ts'
	import { Input } from './ui/input/index.ts'
</script>

<Field.Set>
	<Field.Legend>Account</Field.Legend>
	<Field.Group>
		<Field.Field>
			<Field.Label for="email">Email</Field.Label>
			<Input id="email" type="email" placeholder="you@example.com" />
			<Field.Description>We only use it to send receipts.</Field.Description>
		</Field.Field>
		<Field.Field>
			<Field.Label for="handle">Handle</Field.Label>
			<Input id="handle" value="admin" aria-invalid />
			<Field.Error>That handle is taken.</Field.Error>
		</Field.Field>
	</Field.Group>
</Field.Set>
