<!--
  Svelte 5 UI Lib styles its components with Tailwind; ./styles.css loads its install guide's app.css.
  Docs: https://github.com/shinokada/svelte-5-ui-lib/blob/main/src/routes/components/tabs/+page.svelte
-->
<script lang="ts">
	import './styles.css'
	import { TabItem, Tabs } from 'svelte-5-ui-lib'
</script>

<Tabs>
	<TabItem open title="Profile">
		<p>Your name, photo and bio.</p>
	</TabItem>
	<TabItem title="Account">
		<p>Email address and password.</p>
	</TabItem>
	<TabItem title="Billing">
		<p>Plan and payment method.</p>
	</TabItem>
</Tabs>
