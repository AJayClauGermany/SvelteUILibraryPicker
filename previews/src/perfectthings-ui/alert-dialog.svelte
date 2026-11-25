<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#MessageBox
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { Button, MessageBox, showMessage } from '@perfectthings/ui'

	const ask = () => showMessage({
		title: 'Discard draft?',
		message: 'Your unsaved changes will be lost.',
		type: 'warning',
		buttons: [
			{ label: 'Discard', value: 'discard', type: 'danger' },
			{ label: 'Keep editing', value: 'keep' },
		],
	})

	onMount(ask)
</script>

<Button onclick={ask}>Discard draft</Button>

<MessageBox />
