<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Docs: https://stdf.dev/components?nav=tabs&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { TabContent, Tabs } from 'stdf'
</script>

<Tabs tab={{ labels: [{ text: 'Overview' }, { text: 'Specs' }, { text: 'Reviews' }] }}>
	{#snippet children({ active })}
		<TabContent show={active === 0}>A short overview of the product.</TabContent>
		<TabContent show={active === 1}>Size, weight and materials.</TabContent>
		<TabContent show={active === 2}>What buyers said about it.</TabContent>
	{/snippet}
</Tabs>
