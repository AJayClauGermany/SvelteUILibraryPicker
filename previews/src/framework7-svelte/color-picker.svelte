<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core f7.colorPicker API with its default module (the wheel), inline.
  Docs: https://framework7.io/svelte/color-picker.html
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { f7, f7ready } from 'framework7-svelte'
	import type { ColorPicker } from 'framework7/types'
	import F7App from './lib/F7App.svelte'

	let container = $state<HTMLElement>()

	onMount(() => {
		let picker: { destroy: () => void } | undefined
		f7ready(() => {
			// The cast is only for TypeScript: 9.3.0's typings mark three optional parameters as required.
			picker = f7.colorPicker.create({ containerEl: container, value: { hex: '#2196f3' } } as ColorPicker.Parameters)
		})
		return () => picker?.destroy()
	})
</script>

<F7App>
	<div bind:this={container}></div>
</F7App>
