<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/card
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Button, Card, CardBody, CardFooter } from 'yesvelte'
</script>

<Card title="Team plan">
	<CardBody>Shared workspaces, roles and an audit log for up to 20 people.</CardBody>
	<CardFooter>
		<Button color="primary">Upgrade</Button>
	</CardFooter>
</Card>
