<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/split-button
-->
<script lang="ts">
	import './styles.css'
	import * as SplitButton from './components/ui/split-button/index.js'
</script>

<SplitButton.Root>
	<SplitButton.Action value="publish">Publish</SplitButton.Action>
	<SplitButton.Action value="draft">Save draft</SplitButton.Action>
	<SplitButton.Select>
		<SplitButton.SelectTrigger />
		<SplitButton.SelectContent>
			<SplitButton.SelectGroup>
				<SplitButton.SelectAction value="publish">Publish now</SplitButton.SelectAction>
				<SplitButton.SelectAction value="draft">Save as draft</SplitButton.SelectAction>
			</SplitButton.SelectGroup>
		</SplitButton.SelectContent>
	</SplitButton.Select>
</SplitButton.Root>
