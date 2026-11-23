<!--
  shadcn-svelte is copy-paste: ./ui holds the components its CLI generates with the default
  preset, and ./styles.css the theme it writes. Unchanged apart from relative import paths.
  Docs: https://shadcn-svelte.com/docs/components/skeleton
-->
<script lang="ts">
	import './styles.css'
	import { Skeleton } from './ui/skeleton/index.js'
</script>

<div class="flex items-center gap-4">
	<Skeleton class="size-12 rounded-full" />
	<div class="space-y-2">
		<Skeleton class="h-4 w-[240px]" />
		<Skeleton class="h-4 w-[180px]" />
	</div>
</div>
