<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/button
-->
<script lang="ts">
	import './styles.css'
	import Button from './components/button.svelte'
</script>

<div class="flex flex-wrap items-center gap-2">
	<Button>Save</Button>
	<Button variant="outline">Cancel</Button>
	<Button loading>Saving</Button>
</div>
