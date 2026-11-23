<!--
  neobrutalism-svelte is a shadcn-svelte registry: ./ui holds the components as its CLI generates
  them, and ./styles.css the theme from its installation guide.
  Docs: https://neobrutalism-svelte.flenze.com/docs/components/skeleton
-->
<script lang="ts">
	import './styles.css'
	import { Skeleton } from './ui/skeleton/index.ts'
</script>

<div class="flex items-center space-x-4">
	<Skeleton class="size-12 rounded-full" />
	<div class="space-y-2">
		<Skeleton class="h-4 w-[240px]" />
		<Skeleton class="h-4 w-[180px]" />
	</div>
</div>
