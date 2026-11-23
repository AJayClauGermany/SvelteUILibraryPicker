<!--
  Skeleton has no Label component: its forms page styles native labels with the `label` and
  `label-text` classes, which IS its default. The input uses Skeleton's `input` class.
  ./styles.css loads Skeleton's cerberus theme and the @tailwindcss/forms plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#labels
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'
</script>

<label class="label">
	<span class="label-text">Full name</span>
	<input class="input" type="text" placeholder="Your name" />
</label>
