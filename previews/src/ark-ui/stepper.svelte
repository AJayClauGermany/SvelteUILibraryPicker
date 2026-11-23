<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/steps
-->
<script lang="ts">
	import { Steps } from '@ark-ui/svelte/steps'

	const steps = [
		{ title: 'Account', body: 'Pick a username and password.' },
		{ title: 'Profile', body: 'Tell us a little about yourself.' },
		{ title: 'Review', body: 'Check your details before finishing.' },
	]
</script>

<Steps.Root count={steps.length}>
	<Steps.List>
		{#each steps as step, index (step.title)}
			<Steps.Item {index}>
				<Steps.Trigger>
					<Steps.Indicator>{index + 1}</Steps.Indicator>
					{step.title}
				</Steps.Trigger>
				<Steps.Separator />
			</Steps.Item>
		{/each}
	</Steps.List>
	{#each steps as step, index (step.title)}
		<Steps.Content {index}>{step.body}</Steps.Content>
	{/each}
	<Steps.CompletedContent>All steps are done.</Steps.CompletedContent>
	<Steps.PrevTrigger>Back</Steps.PrevTrigger>
	<Steps.NextTrigger>Next</Steps.NextTrigger>
</Steps.Root>
