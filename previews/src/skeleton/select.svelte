<!--
  Skeleton has no Select component: its forms page styles the native <select> with the
  `select` class (on top of the @tailwindcss/forms plugin), which IS its default.
  ./styles.css loads Skeleton's cerberus theme and that plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#select
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	const sizes = ['Small', 'Medium', 'Large']
	let size = $state('')
</script>

<label class="label">
	<span class="label-text">Size</span>
	<select class="select" bind:value={size}>
		<option value="" disabled>Choose a size</option>
		{#each sizes as option (option)}
			<option value={option}>{option}</option>
		{/each}
	</select>
</label>
<p>Selected: {size || 'none'}</p>
