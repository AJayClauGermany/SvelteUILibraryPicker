<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/stepper
-->
<script lang="ts">
	import './styles.css'
	import * as Stepper from './components/ui/stepper/index.js'

	let step = $state(2)
	const steps = ['Account', 'Profile', 'Review']
</script>

<Stepper.Root bind:step>
	<div class="flex flex-col gap-8">
		<Stepper.Nav>
			{#each steps as title, i (title)}
				<Stepper.Item>
					<Stepper.Trigger>
						<Stepper.Indicator>{i + 1}</Stepper.Indicator>
						<Stepper.Title>{title}</Stepper.Title>
					</Stepper.Trigger>
					<Stepper.Separator />
				</Stepper.Item>
			{/each}
		</Stepper.Nav>
		<div class="flex justify-between">
			<Stepper.Previous>Previous</Stepper.Previous>
			<Stepper.Next>Next</Stepper.Next>
		</div>
	</div>
</Stepper.Root>
