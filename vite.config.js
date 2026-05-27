import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@course-dev-routes': resolve(
        __dirname,
        mode === 'development' ? 'src/routes.dev.jsx' : 'src/routes.dev.stub.jsx'
      ),
    },
  },
}))
