<!--
  Bootstrap Svelte renders Bootstrap 5 markup and bundles no CSS. Its install guide says to
  import Bootstrap's compiled CSS once yourself, so we import the stock Bootstrap stylesheet.
  No styles of ours.
  Docs: https://bootstrap-svelte.vercel.app/components/scrollspy
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { Nav, Navbar, scrollspy } from '@winkintel/bootstrap-svelte'

	let active: string | null = $state(null)

	const onIntersect: IntersectionObserverCallback = (entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) active = entry.target.id
		}
	}

	const sections = [
		{ id: 'intro', title: 'Introduction' },
		{ id: 'setup', title: 'Setup' },
		{ id: 'usage', title: 'Usage' },
	]
</script>

<!-- Scroll the frame: the pill for the section in view becomes active. -->
<Navbar.Root id="toc" placement="sticky-top" class="bg-body-tertiary px-3">
	<Nav.Root itemStyle="pills">
		{#each sections as s (s.id)}
			<Nav.Item>
				<Nav.Link href="#{s.id}" isActive={active === s.id}>{s.title}</Nav.Link>
			</Nav.Item>
		{/each}
	</Nav.Root>
</Navbar.Root>

<!-- root: null observes the page scroll instead of a fixed-height box. -->
<div
	{@attach scrollspy({
		targetSelector: '#toc',
		callback: onIntersect,
		observerOptions: { root: null, rootMargin: '0px 0px -40%' },
	})}
>
	{#each sections as s (s.id)}
		<section id={s.id}>
			<h4>{s.title}</h4>
			{#each [1, 2, 3, 4, 5, 6] as n (n)}
				<p>Paragraph {n} of the {s.title.toLowerCase()} section, here so the page has room to scroll.</p>
			{/each}
		</section>
	{/each}
</div>
