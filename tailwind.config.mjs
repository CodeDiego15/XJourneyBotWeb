/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			extend: {
				colors: {
				  'pink-400': '#EC4899',
				},
			  },
		},
	},
	plugins: [],
}
