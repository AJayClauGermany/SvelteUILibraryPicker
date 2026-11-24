<script lang="ts">
	import type { Library, Tool } from '#lib/data/schema.ts'
	import { maintenanceInfo, maintenanceStatus } from '#lib/data/index.ts'

	const { entry }: { entry: Library | Tool } = $props()

	const status = $derived(maintenanceStatus(entry))
	const m = $derived(entry.maintenance)
	/** "Archived" reads better than "Deprecated" when that is the only reason for red. */
	const label = $derived(status === 'deprecated' && m?.archived && !m.deprecated ? 'Archived' : status && maintenanceInfo[status].label)
	const title = $derived.by(() => {
		if (!status || !m) return ''
		const facts = [
			m.lastRelease && `Last release ${m.lastRelease.version} on ${m.lastRelease.date}`,
			m.lastCommit && `last commit ${m.lastCommit}`,
			m.archived && 'repository archived',
			m.deprecated && `deprecated: ${m.deprecated.summary}`,
		].filter(Boolean).join(', ')
		return `${maintenanceInfo[status].description} ${facts} (checked ${m.checked}).`
	})
</script>

{#if status}
	<span class="ulp-chip {status}" {title}><span class="dot" aria-hidden="true"></span>{label}</span>
{/if}

<style>
	.dot {
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
