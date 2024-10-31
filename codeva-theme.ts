
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const CodeVATheme: CustomThemeConfig = {
    name: 'codeva-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "var(--color-surface-900)",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-900)",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "var(--color-surface-900)",
		"--on-warning": "var(--color-surface-900)",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #5ebbed 
		"--color-primary-50": "231 245 252", // #e7f5fc
		"--color-primary-100": "223 241 251", // #dff1fb
		"--color-primary-200": "215 238 251", // #d7eefb
		"--color-primary-300": "191 228 248", // #bfe4f8
		"--color-primary-400": "142 207 242", // #8ecff2
		"--color-primary-500": "94 187 237", // #5ebbed
		"--color-primary-600": "85 168 213", // #55a8d5
		"--color-primary-700": "71 140 178", // #478cb2
		"--color-primary-800": "56 112 142", // #38708e
		"--color-primary-900": "46 92 116", // #2e5c74
		// secondary | #ff842e 
		"--color-secondary-50": "255 237 224", // #ffede0
		"--color-secondary-100": "255 230 213", // #ffe6d5
		"--color-secondary-200": "255 224 203", // #ffe0cb
		"--color-secondary-300": "255 206 171", // #ffceab
		"--color-secondary-400": "255 169 109", // #ffa96d
		"--color-secondary-500": "255 132 46", // #ff842e
		"--color-secondary-600": "230 119 41", // #e67729
		"--color-secondary-700": "191 99 35", // #bf6323
		"--color-secondary-800": "153 79 28", // #994f1c
		"--color-secondary-900": "125 65 23", // #7d4117
		// tertiary | #0f3760 
		"--color-tertiary-50": "219 225 231", // #dbe1e7
		"--color-tertiary-100": "207 215 223", // #cfd7df
		"--color-tertiary-200": "195 205 215", // #c3cdd7
		"--color-tertiary-300": "159 175 191", // #9fafbf
		"--color-tertiary-400": "87 115 144", // #577390
		"--color-tertiary-500": "15 55 96", // #0f3760
		"--color-tertiary-600": "14 50 86", // #0e3256
		"--color-tertiary-700": "11 41 72", // #0b2948
		"--color-tertiary-800": "9 33 58", // #09213a
		"--color-tertiary-900": "7 27 47", // #071b2f
		// success | #75bc4a 
		"--color-success-50": "234 245 228", // #eaf5e4
		"--color-success-100": "227 242 219", // #e3f2db
		"--color-success-200": "221 238 210", // #ddeed2
		"--color-success-300": "200 228 183", // #c8e4b7
		"--color-success-400": "158 208 128", // #9ed080
		"--color-success-500": "117 188 74", // #75bc4a
		"--color-success-600": "105 169 67", // #69a943
		"--color-success-700": "88 141 56", // #588d38
		"--color-success-800": "70 113 44", // #46712c
		"--color-success-900": "57 92 36", // #395c24
		// warning | #f2e58f 
		"--color-warning-50": "253 251 238", // #fdfbee
		"--color-warning-100": "252 250 233", // #fcfae9
		"--color-warning-200": "252 249 227", // #fcf9e3
		"--color-warning-300": "250 245 210", // #faf5d2
		"--color-warning-400": "246 237 177", // #f6edb1
		"--color-warning-500": "242 229 143", // #f2e58f
		"--color-warning-600": "218 206 129", // #dace81
		"--color-warning-700": "182 172 107", // #b6ac6b
		"--color-warning-800": "145 137 86", // #918956
		"--color-warning-900": "119 112 70", // #777046
		// error | #f51717 
		"--color-error-50": "254 220 220", // #fedcdc
		"--color-error-100": "253 209 209", // #fdd1d1
		"--color-error-200": "253 197 197", // #fdc5c5
		"--color-error-300": "251 162 162", // #fba2a2
		"--color-error-400": "248 93 93", // #f85d5d
		"--color-error-500": "245 23 23", // #f51717
		"--color-error-600": "221 21 21", // #dd1515
		"--color-error-700": "184 17 17", // #b81111
		"--color-error-800": "147 14 14", // #930e0e
		"--color-error-900": "120 11 11", // #780b0b
		// surface | #323f47 
		"--color-surface-50": "224 226 227", // #e0e2e3
		"--color-surface-100": "214 217 218", // #d6d9da
		"--color-surface-200": "204 207 209", // #cccfd1
		"--color-surface-300": "173 178 181", // #adb2b5
		"--color-surface-400": "112 121 126", // #70797e
		"--color-surface-500": "50 63 71", // #323f47
		"--color-surface-600": "45 57 64", // #2d3940
		"--color-surface-700": "38 47 53", // #262f35
		"--color-surface-800": "30 38 43", // #1e262b
		"--color-surface-900": "25 31 35", // #191f23
		
	}
}