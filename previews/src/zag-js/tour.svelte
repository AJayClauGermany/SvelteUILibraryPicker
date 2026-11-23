<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/tour
-->
<script lang="ts">
	import * as tour from '@zag-js/tour'
	import { normalizeProps, portal, useMachine } from '@zag-js/svelte'

	const steps: tour.StepDetails[] = [
		{
			id: 'search',
			type: 'tooltip',
			target: () => document.querySelector('#tour-search'),
			title: 'Search',
			description: 'Find anything from here.',
			actions: [{ label: 'Next', action: 'next' }],
		},
		{
			id: 'save',
			type: 'tooltip',
			target: () => document.querySelector('#tour-save'),
			title: 'Save',
			description: 'Keep your changes.',
			actions: [
				{ label: 'Back', action: 'prev' },
				{ label: 'Done', action: 'dismiss' },
			],
		},
	]

	const id = $props.id()
	const service = useMachine(tour.machine, { id, steps })
	const api = $derived(tour.connect(service, normalizeProps))
</script>

<button onclick={() => api.start()}>Start tour</button>
<input id="tour-search" placeholder="Search" />
<button id="tour-save">Save</button>

{#if api.step && api.open}
	<div use:portal>
		{#if api.step.backdrop}
			<div {...api.getBackdropProps()}></div>
		{/if}
		<div {...api.getSpotlightProps()}></div>
		<div {...api.getPositionerProps()}>
			<div {...api.getContentProps()}>
				<p {...api.getTitleProps()}>{api.step.title}</p>
				<div {...api.getDescriptionProps()}>{api.step.description}</div>
				<div {...api.getProgressTextProps()}>{api.getProgressText()}</div>
				{#each api.step.actions ?? [] as action (action.label)}
					<button {...api.getActionTriggerProps({ action })}>{action.label}</button>
				{/each}
				<button {...api.getCloseTriggerProps()}>Close</button>
			</div>
		</div>
	</div>
{/if}
