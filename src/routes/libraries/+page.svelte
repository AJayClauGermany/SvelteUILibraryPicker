<script module lang="ts">
	export const frontmatter = {
		title: 'Libraries',
		description: 'Every Svelte UI library we track, with Svelte version support, styling approach, license and links to official docs.',
	}
</script>

<script lang="ts">
	import { url } from '#lib/url.ts'
	import LibraryCard from '#lib/components/LibraryCard.svelte'
	import { libraries } from '#lib/data/index.ts'

	let query = $state('')
	let svelteMajor = $state('5')
	let styling = $state('')
	let license = $state('')

	const stylingOptions = [...new Set(libraries.flatMap(l => l.styling))].sort()
	const licenseOptions = [...new Set(libraries.map(l => l.license.spdx))].sort()

	const filtered = $derived(
		libraries.filter((l) => {
			const q = query.trim().toLowerCase()
			if (q && !`${l.name} ${l.description} ${l.packages.join(' ')}`.toLowerCase().includes(q)) return false
			if (svelteMajor && !l.svelte.supported.includes(Number(svelteMajor) as 3 | 4 | 5)) return false
			if (styling && !l.styling.includes(styling as never)) return false
			if (license && l.license.spdx !== license) return false
			return true
		}),
	)
</script>

<p>
	Pick a library to see what it offers, then head to its <strong>official documentation</strong> —
	that's always the source of truth. Want to see them side by side? Try <a href={url('/compare/')}>Compare</a>.
</p>

<div class="ulp-filters">
	<label>Search<input type="search" bind:value={query} placeholder="Name or package…" /></label>
	<label>Svelte version
		<select bind:value={svelteMajor}>
			<option value="">Any</option>
			<option value="5">Svelte 5</option>
			<option value="4">Svelte 4</option>
			<option value="3">Svelte 3</option>
		</select>
	</label>
	<label>Styling
		<select bind:value={styling}>
			<option value="">Any</option>
			{#each stylingOptions as s (s)}<option value={s}>{s}</option>{/each}
		</select>
	</label>
	<label>License
		<select bind:value={license}>
			<option value="">Any</option>
			{#each licenseOptions as s (s)}<option value={s}>{s}</option>{/each}
		</select>
	</label>
</div>

<p class="ulp-muted" aria-live="polite">{filtered.length} of {libraries.length} libraries</p>

<div class="grid">
	{#each filtered as library (library.id)}
		<LibraryCard {library} />
	{:else}
		<p>No library matches these filters.</p>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1rem;
	}
</style>
