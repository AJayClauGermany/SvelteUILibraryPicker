<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/choicebox
-->
<script lang="ts">
	import './styles.css'
	import { Choicebox } from 'kampsy-ui'

	let plan: string | string[] = $state('')
</script>

<Choicebox.Group label="Pick a plan" type="radio" bind:value={plan}>
	<Choicebox.Item defaultChecked title="Hobby" description="For personal projects" value="hobby" />
	<Choicebox.Item title="Team" description="Shared with your coworkers" value="team" />
</Choicebox.Group>
<p>Selected: {plan}</p>
