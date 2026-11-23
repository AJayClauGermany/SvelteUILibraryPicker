<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Render one <Snackbar /> host, then call snackbar(message, actions, closable, timeout) to show it.
  Docs: https://kendell.dev/m3-svelte/
-->
<script lang="ts">
	import './styles.css'
	import { Button, Snackbar, snackbar } from 'm3-svelte'

	let undone = $state(0)
</script>

<Button onclick={() => snackbar('Message archived', { Undo: () => undone++ }, true)}>
	Show snackbar
</Button>
<p>Undo clicked {undone} times</p>
<Snackbar />
