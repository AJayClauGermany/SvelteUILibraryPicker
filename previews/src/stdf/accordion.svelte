<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=accordion&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Accordion } from 'stdf'
</script>

<Accordion
	activeIndex={0}
	items={[
		{ title: 'Shipping', content: 'Orders leave the warehouse within two days.' },
		{ title: 'Returns', content: 'Send items back within 30 days.' },
		{ title: 'Warranty', content: 'Two years on all products.' },
	]}
/>
