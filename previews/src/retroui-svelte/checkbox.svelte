<!--
  RetroUI Svelte is copy-paste: ./ui holds the registry components as the shadcn-svelte CLI
  generated them, and ./styles.css loads the default theme from its Getting Started guide.
  Docs: https://retroui-svelte.netlify.app/docs/components/checkbox
-->
<script lang="ts">
	import './styles.css'
	import { Checkbox } from './ui/checkbox/index.js'
	import { Label } from './ui/label/index.js'
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-3">
		<Checkbox id="news" />
		<Label for="news">Subscribe to updates</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="saved" checked />
		<Label for="saved">Remember me</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="off" disabled />
		<Label for="off">Disabled</Label>
	</div>
</div>
