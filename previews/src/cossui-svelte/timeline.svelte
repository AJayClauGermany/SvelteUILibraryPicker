<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/timeline
-->
<script lang="ts">
	import './styles.css'
	import {
		Timeline,
		TimelineContent,
		TimelineDate,
		TimelineHeader,
		TimelineIndicator,
		TimelineItem,
		TimelineSeparator,
		TimelineTitle,
	} from './ui/timeline/index.ts'

	const steps = [
		{ step: 1, date: 'May 2', title: 'Order placed', text: 'We received your order.' },
		{ step: 2, date: 'May 3', title: 'Shipped', text: 'The parcel left the warehouse.' },
		{ step: 3, date: 'May 5', title: 'Delivered', text: 'Expected at your door.' },
	]
</script>

<Timeline defaultValue={2}>
	{#each steps as s (s.step)}
		<TimelineItem step={s.step}>
			<TimelineHeader>
				<TimelineSeparator />
				<TimelineDate>{s.date}</TimelineDate>
				<TimelineTitle>{s.title}</TimelineTitle>
				<TimelineIndicator />
			</TimelineHeader>
			<TimelineContent>{s.text}</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>
