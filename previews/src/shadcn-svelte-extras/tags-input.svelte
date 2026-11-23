<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/tags-input
-->
<script lang="ts">
	import './styles.css'
	import { TagsInput } from './components/ui/tags-input/index.js'

	let value = $state(['svelte', 'runes'])
</script>

<TagsInput bind:value placeholder="Add a tag" />
