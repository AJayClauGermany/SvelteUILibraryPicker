<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  TextField is the filled variant; TextFieldOutlined is the outlined one.
  Docs: https://kendell.dev/m3-svelte/#text-field-demo
-->
<script lang="ts">
	import './styles.css'
	import { TextField, TextFieldOutlined } from 'm3-svelte'

	let name = $state('')
	let email = $state('')
</script>

<TextField label="Name" bind:value={name} />
<TextFieldOutlined label="Email" type="email" bind:value={email} />
<TextField label="Disabled" disabled />
