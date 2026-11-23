<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from 'kampsy-ui'

	let terms = $state(true)
	let updates = $state(false)
</script>

<Checkbox bind:checked={terms}>Accept the terms</Checkbox>
<Checkbox bind:checked={updates}>Send me updates</Checkbox>
<Checkbox indeterminate>Some selected</Checkbox>
<Checkbox disabled>Disabled</Checkbox>
