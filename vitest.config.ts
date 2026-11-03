import { defineConfig } from 'vitest/config'

// Kept separate from vite.config.ts so data validation runs without booting SvelteKit.
export default defineConfig({
	test: {
		include: ['src/**/*.test.ts', 'previews/**/*.test.ts'],
	},
})
