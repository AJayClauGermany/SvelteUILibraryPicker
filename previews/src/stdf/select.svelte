<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Picker is a wheel picker in a bottom popup; it starts open and the button opens it again.
  Docs: https://stdf.dev/components?nav=picker&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Button, Picker } from 'stdf'

	let visible = $state(true)
</script>

<Button onclick={() => (visible = true)}>Pick a fruit</Button>
<Picker
	bind:visible
	title="Fruit"
	datas={[{ data: [{ label: 'Apple' }, { label: 'Banana' }, { label: 'Cherry' }, { label: 'Grape' }, { label: 'Mango' }] }]}
/>
