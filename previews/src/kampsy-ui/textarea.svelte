<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/textarea
-->
<script lang="ts">
	import './styles.css'
	import { Textarea } from 'kampsy-ui'

	let message = $state('')
</script>

<Textarea bind:value={message} label="Message" placeholder="Write a few words..." />
<Textarea error="Please enter a message." />
