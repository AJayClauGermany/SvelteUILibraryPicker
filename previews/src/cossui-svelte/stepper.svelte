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

	const steps = ['Cart', 'Shipping', 'Payment']
	let step = $state(2)
</script>

<Stepper bind:step>
	{#each steps as title, i (title)}
		<StepperItem step={i + 1} class="flex-1">
			<StepperTrigger>
				<StepperIndicator />
				<StepperTitle>{title}</StepperTitle>
			</StepperTrigger>
			{#if i < steps.length - 1}
				<StepperSeparator />
			{/if}
		</StepperItem>
	{/each}
</Stepper>
<Stepper step={2} orientation="vertical">
	<StepperItem>
		<StepperTrigger>
			<StepperIndicator />
			<div class="flex flex-col items-start">
				<StepperTitle>Sign up</StepperTitle>
				<StepperDescription>Pick a username</StepperDescription>
			</div>
		</StepperTrigger>
		<StepperSeparator />
	</StepperItem>
	<StepperItem loading>
		<StepperTrigger>
			<StepperIndicator />
			<div class="flex flex-col items-start">
				<StepperTitle>Verify email</StepperTitle>
				<StepperDescription>Waiting for the link</StepperDescription>
			</div>
		</StepperTrigger>
	</StepperItem>
</Stepper>
