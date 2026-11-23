<!--
  M3 Svelte ships its own CSS; ./styles.css is the quick-start default theme. No styles of ours.
  Icon draws any Iconify-format icon object as an inline SVG; the shapes below are ours, as the
  library's icon set isn't a direct dependency here.
  Docs: https://kendell.dev/m3-svelte/#icons-demo
-->
<script lang="ts">
	import './styles.css'
	import { Icon } from 'm3-svelte'

	const star = {
		body: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/>',
		width: 24,
		height: 24,
	}
	const heart = {
		body: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="currentColor"/>',
		width: 24,
		height: 24,
	}
</script>

<p>
	<Icon icon={star} /> Inherits the text size (1em)
</p>
<p>
	<Icon icon={star} size={24} />
	<Icon icon={heart} size={40} />
	<Icon icon={heart} size={56} />
</p>
