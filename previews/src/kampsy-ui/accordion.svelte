<!--
  Kampsy UI styles its components with Tailwind; ./styles.css loads its default setup.
  Docs: https://ui.kampsy.xyz/collapse
-->
<script lang="ts">
	import './styles.css'
	import { Collapse } from 'kampsy-ui'
</script>

<Collapse.Root>
	<Collapse.Item value="billing" defaultExpanded>
		<Collapse.Trigger>How does billing work?</Collapse.Trigger>
		<Collapse.Content>You are charged at the start of each month.</Collapse.Content>
	</Collapse.Item>
	<Collapse.Item value="cancel">
		<Collapse.Trigger>Can I cancel at any time?</Collapse.Trigger>
		<Collapse.Content>Yes, your plan stays active until the period ends.</Collapse.Content>
	</Collapse.Item>
</Collapse.Root>
