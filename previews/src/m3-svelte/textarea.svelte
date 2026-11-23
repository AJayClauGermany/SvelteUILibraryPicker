<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  TextFieldMultiline grows with its content.
  Docs: https://kendell.dev/m3-svelte/#text-field-demo
-->
<script lang="ts">
	import './styles.css'
	import { TextFieldMultiline } from 'm3-svelte'

	let message = $state('')
</script>

<TextFieldMultiline label="Message" bind:value={message} />
<p>{message.length} characters</p>
