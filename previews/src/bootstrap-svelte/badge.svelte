<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/badge
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Badge } from '@winkintel/bootstrap-svelte'
</script>

<Badge>Default</Badge>
<Badge colorVariant="text-bg-success">Paid</Badge>
<Badge colorVariant="text-bg-warning">Pending</Badge>
<Badge colorVariant="text-bg-danger">Overdue</Badge>
<Badge colorVariant="text-bg-secondary" isPill={true}>12</Badge>
