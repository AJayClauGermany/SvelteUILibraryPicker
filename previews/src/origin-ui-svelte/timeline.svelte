<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/timelines
-->
<script lang="ts">
	import './styles.css'
	import * as Timeline from './ui/timeline/index.js'

	const steps = [
		{ step: 1, date: 'May 2', title: 'Order placed', text: 'We received your order.' },
		{ step: 2, date: 'May 3', title: 'Shipped', text: 'The parcel left the warehouse.' },
		{ step: 3, date: 'May 5', title: 'Delivered', text: 'Expected at your door.' },
	]
</script>

<Timeline.Timeline defaultValue={2}>
	{#each steps as s (s.step)}
		<Timeline.Item step={s.step}>
			<Timeline.Header>
				<Timeline.Separator />
				<Timeline.Date>{s.date}</Timeline.Date>
				<Timeline.Title>{s.title}</Timeline.Title>
				<Timeline.Indicator />
			</Timeline.Header>
			<Timeline.Content>{s.text}</Timeline.Content>
		</Timeline.Item>
	{/each}
</Timeline.Timeline>
