<!--
  Flowbite Svelte styles its components with Tailwind; ./styles.css loads its default setup.
  Flowbite calls it SpeedDial; the trigger position classes are the ones its docs pass.
  Docs: https://flowbite-svelte.com/docs/components/speed-dial
-->
<script lang="ts">
	import './styles.css'
	import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from 'flowbite-svelte'
</script>

<p>Hover the button in the corner.</p>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial tooltip="none">
	<SpeedDialButton name="Share" />
	<SpeedDialButton name="Print" />
	<SpeedDialButton name="Save" />
</SpeedDial>
