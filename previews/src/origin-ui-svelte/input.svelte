<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/inputs
-->
<script lang="ts">
	import './styles.css'
	import Input from './ui/input.svelte'
	import Label from './ui/label.svelte'
</script>

<div class="flex flex-col gap-2">
	<Label for="email">Email</Label>
	<Input id="email" type="email" placeholder="you@example.com" />
	<Input placeholder="Disabled" disabled />
	<Input value="not-an-email" aria-invalid="true" />
</div>
