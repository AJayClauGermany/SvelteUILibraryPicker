<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The textarea is Input with type="textarea".
  Docs: https://stdf.dev/components?nav=input&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Input } from 'stdf'

	let value = $state('')
</script>

<Input type="textarea" title="Feedback" placeholder="Tell us what you think" rows={4} bind:value />
