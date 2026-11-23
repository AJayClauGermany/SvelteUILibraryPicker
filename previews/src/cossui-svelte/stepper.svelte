<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/stepper
-->
<script lang="ts">
	import './styles.css'
	import {
		Stepper,
		StepperDescription,
		StepperIndicator,
		StepperItem,
		StepperSeparator,
		StepperTitle,
		StepperTrigger,
	} from './ui/stepper/index.ts'

	const steps = [
		{ title: 'Cart', description: 'Check your items' },
		{ title: 'Shipping', description: 'Where it goes' },
		{ title: 'Payment', description: 'Card or invoice' },
	]
	let step = $state(2)
</script>

<Stepper bind:step>
	{#each steps as { title, description }, i (title)}
		<StepperItem step={i + 1} class="flex-1">
			<StepperTrigger>
				<StepperIndicator />
				<div class="flex flex-col items-start">
					<StepperTitle>{title}</StepperTitle>
					<StepperDescription>{description}</StepperDescription>
				</div>
			</StepperTrigger>
			{#if i < steps.length - 1}
				<StepperSeparator />
			{/if}
		</StepperItem>
	{/each}
</Stepper>
