<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/badges
-->
<script lang="ts">
	import './styles.css'
	import Badge from './ui/badge.svelte'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Badge>New</Badge>
	<Badge variant="secondary">Draft</Badge>
	<Badge variant="outline">Archived</Badge>
	<Badge variant="destructive">Failed</Badge>
</div>
