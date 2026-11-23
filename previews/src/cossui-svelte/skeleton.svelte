<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/skeleton
-->
<script lang="ts">
	import './styles.css'
	import { Button } from './ui/button/index.ts'
	import { Skeleton } from './ui/skeleton/index.ts'

	let loading = $state(true)
</script>

<div class="flex flex-col items-start gap-6">
	<Skeleton {loading} class="flex items-center gap-4">
		<div class="size-10 rounded-full"></div>
		<div class="flex flex-col gap-1">
			<p class="text-sm font-medium">Ada Lovelace</p>
			<p class="text-xs text-muted-foreground">Analytical Engine team</p>
		</div>
	</Skeleton>
	<Button variant="outline" onclick={() => (loading = !loading)}>
		{loading ? 'Show content' : 'Show skeleton'}
	</Button>
</div>
