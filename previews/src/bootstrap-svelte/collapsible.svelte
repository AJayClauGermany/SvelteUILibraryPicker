<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/collapse
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Button, Collapse, collapseAria } from '@winkintel/bootstrap-svelte'

	let expanded = $state(false)
</script>

<Button
	{@attach collapseAria({ ariaControls: 'details', ariaExpanded: expanded })}
	colorVariant="primary"
	onclick={() => (expanded = !expanded)}
>
	{expanded ? 'Hide details' : 'Show details'}
</Button>

<Collapse id="details" isExpanded={expanded}>
	<p>Orders ship within two business days and arrive in about a week.</p>
</Collapse>
