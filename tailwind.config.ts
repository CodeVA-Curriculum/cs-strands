import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { CodeVATheme } from './codeva-theme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '0rem',
				lg: '10rem'
			}
		}
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton'
					},
				],
				custom: [
					CodeVATheme
				]
			},
		}),
	],
} satisfies Config;
