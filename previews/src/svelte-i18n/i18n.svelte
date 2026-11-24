<!--
  svelte-i18n renders nothing itself: it is a set of stores, so the default is plain unstyled HTML.
  Two tiny dictionaries are registered inline with addMessages (no files loaded from anywhere).
  Docs: https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md
-->
<script lang="ts">
	import { addMessages, init, locale, _, number, date } from 'svelte-i18n'

	addMessages('en', { greeting: 'Hello, {name}!', switch: 'Switch to German' })
	addMessages('de', { greeting: 'Hallo, {name}!', switch: 'Auf Englisch wechseln' })
	init({ fallbackLocale: 'en', initialLocale: 'en' })

	const sample = new Date(2024, 4, 17)
</script>

<p>{$_('greeting', { values: { name: 'Ada' } })}</p>
<p>{$number(1234567.89)}</p>
<p>{$date(sample, { format: 'long' })}</p>
<button onclick={() => locale.set($locale === 'en' ? 'de' : 'en')}>{$_('switch')}</button>
