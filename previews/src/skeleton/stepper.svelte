<!--
  Skeleton's Svelte components are styled by its Tailwind package; ./styles.css loads the
  cerberus theme, and the script sets the data-theme attribute the install guide puts on <html>.
  As in its docs, the step panels and buttons use Skeleton's own `card` and `btn` classes,
  with a flex row for the buttons.
  Docs: https://www.skeleton.dev/docs/svelte/framework-components/steps
-->
<script lang="ts">
	import './styles.css'
	import { Steps } from '@skeletonlabs/skeleton-svelte'

	document.documentElement.dataset.theme = 'cerberus'

	const steps = ['Account', 'Profile', 'Review']
</script>

<Steps count={steps.length}>
	<Steps.List>
		{#each steps as title, index (title)}
			<Steps.Item {index}>
				<Steps.Trigger>
					<Steps.Indicator>{index + 1}</Steps.Indicator>
					{title}
				</Steps.Trigger>
				{#if index < steps.length - 1}
					<Steps.Separator />
				{/if}
			</Steps.Item>
		{/each}
	</Steps.List>
	{#each steps as title, index (title)}
		<Steps.Content {index} class="card preset-tonal p-4">{title} step content.</Steps.Content>
	{/each}
	<Steps.Content index={steps.length} class="card preset-tonal p-4">All steps complete.</Steps.Content>
	<div class="flex justify-between gap-2">
		<Steps.PrevTrigger class="btn preset-tonal">Back</Steps.PrevTrigger>
		<Steps.NextTrigger class="btn preset-filled">Next</Steps.NextTrigger>
	</div>
</Steps>
