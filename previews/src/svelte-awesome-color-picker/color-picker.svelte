<!--
  The default layout with the styles the component ships inside itself (no CSS import needed),
  opened on load so the picker shows. Its dark theme is CSS variables the app sets itself, so the
  preview stays on the defaults. No styles of ours.
  Docs: https://svelte-awesome-color-picker.vercel.app/#default-layout
-->
<script lang="ts">
	import ColorPicker from 'svelte-awesome-color-picker'

	let hex = $state('#2f80ed')
	let isOpen = $state(true)
</script>

<ColorPicker bind:hex bind:isOpen label="Accent colour" />
