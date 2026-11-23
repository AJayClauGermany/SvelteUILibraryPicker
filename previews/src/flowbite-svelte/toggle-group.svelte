<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://flowbite-svelte.com/docs/extend/button-toggle
-->
<script lang="ts">
	import './styles.css'
	import { ButtonToggle, ButtonToggleGroup } from 'flowbite-svelte'
</script>

<ButtonToggleGroup value="week">
	<ButtonToggle value="day">Day</ButtonToggle>
	<ButtonToggle value="week">Week</ButtonToggle>
	<ButtonToggle value="month">Month</ButtonToggle>
</ButtonToggleGroup>
