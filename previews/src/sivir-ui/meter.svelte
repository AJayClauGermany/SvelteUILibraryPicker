<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/gauge
-->
<script lang="ts">
	import './styles.css'
	import * as Gauge from '@sivir-ui/svelte/components/gauge'
</script>

<div class="flex items-center gap-6">
	<Gauge.Root value={24} size="sm" label="Disk used" />
	<Gauge.Root value={58} label="Memory used" />
	<Gauge.Root value={87} max={100} size="lg" tone="warning" label="Storage quota" />
</div>
