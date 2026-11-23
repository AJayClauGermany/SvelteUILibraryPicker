<!--
  Skeleton has no Textarea component: its forms page styles the native <textarea> with the
  `textarea` class (on top of the @tailwindcss/forms plugin), which IS its default.
  ./styles.css loads Skeleton's cerberus theme and that plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#textarea
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	let message = $state('')
</script>

<label class="label">
	<span class="label-text">Message</span>
	<textarea class="textarea" rows="4" placeholder="Write a few lines" bind:value={message}></textarea>
</label>
<p>{message.length} characters</p>
