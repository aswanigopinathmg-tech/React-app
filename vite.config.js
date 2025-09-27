import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // explicitly tell Vite root is current folder
  base: '/', // your base path
  build: {
    outDir: 'dist', // built files go here
  },
})
