<!--
  Spaper's default look is PapierCSS on Tailwind CSS 4; ./styles.css loads it as the install guide does.
  Collapsibles sharing a `name` form an exclusive group (one open at a time).
  Docs: https://oli8.github.io/spaper/components/Collapsible
-->
<script lang="ts">
	import './styles.css'
	import { Collapsible } from 'spaper'
</script>

<Collapsible name="faq" label="Can I change my plan?" open>
	<p>Yes, at any time from the billing page.</p>
</Collapsible>
<Collapsible name="faq" label="Do you offer refunds?">
	<p>Within 14 days of the first payment.</p>
</Collapsible>
<Collapsible name="faq" label="Where is my data stored?">
	<p>In the region you picked when signing up.</p>
</Collapsible>
