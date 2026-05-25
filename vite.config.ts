import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'
import type { Plugin } from 'vite'

function mockContactPhp(): Plugin {
  return {
    name: 'mock-contact-php',
    configureServer(server) {
      server.middlewares.use('/contact.php', (req, res, next) => {
        if (req.method !== 'POST') return next()
        let body = ''
        req.on('data', (chunk: Buffer) => { body += chunk.toString() })
        req.on('end', () => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ status: 'success' }))
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), svgr(), mockContactPhp()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    allowedHosts: true,
  },
})
