import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']]
			}
		}),
		tailwindcss()
	],
	base: '/alrzakh.github.io/' // No repo name in URL for username.github.io repo
})
