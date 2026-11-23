<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/accordion
-->
<script lang="ts">
	import './styles.css'
	import * as Accordion from '@sivir-ui/svelte/components/accordion'

	let open = $state('plans')
</script>

<div class="w-full max-w-md">
	<Accordion.Root type="single" bind:value={open}>
		<Accordion.Item value="plans">
			<Accordion.Trigger>Which plans are there?</Accordion.Trigger>
			<Accordion.Content>A free tier for hobby use and a paid tier for teams.</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="cancel">
			<Accordion.Trigger>Can I cancel any time?</Accordion.Trigger>
			<Accordion.Content>Yes, your plan stays active until the end of the period.</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="data">
			<Accordion.Trigger>Where is my data stored?</Accordion.Trigger>
			<Accordion.Content>In the region you pick when you create a project.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
