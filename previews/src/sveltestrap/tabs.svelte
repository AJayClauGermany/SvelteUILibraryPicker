<!--
  Sveltestrap renders Bootstrap 5 markup and ships no CSS of its own; its install guide says
  to load Bootstrap 5 CSS yourself, so we import the stock Bootstrap stylesheet. No styles of ours.
  Docs: https://sveltestrap.js.org/?path=/docs/components-tabs--docs
-->
<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css'
	import { TabContent, TabPane } from '@sveltestrap/sveltestrap'
</script>

<TabContent>
	<TabPane tabId="first" tab="First" active>Content for the first tab.</TabPane>
	<TabPane tabId="second" tab="Second">Content for the second tab.</TabPane>
	<TabPane tabId="third" tab="Third">Content for the third tab.</TabPane>
</TabContent>
