/** Unit tests for the port logic behind `/port/` (run with `pnpm validate`). */
import { describe, expect, it } from 'vitest'
import { portRows, portStatus, summarizePort } from './index'

describe('portStatus', () => {
	it('separates unchecked, absent and gained props', () => {
		expect(portStatus(undefined, { name: 'open' })).toBe('unknown')
		expect(portStatus(null, null)).toBe('neither')
		expect(portStatus(null, { name: 'open' })).toBe('gained')
		expect(portStatus({ name: 'open' }, null)).toBe('missing')
	})

	it('treats the main part, no part and any Root as the same place', () => {
		expect(portStatus({ name: 'open' }, { name: 'open', on: 'Dialog.Root' })).toBe('same')
		expect(portStatus({ name: 'open', on: 'Modal' }, { name: 'open' }, { from: 'Modal' })).toBe('same')
		expect(portStatus({ name: 'open', on: 'Dialog.Root' }, { name: 'open', on: 'Root' })).toBe('same')
	})

	it('flags renames, moves and differing values', () => {
		expect(portStatus({ name: 'on:click' }, { name: 'onclick' })).toBe('renamed')
		expect(portStatus({ name: 'value', on: 'Tabs.List' }, { name: 'value' })).toBe('renamed')
		expect(portStatus({ name: 'size', values: ['sm', 'lg'] }, { name: 'size', values: ['lg', 'sm'] })).toBe('same')
		expect(portStatus({ name: 'size', values: ['sm', 'lg'] }, { name: 'size', values: ['xs', 'lg'] })).toBe('values')
	})
})

describe('portRows', () => {
	it('lists every canonical prop of the component and summarizes them', () => {
		const rows = portRows(
			'dialog',
			{ style: 'props', parts: ['Modal'], source: 'https://example.com', props: { open: { name: 'open', on: 'Modal' }, size: { name: 'size' } } },
			{ style: 'compound', parts: ['Dialog.Root'], source: 'https://example.com', props: { open: { name: 'open', on: 'Dialog.Root' }, size: null } },
		)
		expect(rows.map(r => r.prop)).toEqual(['open', 'onOpenChange', 'title', 'description', 'closeOnEscape', 'closeOnOutsideClick', 'showCloseButton', 'preventScroll', 'size'])
		const sum = summarizePort(rows)
		expect(sum.same).toBe(1)
		expect(sum.missing).toBe(1)
		expect(sum.unknown).toBe(7)
	})
})
