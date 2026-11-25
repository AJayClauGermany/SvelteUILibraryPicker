<!--
  STDF styles its components with Tailwind; ./styles.css loads its Quick Start setup and default theme.
  Grids and Grid only lay out cells; the Skeleton blocks make the cells visible.
  Docs: https://stdf.dev/components?nav=grids&tab=2&lang=en_US
-->
<script lang="ts">
	import './styles.css'
	import { Grid, Grids, Skeleton } from 'stdf'
</script>

<Grids cols="3">
	<Grid col="2"><Skeleton width="full" height="12" /></Grid>
	<Grid><Skeleton width="full" height="12" /></Grid>
	<Grid><Skeleton width="full" height="12" /></Grid>
	<Grid col="2"><Skeleton width="full" height="12" /></Grid>
</Grids>
