<!--
  Skeleton has no ColorPicker component: its forms page styles the native color input with
  the `input` class, which IS its default. ./styles.css loads Skeleton's cerberus theme.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#color
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	let color = $state('#3b82f6')
</script>

<label class="label">
	<span class="label-text">Accent colour</span>
	<input class="input" type="color" bind:value={color} />
</label>
<p>Value: {color}</p>
