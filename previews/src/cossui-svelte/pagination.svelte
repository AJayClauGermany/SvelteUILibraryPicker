<!--
  coss ui for Svelte is copy-paste: ./ui holds the source its shadcn-svelte registry (v1.2.0)
  generates, and ./styles.css the theme from its Get Started and Styling guides. That IS its default.
  Docs: https://cossui-svelte.com/docs/components/pagination
-->
<script lang="ts">
	import './styles.css'
	import {
		Pagination,
		PaginationContent,
		PaginationEllipsis,
		PaginationItem,
		PaginationLink,
		PaginationNext,
		PaginationPrevious,
	} from './ui/pagination/index.ts'
</script>

<Pagination>
	<PaginationContent>
		<PaginationItem><PaginationPrevious href="#" /></PaginationItem>
		<PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
		<PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
		<PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
		<PaginationItem><PaginationEllipsis /></PaginationItem>
		<PaginationItem><PaginationNext href="#" /></PaginationItem>
	</PaginationContent>
</Pagination>
