<!--
  Origin UI - Svelte is copy-paste: ./ui holds the base components copied from its repo
  (src/lib/components/ui), and ./styles.css the repo's global CSS. That IS its default.
  Docs: https://originui-svelte.pages.dev/paginations
-->
<script lang="ts">
	import './styles.css'
	import * as Pagination from './ui/pagination/index.js'
</script>

<Pagination.Root>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton href="#page-1" />
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.Link href="#page-1">1</Pagination.Link>
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.Link href="#page-2" isActive>2</Pagination.Link>
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.Link href="#page-3">3</Pagination.Link>
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.Ellipsis />
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.NextButton href="#page-3" />
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
