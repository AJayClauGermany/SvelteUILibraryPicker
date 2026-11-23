<!--
  Skeleton has no Form component: its forms page groups native controls with the
  `fieldset` and `legend` classes (plus `label` and `input`), which IS its default.
  ./styles.css loads Skeleton's cerberus theme and the @tailwindcss/forms plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#fieldsets
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	let submitted = $state(false)
</script>

<form
	onsubmit={(event) => {
		event.preventDefault()
		submitted = true
	}}
>
	<fieldset class="fieldset">
		<legend class="legend">Sign in</legend>
		<label class="label">
			<span class="label-text">Email</span>
			<input class="input" type="email" placeholder="name@example.com" />
		</label>
		<label class="label">
			<span class="label-text">Password</span>
			<input class="input" type="password" />
		</label>
		<button type="submit" class="btn preset-filled">Submit</button>
	</fieldset>
</form>
{#if submitted}
	<p>Submitted.</p>
{/if}
