<!--
Thanks for contributing. Please keep a PR to ONE library, tool, preview set, component id, fix
or page (CONTRIBUTING.md). Larger PRs are usually asked to split before review.

The linked issue needs the `pr-allowed` label (a maintainer adds it during weekly triage).
Typo and broken-link fixes don't need an issue.

Found something outside this PR (docs that contradict each other, an undocumented field, a bug
elsewhere)? Leave it out of this PR. Post it as a comment after this description and open an issue.
-->

Closes #<!-- the number of an issue labelled pr-allowed -->

## What and why

<!-- One or two sentences. -->

## Sources

<!--
One source per fact you added or changed: `npm view <pkg> version peerDependencies`, a file in the
library's repo (link the commit or tag), or an official docs page. List anything you could NOT
verify and left out.
-->

## Data changes

<!-- Paste the output of `pnpm changes --markdown`, or write "None" for site/code changes. -->

## Checklist

- [ ] `pnpm verify` passes
- [ ] `pnpm changes` lists only the entry this PR is about (or none)
- [ ] I opened every docs and source link I added, and each one shows what the data says
- [ ] Descriptions and notes are in my own words, with no rankings or "best" claims
- [ ] I respected the library's license and `ai.status` (no previews or generated content for `restricted` / `unreviewed`)
- [ ] `lastVerified` (and `maintenance.checked`, if refreshed) is set to today on entries I re-checked
- [ ] Previews, if any: default styling only, and `pnpm check:previews <id>` passes

## AI assistance

<!--
Pick one and fill it in. Using AI is fine; we just need to know what to look at closely.
-->

- [ ] None
- [ ] An AI tool helped with: <!-- e.g. "drafting the entry and the previews" -->. I read the whole diff and checked the sources myself, except: <!-- anything you did not check, or "nothing" -->
