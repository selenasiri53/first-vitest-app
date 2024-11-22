// Configure Vitest - https://vitest.dev/config/

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // use global to avoid global imports
    globals: true,
    exclude: []
  }
})