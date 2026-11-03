<!--
  Bits UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://bits-ui.com/docs/components/switch
-->
<script lang="ts">
	import { Label, Switch } from 'bits-ui'

	let checked = $state(false)
</script>

<Switch.Root id="notifications" bind:checked>
	<Switch.Thumb />
</Switch.Root>
<Label.Root for="notifications">Notifications ({checked ? 'on' : 'off'})</Label.Root>
