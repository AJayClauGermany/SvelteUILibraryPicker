<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/meter
-->
<script lang="ts">
	import './styles.css'
	import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from './ui/meter/index.ts'
</script>

<Meter value={62}>
	<div class="flex items-center justify-between gap-2">
		<MeterLabel>Disk space</MeterLabel>
		<MeterValue />
	</div>
	<MeterTrack>
		<MeterIndicator />
	</MeterTrack>
</Meter>
