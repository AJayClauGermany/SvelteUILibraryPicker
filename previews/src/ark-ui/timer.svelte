<!--
  Ark UI is headless: it ships behaviour and accessibility, no styles.
  This preview is intentionally unstyled — that IS its default look.
  Docs: https://ark-ui.com/svelte/docs/components/timer
-->
<script lang="ts">
	import { Timer } from '@ark-ui/svelte/timer'
</script>

<Timer.Root countdown startMs={5 * 60 * 1000}>
	<Timer.Area>
		<Timer.Item type="minutes" />
		<Timer.Separator>:</Timer.Separator>
		<Timer.Item type="seconds" />
	</Timer.Area>
	<Timer.Control>
		<Timer.ActionTrigger action="start">Start</Timer.ActionTrigger>
		<Timer.ActionTrigger action="pause">Pause</Timer.ActionTrigger>
		<Timer.ActionTrigger action="resume">Resume</Timer.ActionTrigger>
		<Timer.ActionTrigger action="reset">Reset</Timer.ActionTrigger>
	</Timer.Control>
</Timer.Root>
