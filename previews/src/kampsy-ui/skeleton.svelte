<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/skeleton
-->
<script lang="ts">
	import './styles.css'
	import { Button, Skeleton } from 'kampsy-ui'
</script>

<div><Skeleton width={48} height={48} pill /></div>
<div><Skeleton width={220} /></div>
<div><Skeleton width={160} rounded /></div>
<div>
	<Skeleton button>
		<Button>Loading content</Button>
	</Skeleton>
</div>
