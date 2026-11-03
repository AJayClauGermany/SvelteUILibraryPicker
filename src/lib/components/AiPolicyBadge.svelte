<script lang="ts">
	import type { AiPolicyStatus } from '#lib/data/schema.ts'

	const { status }: { status: AiPolicyStatus } = $props()

	const labels: Record<AiPolicyStatus, { text: string, tone: string, title: string }> = {
		'welcomes': { text: 'AI: welcomed', tone: 'ok', title: 'Maintainers explicitly support AI tooling (e.g. llms.txt, MCP, AI docs).' },
		'no-statement': { text: 'AI: no statement', tone: 'neutral', title: 'We found no stated policy about AI tools in the repo or docs.' },
		'restricted': { text: 'AI: restricted', tone: 'bad', title: 'Maintainers ask that AI not be used for some purposes. We only accept human-written content for this library.' },
		'unreviewed': { text: 'AI: unreviewed', tone: 'warn', title: 'Nobody has checked this library\'s stance yet.' },
	}
	const info = $derived(labels[status])
</script>

<span class="ulp-chip {info.tone}" title={info.title}>{info.text}</span>

<style>
	.ok { color: var(--ulp-ok); }
	.warn { color: var(--ulp-warn); }
	.bad { color: var(--ulp-bad); }
</style>
