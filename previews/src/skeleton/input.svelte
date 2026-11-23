<!--
  Skeleton has no Input component: its forms page styles the native <input> with the
  `input` class (on top of the @tailwindcss/forms plugin), which IS its default.
  ./styles.css loads Skeleton's cerberus theme and that plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#input
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	let name = $state('')
</script>

<label class="label">
	<span class="label-text">Name</span>
	<input class="input" type="text" placeholder="Your name" bind:value={name} />
</label>
<p>Hello, {name || 'stranger'}</p>
