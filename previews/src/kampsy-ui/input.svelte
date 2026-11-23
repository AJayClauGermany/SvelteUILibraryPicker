<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/input
-->
<script lang="ts">
	import './styles.css'
	import { Input } from 'kampsy-ui'

	let name = $state('')
	let site = $state('')
</script>

<Input bind:value={name} label="Project name" placeholder="my-project" />
<Input bind:value={site} prefix="https://" suffix=".app" placeholder="example" />
<Input placeholder="Disabled" disabled />
<Input value="taken" label="Username" error="This name is already in use." />
