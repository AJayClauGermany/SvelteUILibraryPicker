<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/split-button
-->
<script lang="ts">
	import './styles.css'
	import { SplitButton } from 'kampsy-ui'

	let last = $state('nothing yet')
</script>

<SplitButton.Root>
	<SplitButton.Button onclick={() => (last = 'Save')}>Save</SplitButton.Button>
	<SplitButton.Content class="w-[264px]">
		<SplitButton.Item onClick={() => (last = 'Save')} title="Save" description="Store your changes" />
		<SplitButton.Item onClick={() => (last = 'Save as draft')} title="Save as draft" description="Keep it private for now" />
	</SplitButton.Content>
</SplitButton.Root>
<p>Last action: {last}</p>
