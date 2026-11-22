<script module lang="ts">
	export const frontmatter = {
		title: 'Port between libraries',
		description: 'Moving code from one Svelte UI library to another: which props keep their names, which are renamed or moved, and what has no equivalent.',
	}
</script>

<script lang="ts">
	import { url } from '#lib/url.ts'
	import type { ComponentId, PortStatus, PropComponentId } from '#lib/data/index.ts'
	import { afterNavigate, replaceState } from '$app/navigation'
	import { page } from '$app/state'
	import DocsLink from '#lib/components/DocsLink.svelte'
	import InlineCode from '#lib/components/InlineCode.svelte'
	import PropCell from '#lib/components/PropCell.svelte'
	import SecondarySourceNotice from '#lib/components/SecondarySourceNotice.svelte'
	import {
		apiFor,
		apiStyleInfo,
		components,
		conventionIds,
		conventionInfo,
		findComponent,
		getCanonicalProp,
		libraries,
		librariesWithPortData,
		portRows,
		portStatusInfo,
		propComponentIds,
		propKindInfo,
		summarizePort,
		toolsFor,
	} from '#lib/data/index.ts'

	const choices = librariesWithPortData.length >= 2 ? librariesWithPortData : libraries
	let from = $state(choices[0]?.id ?? '')
	let to = $state(choices[1]?.id ?? '')
	let focus = $state<PropComponentId | ''>('')
	let hideSame = $state(false)
	let ready = $state(false)

	// State lives in the URL (?from=a&to=b&component=x) so a port view can be shared.
	afterNavigate(() => {
		const params = page.url.searchParams
		const isLib = (id: string | null) => !!id && libraries.some(l => l.id === id)
		const f = params.get('from')
		const t = params.get('to')
		if (isLib(f)) from = f!
		if (isLib(t)) to = t!
		const c = params.get('component')
		focus = c && (propComponentIds as string[]).includes(c) ? (c as PropComponentId) : ''
		ready = true
	})

	$effect(() => {
		const params = new URLSearchParams({ from, to })
		if (focus) params.set('component', focus)
		if (ready) replaceState(`?${params}`, {})
	})

	const fromLib = $derived(libraries.find(l => l.id === from)!)
	const toLib = $derived(libraries.find(l => l.id === to)!)

	/** Components with canonical props that both libraries list. */
	const shared = $derived(
		propComponentIds
			.filter(id => !focus || id === focus)
			.filter(id => findComponent(fromLib, id) && findComponent(toLib, id))
			.map((id) => {
				const fromApi = apiFor(fromLib, id)
				const toApi = apiFor(toLib, id)
				const rows = portRows(id, fromApi, toApi)
				return { id, fromC: findComponent(fromLib, id)!, toC: findComponent(toLib, id)!, fromApi, toApi, rows, summary: summarizePort(rows) }
			}),
	)

	const total = $derived(summarizePort(shared.flatMap(s => s.rows)))
	const summaryOrder: PortStatus[] = ['same', 'values', 'renamed', 'missing', 'gained', 'unknown']

	/** Every component the source library has but the target lacks. */
	const notInTarget = $derived(
		fromLib.components
			.filter(c => !findComponent(toLib, c.id))
			.map(c => ({ c, tools: toolsFor(c.id) })),
	)

	const conventionRows = $derived(
		conventionIds.filter(id => fromLib.conventions?.[id] || toLib.conventions?.[id]),
	)

	function swap() {
		;[from, to] = [to, from]
	}
</script>

<p>
	Pick the library you're moving <strong>from</strong> and the one you're moving <strong>to</strong>. For each
	component both have, this lines up the props most libraries share (see the
	<a href={url('/components/button/#props')}>props tables</a> on component pages) and says whether a
	prop keeps its name, is renamed or moved to another part, or has no equivalent. It's a starting
	point for a port, not a codemod: always check both libraries' API references.
</p>

<SecondarySourceNotice />

