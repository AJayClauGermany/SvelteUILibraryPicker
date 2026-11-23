<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/empty
-->
<script lang="ts">
	import './styles.css'
	import FolderOpen from '@lucide/svelte/icons/folder-open'
	import { Button } from './ui/button/index.ts'
	import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './ui/empty/index.ts'
</script>

<Empty>
	<EmptyHeader>
		<EmptyMedia variant="icon">
			<FolderOpen aria-hidden="true" />
		</EmptyMedia>
		<EmptyTitle>No projects yet</EmptyTitle>
		<EmptyDescription>Projects you create will be listed here.</EmptyDescription>
	</EmptyHeader>
	<EmptyContent>
		<Button>New project</Button>
	</EmptyContent>
</Empty>
