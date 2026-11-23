<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/file-upload
-->
<script lang="ts">
	import * as fileUpload from '@zag-js/file-upload'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	const id = $props.id()
	const service = useMachine(fileUpload.machine, { id, maxFiles: 3 })
	const api = $derived(fileUpload.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<label {...api.getLabelProps()}>Attachments</label>
	<div {...api.getDropzoneProps()}>
		<input {...api.getHiddenInputProps()} />
		<span>Drop files here</span>
	</div>
	<button {...api.getTriggerProps()}>Browse</button>
	<ul {...api.getItemGroupProps()}>
		{#each api.acceptedFiles as file (file.name)}
			<li {...api.getItemProps({ file })}>
				<span {...api.getItemNameProps({ file })}>{file.name}</span>
				<button {...api.getItemDeleteTriggerProps({ file })}>Remove</button>
			</li>
		{/each}
	</ul>
</div>
