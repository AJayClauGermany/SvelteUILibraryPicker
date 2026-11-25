<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: the core f7.calendar API, rendered inline into a container element.
  Docs: https://framework7.io/svelte/calendar.html
-->
<script lang="ts">
	import { onMount } from 'svelte'
	import { f7, f7ready } from 'framework7-svelte'
	import F7App from './lib/F7App.svelte'

	let container = $state<HTMLElement>()

	onMount(() => {
		let calendar: { destroy: () => void } | undefined
		f7ready(() => {
			calendar = f7.calendar.create({ containerEl: container, value: [new Date()] })
		})
		return () => calendar?.destroy()
	})
</script>

<F7App>
	<div bind:this={container}></div>
</F7App>
