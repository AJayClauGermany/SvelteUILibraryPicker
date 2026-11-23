<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/stepper
-->
<script lang="ts">
	import './styles.css'
	import { App, Block, Stepper } from 'konsta/svelte'

	let quantity = $state(1)
</script>

<App>
	<Block>
		<Stepper
			value={quantity}
			onMinus={() => (quantity = Math.max(0, quantity - 1))}
			onPlus={() => (quantity += 1)}
		/>
	</Block>
	<Block>
		<Stepper
			outline
			value={quantity}
			onMinus={() => (quantity = Math.max(0, quantity - 1))}
			onPlus={() => (quantity += 1)}
		/>
	</Block>
</App>
