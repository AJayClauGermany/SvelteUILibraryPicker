<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/toc
-->
<script lang="ts">
	import './styles.css'
	import * as Toc from './components/ui/toc/index.js'

	// Normally built from the page's headings with the UseToc hook.
	const toc = [
		{ kind: 'h2', id: 'setup', level: 2, label: 'Setup', active: true, children: [] },
		{
			kind: 'h2',
			id: 'usage',
			level: 2,
			label: 'Usage',
			active: false,
			children: [
				{ kind: 'h3', id: 'props', level: 3, label: 'Props', active: false, children: [] },
				{ kind: 'h3', id: 'events', level: 3, label: 'Events', active: false, children: [] }
			]
		}
	]
</script>

<Toc.Root toc={toc as never} />
