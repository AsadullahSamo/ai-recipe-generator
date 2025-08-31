import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      'node:url': 'url',
      'node:path': 'path',
      'node:fs': 'fs',
      'node:os': 'os',
      'node:crypto': 'crypto'
    }
  },
  optimizeDeps: {
    exclude: ['@aws-amplify/backend']
  },
  build: {
    rollupOptions: {
      external: ['@aws-amplify/backend']
    }
  }
})
