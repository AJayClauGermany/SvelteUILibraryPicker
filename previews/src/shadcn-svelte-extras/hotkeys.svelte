<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/actions/shortcut
-->
<script lang="ts">
	import './styles.css'
	import { shortcut } from './actions/shortcut.svelte.js'

	let count = $state(0)
</script>

<svelte:window use:shortcut={{ key: 'n', shift: true, callback: () => count++ }} />

<p>Press Shift+N to add a note.</p>
<p>Notes added: {count}</p>
