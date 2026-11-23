<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/tab
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Nav, Tab } from '@winkintel/bootstrap-svelte'
</script>

<Tab.Root>
	<Nav.Root itemStyle="tabs">
		<Nav.Item>
			<Tab.NavLink targetPaneId="#account" isActive>Account</Tab.NavLink>
		</Nav.Item>
		<Nav.Item>
			<Tab.NavLink targetPaneId="#password">Password</Tab.NavLink>
		</Nav.Item>
		<Nav.Item>
			<Tab.NavLink targetPaneId="#billing" isDisabled>Billing</Tab.NavLink>
		</Nav.Item>
	</Nav.Root>
	<Tab.Content>
		<Tab.Pane id="account" isActive>
			<p>Update your name and email.</p>
		</Tab.Pane>
		<Tab.Pane id="password">
			<p>Change your password here.</p>
		</Tab.Pane>
		<Tab.Pane id="billing">
			<p>Billing is not available yet.</p>
		</Tab.Pane>
	</Tab.Content>
</Tab.Root>
