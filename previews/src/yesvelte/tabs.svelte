<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/tabs
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { TabContent, TabItem, TabList, TabPanel, Tabs } from 'yesvelte'
</script>

<Tabs>
	<TabList>
		<TabItem active>Overview</TabItem>
		<TabItem>Activity</TabItem>
		<TabItem disabled>Billing</TabItem>
	</TabList>
	<TabContent>
		<TabPanel>A summary of the project at a glance.</TabPanel>
		<TabPanel>Recent commits and comments.</TabPanel>
		<TabPanel>Invoices and payment methods.</TabPanel>
	</TabContent>
</Tabs>
