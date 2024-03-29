import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://imsitri.github.io/Stock',
  base: '/Stock',
  build: {
    assets: 'astro',
  }
})

