<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/rename
-->
<script lang="ts">
	import './styles.css'
	import * as Rename from './components/ui/rename/index.js'

	let value = $state('Quarterly report')
	let mode = $state<'edit' | 'view'>('view')
</script>

<div class="flex items-center gap-2">
	<Rename.Provider>
		<Rename.Root this="span" bind:value bind:mode validate={(v) => v.length > 0} />
		{#if mode === 'edit'}
			<Rename.Save size="sm" />
			<Rename.Cancel size="sm" />
		{:else}
			<Rename.Edit size="sm" />
		{/if}
	</Rename.Provider>
</div>
