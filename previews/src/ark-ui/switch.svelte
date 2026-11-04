<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/switch
-->
<script lang="ts">
	import { Switch } from '@ark-ui/svelte/switch'

	let checked = $state(false)
</script>

<Switch.Root bind:checked>
	<Switch.Control>
		<Switch.Thumb />
	</Switch.Control>
	<Switch.Label>Notifications ({checked ? 'on' : 'off'})</Switch.Label>
	<Switch.HiddenInput />
</Switch.Root>
