---
title: Licenses & AI policy
---

## Licenses

Every library entry records its license as an [SPDX identifier](https://spdx.org/licenses/) with a
link to the LICENSE file in its repository. How we use library material:

| What | Allowed here? |
| --- | --- |
| Facts (component names, versions, license, Svelte support) | ✅ Yes, with a link to the source |
| Short descriptions written in our own words | ✅ Yes |
| Links to official docs pages | ✅ Always — required |
| Copying documentation prose, API tables, code examples | ❌ No — link instead |
| Logos, screenshots or other brand assets | ❌ Not without explicit permission |
| Live previews that install the library from npm and use it normally | ✅ Yes, under the library's license, with our own minimal example code |

This project's own code is MIT licensed. That does **not** relicense anything from the libraries
we list; each library remains under its own license.

## AI policy

This project is built to be friendly to contributors who use AI agents. It also commits to
respecting each library's wishes about AI. For every library we record what its maintainers have
said, with sources:

| Status | Meaning | What contributors may do |
| --- | --- | --- |
| **welcomed** | Maintainers explicitly support AI tooling (e.g. publish an `llms.txt`, an MCP server or agent skills). | Anything allowed by our general rules. Prefer the library's `llms.txt` when an agent needs to read docs. |
| **no statement** | We checked the repo and docs and found nothing. | Anything allowed by our general rules. |
| **restricted** | Maintainers ask that AI not be used with their project for some purposes. | Facts and links only. **No AI-generated previews or content.** Discuss in an issue first. |
| **unreviewed** | Nobody has checked yet. | Treat as restricted until someone checks. |

Rules that only cover contributing to a library's **own** repository (e.g. "don't use AI to write
issue or PR text") are recorded separately as *Contributing upstream* on the library page. They
don't limit this site, but if you (or your agent) contribute upstream, follow them.

These rules are enforced by `pnpm validate`, which fails if a preview exists for a library whose
policy is `restricted` or `unreviewed`.

If you maintain a library listed here and want something changed or removed, please
[open an issue](https://github.com/AJayClauGermany/SvelteUILibraryPicker/issues/new/choose) — we'll
act on it promptly.
