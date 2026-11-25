<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/avatars
-->
<script lang="ts">
	import './styles.css'
	import * as Avatar from './ui/avatar/index.js'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Avatar.Root>
		<Avatar.Fallback>AL</Avatar.Fallback>
	</Avatar.Root>
	<Avatar.Root>
		<Avatar.Fallback>MK</Avatar.Fallback>
	</Avatar.Root>
</div>
