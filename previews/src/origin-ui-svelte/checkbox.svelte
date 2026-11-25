<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/checkboxes
-->
<script lang="ts">
	import './styles.css'
	import Checkbox from './ui/checkbox.svelte'
	import Label from './ui/label.svelte'
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center gap-2">
		<Checkbox id="terms" checked />
		<Label for="terms">Accept the terms</Label>
	</div>
	<div class="flex items-center gap-2">
		<Checkbox id="news" />
		<Label for="news">Send me news</Label>
	</div>
	<div class="flex items-center gap-2">
		<Checkbox id="locked" disabled />
		<Label for="locked">Locked</Label>
	</div>
</div>
