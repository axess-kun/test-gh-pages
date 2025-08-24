import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'test-gh-pages' : './',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // also necessary
  },
  plugins: [react()],
})
