<!--
  Skeleton has no RadioGroup component: its forms page styles native radio inputs with the
  `radio` class (on top of the @tailwindcss/forms plugin), which IS its default.
  ./styles.css loads Skeleton's cerberus theme and that plugin.
  Docs: https://www.skeleton.dev/docs/svelte/tailwind-components/forms#radio-groups
-->
<script lang="ts">
	import './styles.css'

	document.documentElement.dataset.theme = 'cerberus'

	const plans = ['Free', 'Pro', 'Team']
	let plan = $state('Pro')
</script>

{#each plans as option (option)}
	<div>
		<label>
			<input class="radio" type="radio" name="plan" value={option} bind:group={plan} />
			{option}
		</label>
	</div>
{/each}
<p>Selected: {plan}</p>
