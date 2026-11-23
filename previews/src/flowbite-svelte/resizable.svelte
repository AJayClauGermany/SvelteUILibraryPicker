<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  The resizable panel group is called SplitPane in Flowbite Svelte; the sized, bordered wrapper
  and padded pane content use the classes from its docs.
  Docs: https://flowbite-svelte.com/docs/extend/split-pane
-->
<script lang="ts">
	import './styles.css'
	import { Pane, P, SplitPane } from 'flowbite-svelte'
</script>

<div class="h-96 rounded border">
	<SplitPane responsive={false} initialSizes={[40, 60]}>
		<Pane>
			<div class="h-full p-4">
				<P>Left pane. Drag the divider to resize.</P>
			</div>
		</Pane>
		<Pane>
			<div class="h-full p-4">
				<P>Right pane.</P>
			</div>
		</Pane>
	</SplitPane>
</div>
