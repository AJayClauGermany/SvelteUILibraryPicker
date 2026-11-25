<!--
  PerfectThings UI ships its own CSS: importing the package loads its root stylesheet (with its
  light and dark palettes) and each component's CSS. No styles of ours.
  Docs: https://ui.perfectthings.dev/#Table
-->
<script lang="ts">
	import { Table } from '@perfectthings/ui'
</script>

<Table round selectable>
	<thead>
		<tr><th>Name</th><th>Role</th><th>Joined</th></tr>
	</thead>
	<tbody>
		<tr><td>Ana</td><td>Admin</td><td>2024</td></tr>
		<tr><td>Ben</td><td>Editor</td><td>2025</td></tr>
		<tr><td>Chi</td><td>Viewer</td><td>2026</td></tr>
	</tbody>
</Table>
