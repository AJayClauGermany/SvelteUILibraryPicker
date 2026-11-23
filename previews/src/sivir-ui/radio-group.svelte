<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/radio-group
-->
<script lang="ts">
	import './styles.css'
	import * as RadioGroup from '@sivir-ui/svelte/components/radio-group'

	let value = $state<string | undefined>('weekly')
</script>

<RadioGroup.Root bind:value name="digest">
	<RadioGroup.Item value="daily" label="Daily" description="A summary every morning." />
	<RadioGroup.Item value="weekly" label="Weekly" description="One email on Mondays." />
	<RadioGroup.Item value="never" label="Never" />
	<RadioGroup.Item value="hourly" label="Hourly" disabled />
</RadioGroup.Root>
