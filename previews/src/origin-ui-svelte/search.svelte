<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. The base Input has its own
  styles for type="search"; there is no separate search component.
  Docs: https://originui-svelte.pages.dev/inputs/input-25
-->
<script lang="ts">
	import './styles.css'
	import Input from './ui/input.svelte'
	import Label from './ui/label.svelte'
</script>

<div class="flex flex-col gap-2">
	<Label for="search">Search</Label>
	<Input id="search" type="search" placeholder="Search the docs..." />
</div>
