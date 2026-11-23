<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/copy-button
-->
<script lang="ts">
	import './styles.css'
	import { CopyButton } from '@sivir-ui/svelte/components/copy-button'
</script>

<div class="flex items-center gap-3">
	<CopyButton text="pnpm add @sivir-ui/svelte" />
	<CopyButton text="pnpm add @sivir-ui/svelte" variant="outline" />
	<CopyButton text="pnpm add @sivir-ui/svelte" size="md">Copy command</CopyButton>
</div>
