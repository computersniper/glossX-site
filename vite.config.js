import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project below /glossX-site/. Keep the dev server
  // rooted locally, while making production asset URLs work after deployment.
  base: command === 'build' ? '/glossX-site/' : '/',
}))
