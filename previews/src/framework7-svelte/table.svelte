<!--
  Framework7's default theme "auto" picks Material on desktop and Android, iOS on iPhone and iPad.
  ./lib/F7App.svelte loads the CSS bundle and mounts App > View > Page as the install docs do.
  No Svelte component: a core Data Table, i.e. a plain table inside the library's data-table class.
  Docs: https://framework7.io/svelte/data-table.html
-->
<script lang="ts">
	import F7App from './lib/F7App.svelte'
</script>

<F7App>
	<div class="data-table">
		<table>
			<thead>
				<tr>
					<th class="label-cell">Plan</th>
					<th class="numeric-cell">Seats</th>
					<th class="numeric-cell">Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="label-cell">Starter</td>
					<td class="numeric-cell">3</td>
					<td class="numeric-cell">9</td>
				</tr>
				<tr>
					<td class="label-cell">Team</td>
					<td class="numeric-cell">10</td>
					<td class="numeric-cell">29</td>
				</tr>
				<tr>
					<td class="label-cell">Business</td>
					<td class="numeric-cell">50</td>
					<td class="numeric-cell">99</td>
				</tr>
			</tbody>
		</table>
	</div>
</F7App>