<div class="ulp-filters">
	<label>From
		<select bind:value={from}>
			{#each libraries as lib (lib.id)}<option value={lib.id}>{lib.name}</option>{/each}
		</select>
	</label>
	<button type="button" class="swap" onclick={swap} aria-label="Swap libraries">⇄</button>
	<label>To
		<select bind:value={to}>
			{#each libraries as lib (lib.id)}<option value={lib.id}>{lib.name}</option>{/each}
		</select>
	</label>
	<label>Component
		<select bind:value={focus}>
			<option value="">All with props data</option>
			{#each propComponentIds as id (id)}<option value={id}>{components[id].name}</option>{/each}
		</select>
	</label>
	<label class="inline"><input type="checkbox" bind:checked={hideSame} /> Hide props that stay the same</label>
</div>

{#if from === to}
	<p>Pick two different libraries.</p>
{:else}
	<h2 id="summary">Summary</h2>
	{#if shared.length}
		<p>
			{shared.length} {shared.length === 1 ? 'component' : 'components'} with props data in common.
			Across them:
		</p>
		<ul class="summary">
			{#each summaryOrder as s (s)}
				{#if total[s]}
					<li><span class="status {s}">{portStatusInfo[s].label}</span> {total[s]} <span class="ulp-muted">— {portStatusInfo[s].description}</span></li>
				{/if}
			{/each}
		</ul>
	{:else}
		<p class="ulp-muted">These two libraries share none of the components we record props for{focus ? ' (with this filter)' : ''}.</p>
	{/if}

	{#if conventionRows.length}
		<h2 id="conventions">Library-wide conventions</h2>
		<p class="ulp-muted">Habits that apply to every component, so you learn them once.</p>
		<div class="ulp-table-wrap">
			<table class="ulp-table">
				<thead><tr><th>Convention</th><th>{fromLib.name}</th><th>{toLib.name}</th></tr></thead>
				<tbody>
					{#each conventionRows as id (id)}
						{@const a = fromLib.conventions?.[id]}
						{@const b = toLib.conventions?.[id]}
						<tr>
							<th scope="row" title={conventionInfo[id].description}>{conventionInfo[id].label}</th>
							<td>{#if a}<InlineCode text={a.value} />{#if a.notes}<div class="ulp-muted small"><InlineCode text={a.notes} /></div>{/if} <a class="ulp-muted small" href={a.source} target="_blank" rel="noopener noreferrer">source</a>{:else}<span class="ulp-muted">?</span>{/if}</td>
							<td>{#if b}<InlineCode text={b.value} />{#if b.notes}<div class="ulp-muted small"><InlineCode text={b.notes} /></div>{/if} <a class="ulp-muted small" href={b.source} target="_blank" rel="noopener noreferrer">source</a>{:else}<span class="ulp-muted">?</span>{/if}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}

	{#each shared as s (s.id)}
		{@const rows = hideSame ? s.rows.filter(r => r.status !== 'same' && r.status !== 'neither') : s.rows.filter(r => r.status !== 'neither')}
		<h2 id={s.id}><a href={url(`/components/${s.id}/`)}>{components[s.id].name}</a></h2>
		<p>
			<code>{s.fromC.name}</code> → <code>{s.toC.name}</code>
			<span class="ulp-muted">·</span> <DocsLink href={s.fromC.docs}>{fromLib.name} docs</DocsLink>
			<span class="ulp-muted">·</span> <DocsLink href={s.toC.docs}>{toLib.name} docs</DocsLink>
		</p>
		{#if s.fromApi && s.toApi}
			<p class="small">
				Shape: <span class="ulp-chip" title={apiStyleInfo[s.fromApi.style].description}>{apiStyleInfo[s.fromApi.style].label}</span>
				→ <span class="ulp-chip" title={apiStyleInfo[s.toApi.style].description}>{apiStyleInfo[s.toApi.style].label}</span>
				{#if s.fromApi.style !== s.toApi.style}<span class="ulp-muted">The markup structure changes, not just prop names.</span>{/if}
			</p>
			<p class="small ulp-muted">
				{fromLib.name}: {#each s.fromApi.parts as part, i (part)}{#if i}, {/if}<code>{part}</code>{/each}
				<br />{toLib.name}: {#each s.toApi.parts as part, i (part)}{#if i}, {/if}<code>{part}</code>{/each}
			</p>
		{/if}
		{#if !s.fromApi || !s.toApi}
			<p class="ulp-muted">Props not recorded yet for {[!s.fromApi && fromLib.name, !s.toApi && toLib.name].filter(Boolean).join(' and ')}.</p>
		{:else if rows.length}
			<div class="ulp-table-wrap">
				<table class="ulp-table">
					<thead><tr><th>Prop</th><th>{fromLib.name}</th><th>{toLib.name}</th><th>Change</th></tr></thead>
					<tbody>
						{#each rows as r (r.prop)}
							{@const def = getCanonicalProp(s.id, r.prop)!}
							<tr>
								<th scope="row"><code>{r.prop}</code><div class="ulp-muted small">{propKindInfo[def.kind].label}: {def.description}</div></th>
								<td><PropCell mapping={r.from} mainPart={s.fromApi.parts[0]} /></td>
								<td><PropCell mapping={r.to} mainPart={s.toApi.parts[0]} /></td>
								<td><span class="status {r.status}" title={portStatusInfo[r.status].description}>{portStatusInfo[r.status].label}</span></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="ulp-muted">Every recorded prop keeps its name.</p>
		{/if}
	{/each}

	{#if notInTarget.length && !focus}
		<h2 id="not-in-target">{fromLib.name} components that {toLib.name} doesn't list</h2>
		<p class="ulp-muted">You'd keep these from another package. Related tools are listed where we track one.</p>
		<div class="ulp-table-wrap">
			<table class="ulp-table">
				<thead><tr><th>Component</th><th>{fromLib.name} name</th><th>Tools</th></tr></thead>
				<tbody>
					{#each notInTarget as { c, tools } (c.id)}
						<tr>
							<td><a href={url(`/components/${c.id}/`)}>{components[c.id as ComponentId].name}</a></td>
							<td>{c.name}</td>
							<td>{#each tools as t, i (t.id)}{#if i}, {/if}<a href={url(`/tools/${t.id}/`)}>{t.name}</a>{:else}<span class="ulp-muted">—</span>{/each}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
{/if}

<style>
	.swap {
		padding: 0.4rem 0.7rem;
		border: 1px solid var(--ulp-border);
		border-radius: 8px;
		background: var(--ulp-surface);
		color: inherit;
		cursor: pointer;
	}
	.inline {
		flex-direction: row !important;
		align-items: center;
		gap: 0.4rem !important;
	}
	.small {
		font-size: 0.8rem;
	}
	.summary {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 0.35rem;
	}
	.status {
		display: inline-block;
		padding: 0.05rem 0.5rem;
		border-radius: 999px;
		font-size: 0.78rem;
		white-space: nowrap;
		border: 1px solid currentColor;
	}
	.status.same {
		color: var(--ulp-ok);
	}
	.status.values,
	.status.renamed {
		color: var(--ulp-warn);
	}
	.status.missing {
		color: var(--ulp-bad);
	}
	.status.gained,
	.status.unknown,
	.status.neither {
		color: var(--ulp-muted);
	}
</style>
