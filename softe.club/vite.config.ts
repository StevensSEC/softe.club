import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.md', '**/*.yaml'],
  build: {
    cssMinify: "lightningcss",
  },
  test: {
    environment: "jsdom",
    globals: true,
  }
})
