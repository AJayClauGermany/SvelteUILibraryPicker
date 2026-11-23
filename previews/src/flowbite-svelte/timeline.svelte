<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/components/timeline
-->
<script lang="ts">
	import './styles.css'
	import { Timeline, TimelineItem } from 'flowbite-svelte'

	const events = [
		{ title: 'Project started', date: '2025-01-15', text: 'The first planning meeting took place.' },
		{ title: 'Beta released', date: '2025-06-10', text: 'Early users got access to the beta.' },
		{ title: 'Version 1.0', date: '2025-11-03', text: 'The first stable version shipped.' },
	]
</script>

<Timeline>
	{#each events as event (event.title)}
		<TimelineItem title={event.title} date={event.date}>
			<p>{event.text}</p>
		</TimelineItem>
	{/each}
</Timeline>
