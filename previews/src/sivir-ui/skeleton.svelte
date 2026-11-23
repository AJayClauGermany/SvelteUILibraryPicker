<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/skeleton
-->
<script lang="ts">
	import './styles.css'
	import { Skeleton } from '@sivir-ui/svelte/components/skeleton'
</script>

<div class="flex items-center gap-3">
	<Skeleton w={40} h={40} class="rounded-full" />
	<div class="flex flex-col gap-2">
		<Skeleton w={180} h={14} />
		<Skeleton w={120} h={14} />
	</div>
</div>
