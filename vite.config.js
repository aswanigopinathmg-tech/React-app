import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Adjusted config for root-level main.jsx
export default defineConfig({
  plugins: [react()],
  base: '/sku_app/',   // your repo name
  root: '.',           // use current folder as root
  build: {
    rollupOptions: {
      // tell rollup/vite that index.html at root is the entry
      input: './index.html'
    }
  }
})
