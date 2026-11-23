<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/empty-state
-->
<script lang="ts">
	import './styles.css'
	import { Button, EmptyState } from 'kampsy-ui'
	import { ChartBarPeak } from 'kampsy-ui/icons'
</script>

<EmptyState.Root
	icon={ChartBarPeak}
	title="No reports yet"
	description="Reports show up here once your first project has collected some traffic."
>
	<Button variant="secondary">Create a project</Button>
</EmptyState.Root>
