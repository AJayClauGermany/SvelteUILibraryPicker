<!--
  NumberFlow ships no stylesheet to import: the element carries its own digit-animation styles
  and inherits font and colour from the page, so plain text is its default look. No styles of ours.
  Docs: https://number-flow.barvian.me/svelte
-->
<script lang="ts">
	import NumberFlow from '@number-flow/svelte'

	let value = $state(1280)
</script>

<NumberFlow {value} />
<button onclick={() => (value += Math.round(Math.random() * 900) + 100)}>Add some</button>
