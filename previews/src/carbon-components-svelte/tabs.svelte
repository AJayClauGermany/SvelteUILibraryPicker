<!--
  Carbon ships its own CSS; we load the default "white" theme. No styles of ours.
  Docs: https://svelte.carbondesignsystem.com/components/Tabs
-->
<script lang="ts">
	import 'carbon-components-svelte/css/white.css'
	import { Tab, TabContent, Tabs } from 'carbon-components-svelte'
</script>

<Tabs>
	<Tab label="First" />
	<Tab label="Second" />
	<Tab label="Third" />
	<svelte:fragment slot="content">
		<TabContent>Content for the first tab.</TabContent>
		<TabContent>Content for the second tab.</TabContent>
		<TabContent>Content for the third tab.</TabContent>
	</svelte:fragment>
</Tabs>
