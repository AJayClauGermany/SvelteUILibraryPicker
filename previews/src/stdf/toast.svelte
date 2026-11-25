<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  The toast shows on load and closes after its default two seconds; the button shows it again.
  Docs: https://stdf.dev/components?nav=toast&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Toast } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Save</Button>
<Toast bind:visible message="Changes saved" type="success" />
