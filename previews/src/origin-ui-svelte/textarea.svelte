<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/textareas
-->
<script lang="ts">
	import './styles.css'
	import Textarea from './ui/textarea.svelte'
	import Label from './ui/label.svelte'
</script>

<div class="flex flex-col gap-2">
	<Label for="message">Message</Label>
	<Textarea id="message" placeholder="Write a short note..." />
	<Textarea placeholder="Disabled" disabled />
</div>
