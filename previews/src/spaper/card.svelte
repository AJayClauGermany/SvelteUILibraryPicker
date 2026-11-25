<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Card
-->
<script lang="ts">
	import './styles.css'
	import { Button, Card } from 'spaper'
</script>

<Card title="Weekend trip" subTitle="Three days by the lake" footer="Updated yesterday">
	Pack light: the cabin has bedding and a small kitchen.
	{#snippet bottom()}
		<Button type="secondary">See the plan</Button>
	{/snippet}
</Card>
