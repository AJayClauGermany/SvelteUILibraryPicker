<script lang="ts">
	import { url } from '#lib/url.ts'
	import type { Library, Tool } from '#lib/data/schema.ts'
	import { maintenanceInfo, maintenanceStatus } from '#lib/data/index.ts'
	import MaintenanceBadge from './MaintenanceBadge.svelte'

	const { entry }: { entry: Library | Tool } = $props()

	const status = $derived(maintenanceStatus(entry))
	const m = $derived(entry.maintenance)
</script>

{#if m && status}
	<MaintenanceBadge {entry} /> <a href={url('/guide/features/#maintenance')} class="ulp-muted">what this means</a>
	<div class="ulp-muted">{maintenanceInfo[status].description}</div>
	<ul class="facts">
		{#if m.lastRelease}<li>Last release: <code>{m.lastRelease.version}</code> on {m.lastRelease.date}</li>{/if}
		{#if m.lastCommit}<li>Last commit on the default branch: {m.lastCommit}</li>{/if}
		{#if m.archived}<li>The repository is archived (read-only).</li>{/if}
		{#if m.deprecated}<li>Deprecated: {m.deprecated.summary} <a href={m.deprecated.source} target="_blank" rel="noopener noreferrer">Source</a></li>{/if}
		<li class="ulp-muted">
			Checked {m.checked}:
			{#each m.sources as s, i (s)}<a href={s} target="_blank" rel="noopener noreferrer">{new URL(s).hostname}</a>{i < m.sources.length - 1 ? ', ' : ''}{/each}
		</li>
	</ul>
{:else}
	<span class="ulp-muted">Not recorded yet.</span>
{/if}

<style>
	.facts {
		margin: 0.4rem 0 0;
		padding-left: 1.1rem;
	}
</style>
