<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/radios
-->
<script lang="ts">
	import './styles.css'
	import { RadioGroup, RadioGroupItem } from './ui/radio-group/index.js'
	import Label from './ui/label.svelte'
</script>

<RadioGroup value="standard">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="standard" id="standard" />
		<Label for="standard">Standard delivery</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="express" id="express" />
		<Label for="express">Express delivery</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="pickup" id="pickup" disabled />
		<Label for="pickup">Store pickup</Label>
	</div>
</RadioGroup>
