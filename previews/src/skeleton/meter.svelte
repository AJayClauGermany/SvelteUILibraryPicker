<!--
  Skeleton has no Meter component: its forms page styles the native <meter> with the `meter`
  class, which IS its default (Safari ignores most of these styles, as the CSS notes).
  ./styles.css loads Skeleton's cerberus theme.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#meter
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	const readings = [
		{ name: 'Battery', value: 85 },
		{ name: 'Storage', value: 55 },
		{ name: 'Signal', value: 15 },
	]
</script>

{#each readings as reading (reading.name)}
	<label class="label">
		<span class="label-text">{reading.name}</span>
		<meter class="meter" value={reading.value} min="0" max="100" low="30" high="70" optimum="90"></meter>
	</label>
{/each}
