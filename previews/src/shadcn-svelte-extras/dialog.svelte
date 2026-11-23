<!--
  Copy-paste components: generated with jsrepo from the shadcn-svelte-extras registry (v7.4.0) into
  a project set up with shadcn-svelte's default preset; see ./styles.css.
  Docs: https://www.shadcn-svelte-extras.com/docs/components/modal
-->
<script lang="ts">
	import './styles.css'
	import * as Modal from './components/ui/modal/index.js'
	import Button from './components/button.svelte'
	import { buttonVariants } from './components/ui/button/index.js'
</script>

<Modal.Root>
	<Modal.Trigger class={buttonVariants({ variant: 'outline' })}>Open modal</Modal.Trigger>
	<Modal.Content>
		<Modal.Header>
			<Modal.Title>Rename file</Modal.Title>
			<Modal.Description>Pick a new name for this file.</Modal.Description>
		</Modal.Header>
		<Modal.Footer>
			<Button>Save</Button>
		</Modal.Footer>
	</Modal.Content>
</Modal.Root>
