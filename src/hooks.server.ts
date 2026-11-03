import type { Handle } from '@sveltejs/kit/hooks'

/** Applies per-page titles emitted by `#lib/components/PageMeta.svelte` at prerender time. */
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => {
			const title = html.match(/<meta name="ulp:title" content="([^"]*)"/)?.[1]
			const description = html.match(/<meta name="ulp:description" content="([^"]*)"/)?.[1]
			if (title) html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
			if (description) html = html.replace(/(<meta name="description" content=")[^"]*"/, `$1${description}"`)
			return html
		},
	})
