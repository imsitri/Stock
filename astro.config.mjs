import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://imsitri.github.io',
  base: '/Stock',
  trailingSlash: "always",
  build: {
    assets: 'astro',
  }
})

