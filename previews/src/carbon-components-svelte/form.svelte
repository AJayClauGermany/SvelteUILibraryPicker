<!--
  Carbon ships its own CSS; all.css bundles its themes and the `theme` attribute on <html>
  picks one: "white" (its default) or "g100" in dark mode (set by previews/theme.svelte.ts).
  No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Form
-->
<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Button, Checkbox, Form, FormGroup, TextInput } from 'carbon-components-svelte'
</script>

<Form on:submit={(e) => e.preventDefault()}>
	<FormGroup legendText="Account">
		<TextInput labelText="Email" placeholder="you@example.com" />
	</FormGroup>
	<FormGroup legendText="Preferences">
		<Checkbox labelText="Send me product updates" />
	</FormGroup>
	<Button type="submit">Save</Button>
</Form>
