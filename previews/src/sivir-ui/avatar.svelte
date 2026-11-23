<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/avatar
-->
<script lang="ts">
	import './styles.css'
	import * as Avatar from '@sivir-ui/svelte/components/avatar'
</script>

<div class="flex items-center justify-center gap-4">
	<Avatar.Root size="sm"><Avatar.Fallback>AL</Avatar.Fallback></Avatar.Root>
	<Avatar.Root><Avatar.Fallback>BK</Avatar.Fallback></Avatar.Root>
	<Avatar.Root size="lg"><Avatar.Fallback>CM</Avatar.Fallback></Avatar.Root>
	<Avatar.Root size="xl" shape="square"><Avatar.Fallback>DT</Avatar.Fallback></Avatar.Root>
</div>
