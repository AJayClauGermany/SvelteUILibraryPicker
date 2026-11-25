<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=checkbox&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from 'stdf'

	let checkeds = $state(['email'])
</script>

<Checkbox
	bind:checkeds
	data={[
		{ name: 'email', label: 'Email updates' },
		{ name: 'sms', label: 'Text messages' },
		{ name: 'push', label: 'Push notifications' },
	]}
/>
