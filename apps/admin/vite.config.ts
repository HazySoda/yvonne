import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import SemiPlugin from './scripts/vite-plugin-semi'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), SemiPlugin({ cssLayer: true })],
  server: {
    port: 4000,
  },
})
