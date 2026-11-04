<script module lang="ts">
	export const frontmatter = {
		title: 'Features & tooling',
		description: 'What each feature tag and build-tooling label on this site means, and what a library needs to earn it.',
	}
</script>

<script lang="ts">
	import type { DependencyKind, FeatureTag } from '#lib/data/index.ts'
	import { dependencyKindLabels, featureInfo, libraries, toolingKinds } from '#lib/data/index.ts'

	const tags = Object.keys(featureInfo) as FeatureTag[]
	const count = (f: FeatureTag) => libraries.filter(l => l.features.includes(f)).length

	const kindHelp: Record<DependencyKind, string> = {
		'tailwind': 'Tailwind CSS must be set up in your project. The version matters: v3 and v4 are configured differently.',
		'unocss': 'UnoCSS (or one of its presets) must be set up in your project.',
		'sass': 'A Sass compiler is used to build or theme the library\'s styles.',
		'postcss': 'PostCSS or a PostCSS plugin must be added to your build.',
		'css-framework': 'You load a separate CSS framework\'s stylesheet yourself (e.g. Bootstrap).',
		'build-plugin': 'You register a Vite plugin or Svelte preprocessor.',
		'framework': 'The library expects a meta-framework such as SvelteKit.',
		'peer': 'Another package you install next to the library, often only for some components.',
	}
	const kinds = Object.keys(dependencyKindLabels) as DependencyKind[]
	const isTooling = (k: DependencyKind) => (toolingKinds as readonly DependencyKind[]).includes(k)
</script>

<p>
	Feature tags and dependencies are recorded from each library's own docs, source and
	<code>package.json</code>. A missing tag means we didn't find evidence that clears the bar below, not
	that the library can't do it. Check the official docs before you decide.
</p>

<h2 id="features">Feature tags</h2>
<div class="ulp-table-wrap">
	<table class="ulp-table">
		<thead><tr><th>Tag</th><th>What it takes</th><th>Libraries</th></tr></thead>
		<tbody>
			{#each tags as f (f)}
				<tr><th scope="row">{featureInfo[f].label}</th><td>{featureInfo[f].description}</td><td>{count(f)}</td></tr>
			{/each}
		</tbody>
	</table>
</div>

<h2 id="dependencies">Dependencies and build tooling</h2>
<p>
	Each library page lists the packages you add to your own project besides <code>svelte</code> and the
	library itself, marked <strong>required</strong> (a basic install needs it) or <strong>optional</strong>
	(only some components or theming need it). The library's own dependencies, which npm installs for you,
	are not listed. Kinds marked <em>build tooling</em> drive the "Build tooling" filter on the
	libraries page; that filter only looks at required dependencies.
</p>
<div class="ulp-table-wrap">
	<table class="ulp-table">
		<thead><tr><th>Kind</th><th>Meaning</th></tr></thead>
		<tbody>
			{#each kinds as k (k)}
				<tr><th scope="row">{dependencyKindLabels[k]}{#if isTooling(k)} <span class="ulp-chip">build tooling</span>{/if}</th><td>{kindHelp[k]}</td></tr>
			{/each}
		</tbody>
	</table>
</div>
