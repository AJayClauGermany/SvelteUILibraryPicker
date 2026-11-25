<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/buttons/button-24
-->
<script lang="ts">
	import './styles.css'
	import Toggle from './ui/toggle.svelte'
	import BoldIcon from '@lucide/svelte/icons/bold'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Toggle aria-label="Bold"><BoldIcon /></Toggle>
	<Toggle variant="outline" pressed>Pinned</Toggle>
</div>
