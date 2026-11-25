<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/switches
-->
<script lang="ts">
	import './styles.css'
	import Switch from './ui/switch.svelte'
	import Label from './ui/label.svelte'
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center gap-2">
		<Switch id="wifi" checked />
		<Label for="wifi">Wi-Fi</Label>
	</div>
	<div class="flex items-center gap-2">
		<Switch id="bluetooth" />
		<Label for="bluetooth">Bluetooth</Label>
	</div>
	<div class="flex items-center gap-2">
		<Switch id="airplane" disabled />
		<Label for="airplane">Airplane mode</Label>
	</div>
</div>
