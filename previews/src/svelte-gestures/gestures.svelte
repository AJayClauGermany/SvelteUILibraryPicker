<!--
  svelte-gestures is headless: its attachments only recognize pointer gestures and add no styles or
  CSS of their own. The inline size and border are ours, only to make the hit area visible.
  Docs: https://github.com/Rezi/svelte-gestures#readme
-->
<script lang="ts">
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures'

	let detected = $state('nothing yet')

	function onSwipe(event: SwipeCustomEvent) {
		detected = `${event.detail.direction} (${event.detail.pointerType})`
	}
</script>

<div {...useSwipe(onSwipe)} style="height: 160px; border: 1px dashed">
	<p>Swipe across this box with a mouse, pen or finger.</p>
	<p>Detected swipe: {detected}</p>
</div>
