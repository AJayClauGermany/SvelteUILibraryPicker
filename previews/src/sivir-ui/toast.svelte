<!--
  Sivir UI's default look: the package's ui.css token sheet (the default "sivir" theme),
  loaded by ./styles.css. Components are imported per component, as the docs examples do.
  Docs: https://sivir.dev/docs/components/toast
-->
<script lang="ts">
	import './styles.css'
	import { Button } from '@sivir-ui/svelte/components/button'
	import { Toaster, toast } from '@sivir-ui/svelte/components/toast'
</script>

<Toaster />
<div class="flex flex-wrap gap-2">
	<Button onclick={() => toast.success('Changes saved', { description: 'Everyone on the team can see them.' })}>
		Save
	</Button>
	<Button variant="outline" onclick={() => toast.error('Sync failed', { description: 'Check your connection and try again.' })}>
		Sync
	</Button>
	<Button variant="outline" onclick={() => toast({ title: 'Link copied' })}>Copy link</Button>
</div>
