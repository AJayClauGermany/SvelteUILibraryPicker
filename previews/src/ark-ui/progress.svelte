<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/progress-linear
-->
<script lang="ts">
	import { Progress } from '@ark-ui/svelte/progress'
</script>

<Progress.Root defaultValue={40}>
	<Progress.Label>Uploading</Progress.Label>
	<Progress.ValueText />
	<Progress.Track>
		<Progress.Range />
	</Progress.Track>
</Progress.Root>
