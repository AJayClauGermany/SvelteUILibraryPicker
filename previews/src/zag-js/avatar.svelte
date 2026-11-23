<!--
  Zag.js is headless: its machines ship behaviour and accessibility, no styles and no markup.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://zagjs.com/components/svelte/avatar
-->
<script lang="ts">
	import * as avatar from '@zag-js/avatar'
	import { normalizeProps, useMachine } from '@zag-js/svelte'

	// No image source here, so the fallback initials are shown.
	const id = $props.id()
	const service = useMachine(avatar.machine, { id })
	const api = $derived(avatar.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()}>
	<span {...api.getFallbackProps()}>JD</span>
	<img alt="Jane Doe" {...api.getImageProps()} />
</div>
