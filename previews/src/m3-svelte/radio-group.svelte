<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  RadioAnim1 styles one native radio you pass in, inside a <label>; there is no group component.
  Docs: https://kendell.dev/m3-svelte/#radio-demo
-->
<script lang="ts">
	import './styles.css'
	import { RadioAnim1 } from 'm3-svelte'

	let size = $state('medium')
</script>

{#each ['small', 'medium', 'large'] as option}
	<p>
		<label>
			<RadioAnim1>
				<input type="radio" name="size" value={option} bind:group={size} />
			</RadioAnim1>
			{option}
		</label>
	</p>
{/each}
<p>Selected: {size}</p>
