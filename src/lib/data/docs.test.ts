/**
 * Contributor docs stay in step with the repo — part of `pnpm validate`.
 *
 * Relative links in the agent and contributor docs (AGENTS.md, CONTRIBUTING.md, README.md, docs/,
 * the Claude Code skills) must point at files that exist, and every playbook needs a skill and
 * vice versa, so a renamed or deleted file can't leave instructions pointing nowhere.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = fileURLToPath(new URL('../../..', import.meta.url))
const mdIn = (dir: string) => readdirSync(join(root, dir)).filter(f => f.endsWith('.md')).map(f => join(dir, f))
const skills = readdirSync(join(root, '.claude/skills'))
const playbooks = readdirSync(join(root, 'docs/playbooks')).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3))

const files = [
	'AGENTS.md',
	'CLAUDE.md',
	'CONTRIBUTING.md',
	'GEMINI.md',
	'README.md',
	'.github/copilot-instructions.md',
	'.github/pull_request_template.md',
	...mdIn('docs'),
	...mdIn('docs/playbooks'),
	...skills.map(s => `.claude/skills/${s}/SKILL.md`),
]

describe('contributor docs', () => {
	for (const file of files) {
		it(`${file}: relative links resolve`, () => {
			const text = readFileSync(join(root, file), 'utf8')
			for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
				if (/^(?:[a-z]+:|#|\/)/.test(target)) continue
				const path = join(dirname(join(root, file)), decodeURI(target.split('#')[0]))
				expect(existsSync(path), `${file} links to ${relative(root, path)}, which doesn't exist`).toBe(true)
			}
		})
	}

	it('every playbook has a Claude Code skill', () => {
		expect(skills.filter(s => s !== 'maintain').sort()).toEqual([...playbooks].sort())
	})
})
