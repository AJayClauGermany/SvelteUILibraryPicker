<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/select
-->
<script lang="ts">
	import './styles.css'
	import { Select } from 'kampsy-ui'

	let region = $state('')
</script>

<Select.Root bind:value={region}>
	<Select.Trigger class="w-[200px]">
		<Select.Value placeholder="Choose a region" />
	</Select.Trigger>
	<Select.Content>
		<Select.Item value="europe">Europe</Select.Item>
		<Select.Item value="asia">Asia</Select.Item>
		<Select.Item value="americas">Americas</Select.Item>
	</Select.Content>
</Select.Root>
<p>Region: {region || 'none'}</p>
