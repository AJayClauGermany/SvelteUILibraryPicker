<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=steps&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Steps } from 'stdf'
</script>

<Steps
	current={2}
	steps={[
		{ step: { title: 'Cart' } },
		{ step: { title: 'Address' } },
		{ step: { title: 'Payment' } },
		{ step: { title: 'Done' } },
	]}
/>
