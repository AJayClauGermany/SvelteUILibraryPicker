<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/timeline/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { Timeline, TimelineItem } from 'svelte-5-ui-lib'

	const events = [
		{ title: 'Project started', date: '2025-01', text: 'The first planning meeting took place.' },
		{ title: 'Beta released', date: '2025-06', text: 'Early users got access to the beta.' },
		{ title: 'Version 1.0', date: '2025-11', text: 'The first stable version shipped.' },
	]
</script>

<Timeline>
	{#each events as event (event.title)}
		<TimelineItem title={event.title} date={event.date}>
			<p>{event.text}</p>
		</TimelineItem>
	{/each}
</Timeline>
