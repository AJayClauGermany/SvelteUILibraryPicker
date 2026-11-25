<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Docs: https://oli8.github.io/spaper/components/Tabs
-->
<script lang="ts">
	import './styles.css'
	import { Tab, Tabs } from 'spaper'
</script>

<Tabs>
	<Tab label="Overview">
		<p>A short summary of the project.</p>
	</Tab>
	<Tab label="Activity">
		<p>Recent changes by the team.</p>
	</Tab>
	<Tab label="Settings">
		<p>Name, visibility and members.</p>
	</Tab>
</Tabs>
