<!--
  Konsta UI styles its components with Tailwind; ./styles.css loads its theme file. <App> sets
  the default Material theme, as the usage guide wraps a Konsta-only app.
  Docs: https://konstaui.com/svelte/card
-->
<script lang="ts">
	import './styles.css'
	import { App, Card, Link } from 'konsta/svelte'
</script>

<App>
	<Card>
		{#snippet header()}Plain card{/snippet}
		A card groups related content.
		{#snippet footer()}
			<Link>Read more</Link>
		{/snippet}
	</Card>
	<Card outline headerDivider>
		{#snippet header()}Outline card{/snippet}
		This one has an outline and a header divider.
	</Card>
	<Card raised>
		{#snippet header()}Raised card{/snippet}
		This one has a shadow.
	</Card>
</App>
