<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/field
-->
<script lang="ts">
	import './styles.css'
	import * as Field from './ui/field/index.js'
	import { Input } from './ui/input/index.js'
</script>

<Field.Set class="w-full max-w-sm">
	<Field.Legend>Account</Field.Legend>
	<Field.Group>
		<Field.Field>
			<Field.Label for="email">Email</Field.Label>
			<Input id="email" type="email" placeholder="you@example.com" />
			<Field.Description>We only use it to send receipts.</Field.Description>
		</Field.Field>
		<Field.Field data-invalid>
			<Field.Label for="handle">Handle</Field.Label>
			<Input id="handle" value="admin" aria-invalid />
			<Field.Error>That handle is already taken.</Field.Error>
		</Field.Field>
	</Field.Group>
</Field.Set>
