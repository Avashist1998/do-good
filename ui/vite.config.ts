import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true
    },
    port:9000
  },
  preview: {
    port: 8080
  }
})
