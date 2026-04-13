import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    allowedHosts: true // Zezwala na dostęp z każdego adresu (w tym ngrok)
  },
})
