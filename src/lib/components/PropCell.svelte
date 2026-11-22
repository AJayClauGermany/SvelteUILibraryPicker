<script lang="ts">
	/** One library's spelling of a canonical prop: name, where it goes, values, default. */
	import type { PropMapping } from '#lib/data/index.ts'

	interface Props {
		/** `undefined`: not checked; `null`: checked, no equivalent. */
		mapping: PropMapping | null | undefined
		/** Hide the part name when it is the component's main part. */
		mainPart?: string
	}

	const { mapping, mainPart }: Props = $props()
</script>

{#if mapping === undefined}
	<span class="ulp-muted" title="Not recorded yet">?</span>
{:else if mapping === null}
	<span class="ulp-muted" title="No equivalent">—</span>
{:else}
	<code>{mapping.name}</code>{#if mapping.bindable}<span class="ulp-muted" title="Supports bind:"> bind</span>{/if}
	{#if mapping.on && mapping.on !== mainPart}<div class="ulp-muted small">on <code>{mapping.on}</code></div>{/if}
	{#if mapping.values}<div class="small">{#each mapping.values as v, i (v)}{#if i}, {/if}<code>{v}</code>{/each}</div>{/if}
	{#if mapping.default}<div class="ulp-muted small">default <code>{mapping.default}</code></div>{/if}
	{#if mapping.notes}<div class="ulp-muted small">{mapping.notes}</div>{/if}
{/if}

<style>
	.small {
		font-size: 0.8rem;
		margin-top: 0.15rem;
	}
</style>
