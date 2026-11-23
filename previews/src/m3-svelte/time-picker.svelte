<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  TimePickerDial opens as a modal dialog while rendered; it reports a 24-hour "HH:MM" string
  through setTime and calls close when dismissed.
  Docs: https://kendell.dev/m3-svelte/
-->
<script lang="ts">
	import './styles.css'
	import { Button, TimePickerDial } from 'm3-svelte'

	let open = $state(false)
	let time = $state('09:30')
</script>

<Button variant="tonal" onclick={() => (open = true)}>Pick a time</Button>
<p>Time: {time || 'none'}</p>
{#if open}
	<TimePickerDial {time} clearable setTime={(t) => (time = t)} close={() => (open = false)} />
{/if}
