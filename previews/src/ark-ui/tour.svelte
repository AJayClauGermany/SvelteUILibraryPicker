<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  The optional Backdrop part is left out: unstyled, it would cover the step content.
  Docs: https://ark-ui.com/svelte/docs/components/tour
-->
<script lang="ts">
	import { Portal } from '@ark-ui/svelte/portal'
	import { Tour, useTour, type TourStepDetails } from '@ark-ui/svelte/tour'

	const steps: TourStepDetails[] = [
		{
			id: 'intro',
			type: 'dialog',
			title: 'Quick tour',
			description: 'Two stops, then you are done.',
			actions: [{ label: 'Next', action: 'next' }],
		},
		{
			id: 'new',
			type: 'tooltip',
			title: 'New file',
			description: 'Start a blank document here.',
			target: () => document.querySelector<HTMLElement>('#tour-new'),
			actions: [
				{ label: 'Back', action: 'prev' },
				{ label: 'Next', action: 'next' },
			],
		},
		{
			id: 'share',
			type: 'tooltip',
			title: 'Share',
			description: 'Invite others to edit with you.',
			target: () => document.querySelector<HTMLElement>('#tour-share'),
			actions: [
				{ label: 'Back', action: 'prev' },
				{ label: 'Done', action: 'dismiss' },
			],
		},
	]

	const tour = useTour({ steps })
</script>

<button type="button" onclick={() => tour().start()}>Start tour</button>
<div>
	<button id="tour-new" type="button">New</button>
	<button id="tour-share" type="button">Share</button>
</div>

<Tour.Root {tour}>
	<Portal>
		<Tour.Spotlight />
		<Tour.Positioner>
			<Tour.Content>
				<Tour.Arrow>
					<Tour.ArrowTip />
				</Tour.Arrow>
				<Tour.ProgressText />
				<Tour.Title />
				<Tour.Description />
				<Tour.CloseTrigger>Close</Tour.CloseTrigger>
				<Tour.Control>
					<Tour.Actions>
						{#snippet children(actions)}
							{#each actions() as action (action.label)}
								<Tour.ActionTrigger {action} />
							{/each}
						{/snippet}
					</Tour.Actions>
				</Tour.Control>
			</Tour.Content>
		</Tour.Positioner>
	</Portal>
</Tour.Root>
