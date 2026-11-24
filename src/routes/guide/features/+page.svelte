<script module lang="ts">
	export const frontmatter = {
		title: 'Features & tooling',
		description: 'What each feature tag, build-tooling label and maintenance badge on this site means, and what a library needs to earn it.',
		// "On this page" list (Markdown pages get this from their headings automatically).
		anchors: [
			{ title: 'Feature tags', slugId: 'features', depth: 2 },
			{ title: 'Dependencies and build tooling', slugId: 'dependencies', depth: 2 },
			{ title: 'Maintenance status', slugId: 'maintenance', depth: 2 },
		],
	}
</script>

<script lang="ts">
	import type { DependencyKind, FeatureTag, Library, MaintenanceStatus, Tool } from '#lib/data/index.ts'
	import { currentSvelteMajor, dependencyKindLabels, featureInfo, libraries, maintenanceInfo, maintenanceStatus, maintenanceStatuses, toolingKinds, tools } from '#lib/data/index.ts'

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
	const statusCount = (s: MaintenanceStatus, list: (Library | Tool)[]) => list.filter(e => maintenanceStatus(e) === s).length
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

<h2 id="maintenance">Maintenance status</h2>
<p>
	Every library and tool carries a rough maintenance badge, so older or unmaintained projects can be
	listed for reference without looking current. It is worked out from facts we record: the newest
	version published to npm (nightly and canary builds don't count), the newest commit on the default
	branch, whether the repository is archived, and any explicit deprecation by the maintainers.
	Copy-paste registries without an npm package use their newest release tag, or their last commit.
</p>
<p>
	Ages are measured against the date those facts were checked, shown on each page, so a badge only
	changes when someone re-checks the entry. A project is only marked deprecated when it is archived or its
	maintainers say so, never because it has been quiet. "Legacy" also covers projects whose current
	release does not support Svelte {currentSvelteMajor}, however recently they were released.
</p>
<div class="ulp-table-wrap">
	<table class="ulp-table">
		<thead><tr><th>Badge</th><th>Rule</th><th>Libraries</th><th>Tools</th></tr></thead>
		<tbody>
			{#each maintenanceStatuses as s (s)}
				<tr>
					<th scope="row"><span class="ulp-chip status {s}"><span class="dot" aria-hidden="true"></span>{maintenanceInfo[s].label}</span></th>
					<td>{maintenanceInfo[s].description}</td>
					<td>{statusCount(s, libraries)}</td>
					<td>{statusCount(s, tools)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<p class="ulp-muted">
	Collect the facts for an entry with <code>node scripts/maintenance-facts.js &lt;id&gt;</code>. Read
	the project's README and docs yourself for deprecation notices; the script only reports npm's
	<code>deprecated</code> field and the archive flag.
</p>

<style>
	.status .dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: currentColor;
	}
	.active { color: var(--ulp-status-active); }
	.quiet { color: var(--ulp-status-quiet); }
	.legacy { color: var(--ulp-status-legacy); }
	.deprecated { color: var(--ulp-status-deprecated); }
</style>
