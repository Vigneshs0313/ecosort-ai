import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the built site run from any static host path (GitHub Pages, Netlify, Cloudflare Pages).
export default defineConfig({ base: '/ecosort-ai/', plugins: [react()] })
