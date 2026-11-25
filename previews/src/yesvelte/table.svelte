<!--
  YeSvelte's default look is its prebuilt Tabler stylesheet, which the install guide links from
  the layout (yesvelte/css/tabler.min.css); we import that same file. No styles of ours.
  Docs: https://www.yesvelte.com/docs/table
-->
<script lang="ts">
	import 'yesvelte/css/tabler.min.css'
	import { Table, TableBody, TableCell, TableHead, TableRow } from 'yesvelte'
</script>

<Table>
	<TableHead>
		<TableRow>
			<TableCell>Name</TableCell>
			<TableCell>Role</TableCell>
			<TableCell>Status</TableCell>
		</TableRow>
	</TableHead>
	<TableBody>
		<TableRow>
			<TableCell>Ada</TableCell>
			<TableCell>Engineer</TableCell>
			<TableCell>Active</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Grace</TableCell>
			<TableCell>Admiral</TableCell>
			<TableCell>Away</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>Linus</TableCell>
			<TableCell>Maintainer</TableCell>
			<TableCell>Active</TableCell>
		</TableRow>
	</TableBody>
</Table>
