---
name: add-preview
description: Add a live, isolated preview of a library component using its default styling.
---

# Playbook: add a live preview

Output: `previews/src/<library-id>/<component-id>.svelte`, plus the library as a devDependency.

## Preconditions (all required)

1. The library has an entry in `src/lib/data/libraries/` whose `components` includes `<component-id>`.
2. Its `ai.status` is `welcomes` or `no-statement`. **Stop here** if it is `restricted` or
   `unreviewed`: those libraries get facts and links only (humans can discuss exceptions in an issue).
3. Its license allows normal use as an npm dependency. All current entries do.

## Steps

1. `pnpm add -D <package>@<exact version recorded in the data file>`
2. Create the preview file:

   ```svelte
   <!--
     One line on what "default" means for this library (e.g. "headless: unstyled on purpose").
     Docs: <the component's official docs URL>
   -->
   <script lang="ts">
   	import '<library default CSS, if its install guide requires one>'
   	import { Thing } from '<package>'
   </script>

   <Thing>Example</Thing>
   ```

3. Rules:
   - Use the **default** theme or styles, exactly as the library's install guide sets them up.
   - Write a **minimal** example of your own. Don't copy the docs' examples.
   - **No styles of ours.** No `<style>` blocks, classes or wrappers that change the look.
   - Import the library's CSS inside the preview file, not globally.
   - Libraries that need Tailwind get one `previews/src/<library-id>/styles.css` (see Skeleton
     or Flowbite Svelte for the pattern: `@import 'tailwindcss' source(none)`, the library's
     documented theme imports, and `@source` lines for this folder and the library's package).
     Every preview of that library imports `./styles.css`. Add any plugin package the
     library's install guide requires (e.g. `flowbite`, `@tailwindcss/forms`) as a devDependency.
   - Libraries that need a Vite plugin (e.g. M3 Svelte) register it in `previews/vite.config.ts`
     only, never in the site's root config.
4. Check it: `pnpm dev`, then open `/preview/?library=<id>&component=<id>` and the component's
   page at `/components/<id>/`.
5. `pnpm verify`
