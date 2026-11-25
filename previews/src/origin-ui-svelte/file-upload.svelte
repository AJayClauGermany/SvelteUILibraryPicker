<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. The base Input has its own
  styles for type="file"; there is no upload or drop zone component.
  Docs: https://originui-svelte.pages.dev/inputs/input-30
-->
<script lang="ts">
	import './styles.css'
	import Input from './ui/input.svelte'
	import Label from './ui/label.svelte'
</script>

<div class="flex flex-col gap-2">
	<Label for="attachment">Attachment</Label>
	<Input id="attachment" type="file" />
</div>
